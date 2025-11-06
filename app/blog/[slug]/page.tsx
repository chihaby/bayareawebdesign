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
function renderInline(children: any[]): React.ReactNode[] {
  if (!Array.isArray(children)) return [];

  return children.map((child: any, idx: number): React.ReactNode => {
    // 1. Handle plain text node
    if (child.type === "text") {
      let node: React.ReactNode = child.text ?? "";

      if (child.bold) node = <strong key={`bold-${idx}`}>{node}</strong>;
      if (child.italic) node = <em key={`italic-${idx}`}>{node}</em>;
      if (child.underline) node = <u key={`underline-${idx}`}>{node}</u>;
      if (child.strike || child.strikethrough)
        node = <s key={`s-${idx}`}>{node}</s>;
      if (child.code)
        node = (
          <code key={`code-${idx}`} className="bg-gray-100 px-1 rounded">
            {node}
          </code>
        );

      return <React.Fragment key={`frag-${idx}`}>{node}</React.Fragment>;
    }

    // 2. Handle links
    if (child.type === "link") {
      return (
        <a
          key={`link-${idx}`}
          href={child.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#2563eb", // Tailwind's blue-600
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          {renderInline(child.children || [])}
        </a>
      );
    }

    // 3. Fallback: render children recursively
    if (child.children) {
      return (
        <React.Fragment key={`child-${idx}`}>
          {renderInline(child.children)}
        </React.Fragment>
      );
    }

    return null;
  });
}

function renderContent(content: any[]): React.ReactNode {
  if (!Array.isArray(content)) {
    return <p>Content format error - not an array</p>;
  }

  return content.map((block, index) => {
    switch (block.type) {
      case "heading": {
        const level = block.level || 2;
        const text = renderInline(block.children || []);
        const Tag: any = `h${level}`;
        return (
          <Tag key={index} className="font-bold mt-6 mb-2">
            {text}
          </Tag>
        );
      }

      case "paragraph":
        return (
          <p key={index} className="mb-4 leading-relaxed">
            {renderInline(block.children || [])}
          </p>
        );

      case "list": {
        const isOrdered = block.format === "ordered";
        const ListTag = isOrdered ? "ol" : "ul";
        return (
          <ListTag
            key={index}
            className={
              isOrdered ? "list-decimal ml-6 mb-4" : "list-disc ml-6 mb-4"
            }
          >
            {block.children?.map((item: any, i: number) => (
              <li key={i}>{renderInline(item.children || [])}</li>
            ))}
          </ListTag>
        );
      }

      default:
        return (
          <div
            key={index}
            className="mb-4 p-2 bg-yellow-100 border-l-4 border-yellow-500"
          >
            Unknown content type: {block.type}
          </div>
        );
    }
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
