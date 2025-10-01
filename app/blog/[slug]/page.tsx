import Image from "next/image";
import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

async function getPost(slug: string) {
  const strapiUrl =
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    "https://loved-pleasure-cb5eab8cd5.strapiapp.com";

  const url = `${strapiUrl}/api/posts?filters[slug][$eq]=${slug}&populate=*`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return null;
    }

    const json = await res.json();

    if (!json.data || !json.data.length) {
      return null;
    }

    return json.data[0];
  } catch (error) {
    return null;
  }
}

// ✅ Updated type definition for Next.js 15
type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  // ✅ Await the params Promise
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  // Helper function to extract text from Strapi rich text content
  const extractTextFromContent = (content: any[]): string => {
    if (!Array.isArray(content)) return "";

    return content
      .map((block) => {
        if (block.children && Array.isArray(block.children)) {
          return block.children.map((child: any) => child.text || "").join("");
        }
        return "";
      })
      .join(" ")
      .trim();
  };

  const contentText = extractTextFromContent(post.content);

  return {
    title: post.title,
    description: contentText.slice(0, 150),
    openGraph: {
      title: post.title,
      description: contentText.slice(0, 150),
      // Note: Add images here when you have cover images configured
    },
  };
}

export async function generateStaticParams() {
  try {
    // Skip static generation if API URL is not available or in development
    if (!process.env.NEXT_PUBLIC_STRAPI_API_URL) {
      console.warn(
        "NEXT_PUBLIC_STRAPI_API_URL not configured, skipping static generation"
      );
      return [];
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
        // Add timeout to prevent hanging during build
        signal: AbortSignal.timeout(10000), // 10 second timeout
      }
    );

    if (!res.ok) {
      console.warn(
        `Failed to fetch posts for static generation: ${res.status}`
      );
      return [];
    }

    const { data } = await res.json();
    return data.map((post: any) => ({ slug: post.slug })); // Updated to use post.slug directly
  } catch (error) {
    console.warn(
      "Failed to generate static params, falling back to dynamic rendering:",
      error
    );
    return []; // Return empty array to skip static generation
  }
}

// Helper function to render Strapi rich text content
// Helper: render inline children (text nodes with bold/italic/code/links)
function renderInline(children: any[]) {
  if (!Array.isArray(children)) return null;

  return children.map((child: any, idx: number) => {
    if (typeof child === "string") return child;

    // Simple text node case: { text: "..." , bold: true, italic: true, href: "..." }
    if (child.text !== undefined) {
      let node: any = child.text ?? "";

      // Marks/properties (apply in a stable order so nesting is predictable)
      if (child.code)
        node = React.createElement(
          "code",
          { key: `code-${idx}`, className: "bg-gray-100 px-1 rounded" },
          node
        );
      if (child.bold)
        node = React.createElement("strong", { key: `strong-${idx}` }, node);
      if (child.italic)
        node = React.createElement("em", { key: `em-${idx}` }, node);
      if (child.underline)
        node = React.createElement("u", { key: `u-${idx}` }, node);
      if (child.strike || child.strikethrough)
        node = React.createElement("s", { key: `s-${idx}` }, node);

      // link variants (href or url)
      const href =
        child.href ||
        child.url ||
        (child.marks &&
          child.marks.find((m: any) => m.type === "link")?.attrs?.href);
      if (href) {
        node = React.createElement(
          "a",
          {
            key: `a-${idx}`,
            href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-600 underline",
          },
          node
        );
      }

      // Also support marks array (some editors use marks[])
      if (Array.isArray(child.marks)) {
        child.marks.forEach((m: any, mi: number) => {
          if (m.type === "bold")
            node = React.createElement(
              "strong",
              { key: `m-${idx}-${mi}` },
              node
            );
          if (m.type === "italic")
            node = React.createElement("em", { key: `m-${idx}-${mi}` }, node);
          if (m.type === "code")
            node = React.createElement(
              "code",
              { key: `mcode-${idx}-${mi}` },
              node
            );
          if (m.type === "link" && m.attrs?.href) {
            node = React.createElement(
              "a",
              {
                key: `mlink-${idx}-${mi}`,
                href: m.attrs.href,
                target: "_blank",
                rel: "noopener noreferrer",
              },
              node
            );
          }
        });
      }

      return React.createElement(React.Fragment, { key: `frag-${idx}` }, node);
    }

    // Nested blocks inside children (rare) — render recursively
    if (child.children) {
      return React.createElement(
        React.Fragment,
        { key: `child-${idx}` },
        renderInline(child.children)
      );
    }

    return null;
  });
}

