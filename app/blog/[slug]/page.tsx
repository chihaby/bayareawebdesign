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

// ✅ This is where SEO metadata goes
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
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

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return (
    <article className="p-6">
      <h1 className="text-4xl font-bold mb-4">{post.attributes.title}</h1>
      {post.attributes.coverImage && (
        <img
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.attributes.coverImage.data.attributes.url}`}
          alt={post.attributes.title}
          className="mb-4 rounded-lg"
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.attributes.content }} />
    </article>
  );
}
