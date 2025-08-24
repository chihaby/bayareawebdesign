import { client } from "../../lib/client";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PortableText from "@sanity/block-content-to-react";
import urlBuilder from "@sanity/image-url";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Image from "next/image";

const urlFor = (source) =>
  urlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  }).image(source);

const serializer = {
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark;
      const href = `/${slug.current}`;
      return <a href={href}>{children}</a>;
    },
    link: ({ mark, children }) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
  types: {
    mainImage: (props) => (
      <figure>
        <Image
          src={urlFor(props.node.asset).width(300).url()}
          alt={props.node.alt}
        />
        <figcaption>{props.node.caption}</figcaption>
      </figure>
    ),
  },
};

function Post({ post }) {
  // const src = urlFor(post.image).url();
  return (
    <>
      <Navbar />
      <Container>
        <br />
        <div style={{ fontSize: "22px" }}>
          <Link href="/blog">{"< Back to Blog"}</Link>
        </div>
        <br />
        <Row className="justify-content-md-center">
          <Col sm={12} md={6}>
            {/* {post.map((p) => ( */}
            <div key={post._id}>
              <h1>{post.title}</h1>
              <br />
              <br />
              {/* <Image  loader={() => post.image} src={src}  alt={post.image.caption} width={300} height={300}/> */}
              <PortableText
                blocks={post.content}
                serializers={serializer}
                projectId="rzb4luf2"
                dataset="production"
              />
            </div>
            {/* ))} */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Post;

export async function getStaticPaths() {
  const query = `*[_type == "post"] {
    slug{
      current
    }
  }`;

  const posts = await client.fetch(query);
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;

  const post = await client.fetch(query);

  return {
    props: {
      post,
    },
  };
}