// Robust block renderer (drop this in place of your current renderContent)
function renderContent(content: any[]) {
  if (!Array.isArray(content)) {
    return React.createElement("p", {}, "Content format error - not an array");
  }

  return content.map((block: any, index: number) => {
    // tolerant type detection (Strapi / different editors may use different keys)
    const type =
      block.type ||
      block.nodeType ||
      block.name ||
      (block.text !== undefined ? "text" : undefined) ||
      "unknown";

    // handle plain text nodes that some editors send
    if (type === "text") {
      if (typeof block.text === "string") {
        return React.createElement(
          "p",
          { key: index, className: "mb-4 leading-relaxed" },
          block.text
        );
      }
      return React.createElement(
        "p",
        { key: index, className: "mb-4 leading-relaxed" },
        ...(renderInline(block.children ?? block.content ?? []) || [])
      );
    }

    switch (type) {
      case "paragraph": {
        return React.createElement(
          "p",
          { key: index, className: "mb-4 leading-relaxed" },
          ...(renderInline(block.children ?? block.content ?? []) || [])
        );
      }

      case "heading": {
        const level = block.level || 2;
        const Tag = `h${Math.min(Math.max(level, 1), 6)}` as any;
        return React.createElement(
          Tag,
          {
            key: index,
            className:
              level === 1
                ? "text-3xl font-bold mb-4 mt-6"
                : level === 2
                ? "text-2xl font-bold mb-4 mt-6"
                : level === 3
                ? "text-xl font-bold mb-4 mt-6"
                : "text-lg font-bold mb-4 mt-6",
          },
          ...(renderInline(block.children ?? block.content ?? []) || [])
        );
      }

      case "list": {
        const isOrdered =
          block.format === "ordered" ||
          block.ordered === true ||
          block.listType === "ordered";
        const ListTag = isOrdered ? "ol" : "ul";

        const items =
          Array.isArray(block.children) && block.children.length
            ? block.children.map((li: any, i: number) => {
                // li may be a list-item object or a text node
                if (li.type === "list-item" || li.nodeType === "list-item") {
                  // list-item can contain paragraph children
                  const itemContent =
                    li.children ||
                    li.content ||
                    (li.paragraph ? li.paragraph.children : undefined) ||
                    [];
                  return React.createElement(
                    "li",
                    { key: `li-${index}-${i}`, className: "mb-1" },
                    ...(renderInline(itemContent) || [])
                  );
                }

                // fallback if li is inline text
                return React.createElement(
                  "li",
                  { key: `li-${index}-${i}`, className: "mb-1" },
                  ...(renderInline(li.children ?? [li]) || [])
                );
              })
            : [];

        return React.createElement(
          ListTag,
          {
            key: index,
            className: isOrdered
              ? "list-decimal ml-6 mb-4"
              : "list-disc ml-6 mb-4",
          },
          items
        );
      }

      case "list-item":
        return React.createElement(
          "li",
          { key: index, className: "mb-1" },
          ...(renderInline(block.children ?? block.content ?? []) || [])
        );

      case "blockquote":
        return React.createElement(
          "blockquote",
          {
            key: index,
            className: "border-l-4 pl-4 italic my-4 text-gray-700",
          },
          ...(renderInline(block.children ?? block.content ?? []) || [])
        );

      case "hr":
      case "divider":
        return React.createElement("hr", { key: index, className: "my-6" });

      case "code":
      case "pre":
      case "code-block": {
        const codeText =
          block.code ??
          block.text ??
          (block.children && block.children.map((c: any) => c.text).join("")) ??
          "";
        return React.createElement(
          "pre",
          {
            key: index,
            className: "bg-gray-100 p-4 rounded overflow-auto mb-4",
          },
          React.createElement("code", {}, codeText)
        );
      }

      case "image":
      case "media":
        // attempt to render an img if we can find a url
        const src =
          block.url ||
          block.src ||
          block.image?.url ||
          (block.data && block.data.url);
        if (src) {
          return React.createElement("img", {
            key: index,
            src,
            alt: block.alt || block.caption || "",
            className: "max-w-full rounded mb-4",
          });
        }
        break;

      default:
        // Helpful debug fallback — in dev show the raw block so you can inspect shape
        const preview =
          process.env.NODE_ENV === "production"
            ? `Unknown content type: ${type}`
            : React.createElement(
                "pre",
                { className: "bg-yellow-50 p-2 rounded text-sm mb-4" },
                JSON.stringify(block, null, 2)
              );

        return React.createElement(
          "div",
          {
            key: index,
            className: "mb-4 p-2 bg-yellow-100 border-l-4 border-yellow-500",
          },
          preview
        );
    }

    return null;
  });
}

