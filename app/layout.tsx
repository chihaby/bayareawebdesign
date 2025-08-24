import type { Metadata } from "next";
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
      "Bay Area Web Design - Professional Web Design and Development Services",
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
    canonical: "https://www.bayareawebdesign.net", // 👈 canonical URL
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
        <LocalBusinessSchema />
      </head>
      <body
      // className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
