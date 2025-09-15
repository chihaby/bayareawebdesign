import Link from "next/link";

async function getPosts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/axes?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    }
  );
  return res.json();
}

export default async function BlogPage() {
  const { data } = await getPosts();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul>
        {data.map((post: any) => (
          <li key={post.id} className="mb-4">
            <Link href={`/blog/${post.attributes.slug}`}>
              {post.attributes.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
