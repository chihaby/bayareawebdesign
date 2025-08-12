import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    title: "Bay Area Web Design - Professional Web Development Services",
    description:
      "Professional web design and development services in the Bay Area.",
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
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export function LocalBusinessSchema() {
  const structuredData = {
    "@context": "https://schema.org",
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
    sameAs: [
      "https://facebook.com/bayareawebdesign",
      "https://linkedin.com/company/bayareawebdesign",
      "https://twitter.com/bayareawebdesign",
    ],
    areaServed: {
      "@type": "State",
      name: "California",
    },
    serviceType: [
      "Web Design",
      "Web Development",
      "NextJS Development",
      "React Development",
      "E-commerce Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function sitemap() {
  const baseUrl = "https://bayareawebdesign.net";

  const routes = ["", "/about", "/services", "/contact", "/thank-you"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    })
  );

  return routes;
}

// Robots.txt (app/robots.js)
export function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/"],
    },
    sitemap: "https://bayareawebdesign.net/sitemap.xml",
  };
}
