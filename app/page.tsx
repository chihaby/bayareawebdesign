import Head from "next/head";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bay Area Web Design</title>
        <meta
          name="description"
          content="Web design and development located in San Francisco bay area. Focuses on building performant websites with great design and user experience UI/UX and provide marketing and seo services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  );
}
