import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Bay Area Web Design",
  keywords: [
    "Bay Area web design",
    "web design bay area",
    "bay area web design company",
    "web design Oakland ca",
    "bay area website design",
    "bay area web designer",
    "bay area web development",
    "bay area web designers",
    "bay area website designer",
    "san leandro web design",
    "bay area wordpress web design",
    "bay area web design firm",
    "sf bay area web design",
    "accessibility",
    "accessible websites",
    "inclusive website designer",
    "inclusive web design",
    "inclusive web design bay area",
    "custom WordPress",
    "UI UX design",
    "SEO",
    "API integrations",
    "payment processing",
  ],
  description:
    "Website Remedy is a web design agency located in the Bay Area of San Francisco, California. We build custom websites from scratch with a focus on performance, design, and user experience UI/UX. We helped hundreds of clients all over the world reach their goal of having the best quality website for their business.",
};

export default Meta;
