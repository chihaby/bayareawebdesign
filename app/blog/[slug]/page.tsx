import Image from "next/image";
import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

async function getPost(slug: string) {
  console.log("Fetching post with slug:", slug);
  console.log(
    "NEXT_PUBLIC_STRAPI_API_URL:",
    process.env.NEXT_PUBLIC_STRAPI_API_URL
  );

  if (!process.env.NEXT_PUBLIC_STRAPI_API_URL) {
    console.error("NEXT_PUBLIC_STRAPI_API_URL is not set!");
    return null;
  }

  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts?filters[slug][$eq]=${slug}&populate=*`;
  console.log("Full API URL:", url);

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 60 },
    });

    console.log("Response status:", res.status);
    console.log("Response ok:", res.ok);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Failed to fetch post", res.status, errorText);
      return null;
    }

    const json = await res.json();
    console.log("API response:", JSON.stringify(json, null, 2));

    if (!json.data || !json.data.length) {
      console.warn("Post not found for slug:", slug);
      console.log("Available posts from API:", json);
      return null;
    }

    console.log("Found post:", json.data[0]);
    return json.data[0];
  } catch (error) {
    console.error("Network error:", error);
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
function renderContent(content: any[]) {
  console.log("Rendering content:", content);
  if (!Array.isArray(content)) {
    console.log("Content is not an array:", typeof content);
    return React.createElement("p", {}, "Content format error - not an array");
  }

  return content.map((block, index) => {
    console.log(`Rendering block ${index}:`, block);
    switch (block.type) {
      case "heading":
        const headingText =
          block.children?.map((child: any) => child.text).join("") || "";
        const level = block.level || 2;

        // Use React.createElement to avoid JSX issues
        if (level === 1) {
          return React.createElement(
            "h1",
            {
              key: index,
              className: "text-3xl font-bold mb-4 mt-6",
            },
            headingText
          );
        } else if (level === 2) {
          return React.createElement(
            "h2",
            {
              key: index,
              className: "text-2xl font-bold mb-4 mt-6",
            },
            headingText
          );
        } else if (level === 3) {
          return React.createElement(
            "h3",
            {
              key: index,
              className: "text-xl font-bold mb-4 mt-6",
            },
            headingText
          );
        } else if (level === 4) {
          return React.createElement(
            "h4",
            {
              key: index,
              className: "text-lg font-bold mb-4 mt-6",
            },
            headingText
          );
        } else {
          return React.createElement(
            "h5",
            {
              key: index,
              className: "text-base font-bold mb-4 mt-6",
            },
            headingText
          );
        }

      case "paragraph":
        const paragraphText =
          block.children?.map((child: any) => child.text).join("") || "";
        if (!paragraphText.trim()) {
          return React.createElement("br", { key: index });
        }
        return React.createElement(
          "p",
          {
            key: index,
            className: "mb-4 leading-relaxed",
          },
          paragraphText
        );

      default:
        console.log(`Unknown block type: ${block.type}`);
        return React.createElement(
          "div",
          {
            key: index,
            className: "mb-4 p-2 bg-yellow-100 border-l-4 border-yellow-500",
          },
          `Unknown content type: ${block.type}`
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
    console.log("BlogPostPage - received slug:", slug);
    console.log(
      "NEXT_PUBLIC_STRAPI_API_URL:",
      process.env.NEXT_PUBLIC_STRAPI_API_URL
    );

    const post = await getPost(slug);
    console.log("BlogPostPage - received post:", post);
    console.log("Post type:", typeof post);
    console.log(
      "Post keys:",
      post ? Object.keys(post) : "post is null/undefined"
    );

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
      <div className="p-6 max-w-4xl mx-auto">
        <article>
          <h1 className="text-4xl font-bold mb-4">
            {post?.title || "No Title Found"}
          </h1>

          {/* Cover Image */}
          {post?.image && post.image.url && (
            <div className="mb-6">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.image.url}`}
                alt={post.image.alternativeText || post.title || "Cover image"}
                width={post.image.width || 800}
                height={post.image.height || 400}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
              <p className="text-xs text-gray-500 mt-2">
                Original: {post.image.width}x{post.image.height} |{" "}
                {post.image.name}
              </p>
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
