import Image from "next/image";
import type { Metadata } from "next";

async function getPost(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts?filters[slug][$eq]=${slug}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch post", res.status, await res.text());
    return null;
  }

  const json = await res.json();
  if (!json.data || !json.data.length) {
    console.warn("Post not found:", slug);
    return null;
  }

  return json.data[0]; // Strapi returns array for filters
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

  return {
    title: post.attributes.title,
    description: post.attributes.content.slice(0, 150),
    openGraph: {
      title: post.attributes.title,
      description: post.attributes.content.slice(0, 150),
      images: post.attributes.coverImage
        ? [
            `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.attributes.coverImage.data.attributes.url}`,
          ]
        : [],
    },
  };
}

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`
  );
  const { data } = await res.json();
  return data.map((post: any) => ({ slug: post.attributes.slug }));
}

// ✅ Updated component props type and await params
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Await the params Promise
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <p>The requested blog post could not be found.</p>
      </div>
    );
  }

  return (
    <article className="p-6">
      <h1 className="text-4xl font-bold mb-4">{post.attributes.title}</h1>
      {post.attributes.coverImage && (
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.attributes.coverImage.data.attributes.url}`}
          alt={post.attributes.title}
          width={800}
          height={400}
          className="mb-4 rounded-lg"
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.attributes.content }} />
    </article>
  );
}
