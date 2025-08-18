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
  keywords:
    "web development and design agency in San Francisco Bay Area. UI UX. Custom web design, Website for industry professionals, Bay Area Web design agency San Jose, Web agency California, Website designer, Need a website, Need website for my business, Need website designer, Need website company, No Wordpress, Website built without wordpress, Website code, Build website from scratch, Web performance, fast website, I need a website, I need a website for my business, I need a website designer, I need a website built for my business, I need a website made, I need a website for my coffeshop, I need a website for my restaurant, I need a website for my dealership, I need a website for my business, Need a website for food truck, I need a website fast, I need a website to sell my product, Portfolio Website",
  description:
    "Website Remedy is a web design agency located in the Bay Area of San Francisco, California. We build custom websites from scratch with a focus on performance, design, and user experience UI/UX. We helped hundreds of clients all over the world reach their goal of having the best quality website for their business.",
};

export default Meta;