// ✅ Updated component props type and await params
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  console.log("=== BlogPostPage START ===");

  try {
    // ✅ Await the params Promise
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) {
      console.log("=== POST NOT FOUND ===");
      return (
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <p>
            The requested blog post could not be found for slug:{" "}
            <strong>{slug}</strong>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            API URL: {process.env.NEXT_PUBLIC_STRAPI_API_URL}
          </p>
          <div className="mt-4">
            <h3 className="font-bold">Debug Information:</h3>
            <p>Please check the browser console for API response details.</p>
          </div>
          <p className="mt-4">
            <Link href="/blog" className="text-blue-600 hover:underline">
              ← Back to Blog
            </Link>
          </p>
        </div>
      );
    }

    return (
      <div>
        <Navbar />
        <div className="p-6 max-w-4xl mx-auto">
          <article>
            <h1 className="text-4xl font-bold mb-4">
              {post?.title || "No Title Found"}
            </h1>

            {/* Cover Image */}
            {post?.image && post.image.url && (
              <div className="mb-6">
                {(() => {
                  // More robust URL cleaning logic
                  const rawUrl = post.image.url;
                  let finalUrl = rawUrl;

                  // If URL is already absolute (contains full domain), use as-is
                  if (
                    rawUrl &&
                    (rawUrl.includes("strapiapp.com") ||
                      rawUrl.startsWith("https://") ||
                      rawUrl.startsWith("http://"))
                  ) {
                    finalUrl = rawUrl;
                  }
                  // If URL starts with /, it's relative - prepend the API URL
                  else if (rawUrl && rawUrl.startsWith("/")) {
                    const apiUrl =
                      process.env.NEXT_PUBLIC_STRAPI_API_URL ||
                      "https://loved-pleasure-cb5eab8cd5.strapiapp.com";
                    finalUrl = `${apiUrl}${rawUrl}`;
                  }
                  // Fallback for any other format
                  else {
                    finalUrl = rawUrl;
                  }

                  return (
                    <>
                      {/* Next.js Image - no event handlers */}
                      <div>
                        <Image
                          src={finalUrl}
                          alt={
                            post.image.alternativeText ||
                            post.title ||
                            "Cover image"
                          }
                          width={post.image.width || 800}
                          height={post.image.height || 400}
                          className="w-full h-auto rounded-lg shadow-lg"
                          priority
                        />
                      </div>
                    </>
                  );
                })()}
              </div>
            )}

            {/* Show if image exists but no URL found */}
            {post?.image && !post.image.url && (
              <div className="mb-6 p-4 bg-red-100 rounded">
                <p className="text-red-800">
                  ❌ Image found but no URL available:
                </p>
                <pre className="text-xs mt-2">
                  {JSON.stringify(post.image, null, 2)}
                </pre>
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              {post?.content ? (
                renderContent(post.content)
              ) : (
                <p>No content found</p>
              )}
            </div>

            <div className="mt-8">
              <Link href="/blog" className="text-blue-600 hover:underline">
                ← Back to Blog
              </Link>
            </div>
          </article>
        </div>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error in BlogPostPage:", error);
    return (
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4 text-red-600">
          Error Loading Post
        </h1>
        <p>An error occurred while loading the post:</p>
        <pre className="bg-red-100 p-4 rounded mt-4">
          {error instanceof Error ? error.message : String(error)}
        </pre>
        <p className="mt-4">
          <Link href="/blog" className="text-blue-600 hover:underline">
            ← Back to Blog
          </Link>
        </p>
      </div>
    );
  }
}
