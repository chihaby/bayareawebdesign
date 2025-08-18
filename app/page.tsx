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
          content="Web design and development agency located in San Francisco bay area. Focuses on building modern websites with inclusive designs, great user experience, accessibility, API integrations and provide marketing and seo services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  );
}
