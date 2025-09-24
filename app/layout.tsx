import type { Metadata } from "next";
import Script from "next/script";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  metadataBase: new URL("https://bayareawebdesign.net"),
  title: {
    default:
      "At Bay Area Web Design, we focus on building websites that work for everyone. Our goal is to create clear and simple designs that are easy to use, putting user experience and accessibility front and center. We believe inclusive design isn’t just a buzzword—it’s about making sure every visitor, no matter their ability, can navigate and interact with your site without frustration. We specialize in custom WordPress websites, but we also love coding from scratch. This gives us full control over performance, customization, and integrations. Need payment processing, third-party APIs, or advanced functionality? We handle it. We also pay attention to copy, ensuring your content is clear and drives engagement. Our approach combines UI/UX design, accessibility standards, and web development best practices so your website not only looks good but works smoothly. SEO is built into every project, helping your site get found by the right audience. Whether you need a simple brochure site or a complex platform with multiple integrations, we make it easy for users and search engines alike. At Bay Area Web Design, we focus on building sites that are fast, accessible, and fully customized, making sure your online presence reflects your brand and connects with your audience effectively.",
    template: "%s | Bay Area Web Design",
  },
  description:
    "Professional web design and development services in the Bay Area. Custom websites, NextJS development, Wordpress development, and digital solutions for businesses, entrepreneurs and industry professionals.",
  keywords: [
    "web design",
    "web development",
    "Bay Area",
    "NextJS",
    "Wordpress",
    "custom design",
    "ux/ui",
    "accessibility",
    "user interface",
    "logo design",
    "API Integration",
    "custom websites",
    "digital solutions",
    "San Francisco",
    "Oakland",
    "Berkeley",
    "Freemont",
    "Santa Calara",
    "Sunnyvale",
    "San Mateo",
    "Redwood City",
    "Palo Alto",
    "Mountain View",
    "Hayward",
    "Concord",
    "Milpitas",
    "Daly City",
    "San Leandro",
    "Livermore",
    "Union City",
    "Pleasanton",
    "Cupertino",
    "San Ramon",
    "Foster City",
    "Belmont",
    "Albany",
    "San Bruno",
    "Menlo Park",
    "Burlingame",
    "Richmond",
    "Danville",
    "Emeryville",
    "San Jose",
  ],
  authors: [{ name: "Bay Area Web Design" }],
  creator: "Bay Area Web Design",
  publisher: "Bay Area Web Design",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bayareawebdesign.net",
    siteName: "Bay Area Web Design",
    title: "Bay Area Web Design - Professional Web Design Services",
    description:
      "Professional web design and development services in the Bay Area. We focus on Inclusive design with a simple, clear layout that ensures all visitors—including those with disabilities—can easily access and interact with your content. We are experts in API integrations and engaging copy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bay Area Web Design",
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Bay Area Web Design - Professional Web Development Services',
  //   description: 'Professional web design and development services in the Bay Area.',
  //   images: ['/twitter-image.jpg'],
  //   creator: '@bayareawebdesign'
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-site-verification",
  //   yandex: "your-yandex-verification",
  //   yahoo: "your-yahoo-verification",
  // },
  alternates: {
    canonical: "https://bayareawebdesign.net", // 👈 canonical URL
  },
};

function LocalBusinessSchema() {
  const structuredData = {
    "@context": "https://bayareawebdesign.net",
    "@type": "LocalBusiness",
    "@id": "https://bayareawebdesign.net/#organization",
    name: "Bay Area Web Design",
    url: "https://bayareawebdesign.net",
    logo: "https://bayareawebdesign.net/logo.png",
    image: "https://bayareawebdesign.net/og-image.jpg",
    description:
      "Professional web design and development services in the Bay Area",
    priceRange: "$$",
    telephone: "(510) 630-9741",
    email: "rad@bayareawebdesign.net",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bay Area",
      addressRegion: "CA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.7749",
      longitude: "-122.4194",
    },
    openingHours: "Mo-Fr 09:00-17:00",
    // sameAs: [
    //   "https://facebook.com/bayareawebdesign",
    //   "https://linkedin.com/company/bayareawebdesign",
    //   "https://twitter.com/bayareawebdesign",
    // ],
    areaServed: {
      "@type": "State",
      name: "California",
    },
    serviceType: [
      "Web Design",
      "Web Development",
      "Responsive Web Design",
      "Accessibility",
      "API Integration",
      "SEO Search Engine Optimization",
      "Logo and Branding",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W5H9XBJ6');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5KF2H4BBJE"
        ></Script>
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5KF2H4BBJE');
          `}
        </Script>

        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="vxJO+bXMknJX5j7Vpleg1A"
          async
        ></Script>

        <LocalBusinessSchema />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W5H9XBJ6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
