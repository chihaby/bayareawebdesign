import Link from "next/link";
import Image from "next/image";

async function getPosts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts?populate=*&sort=createdAt:desc`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch posts", res.status, await res.text());
      return [];
    }

    const json = await res.json();
    console.log("Posts data:", JSON.stringify(json, null, 2)); // Debug log

    return json.data || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-gray-600">No blog posts found.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => {
            // Debug: Log each post to see the structure
            console.log("Individual post:", post);

            // Access fields directly (not under attributes)
            const slug = post.slug;
            const title = post.title || "Untitled";
            const content = post.content || [];
            const coverImage = post.image;

            if (!slug) {
              console.warn("Post missing slug:", post);
              return null; // Skip posts without slugs
            }

            // Extract text from rich text content for preview
            const extractTextFromContent = (content: any[]): string => {
              if (!Array.isArray(content)) return "";

              return content
                .map((block) => {
                  if (block.children && Array.isArray(block.children)) {
                    return block.children
                      .map((child: any) => child.text || "")
                      .join("");
                  }
                  return "";
                })
                .join(" ")
                .trim();
            };

            const contentPreview = extractTextFromContent(content);

            return (
              <article
                key={post.id}
                className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                {coverImage && coverImage.url && (
                  <div className="mb-4">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${coverImage.url}`}
                      alt={coverImage.alternativeText || title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}

                <h2 className="text-2xl font-semibold mb-2">
                  <Link
                    href={`/blog/${slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {title}
                  </Link>
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {contentPreview.slice(0, 150)}...
                </p>

                <Link
                  href={`/blog/${slug}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
