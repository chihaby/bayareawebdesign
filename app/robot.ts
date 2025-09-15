// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General bots: block sensitive folders
      {
        userAgent: "*",
        disallow: ["/admin", "/private"],
      },
      // Major AI crawlers: full access
      { userAgent: "GPTBot", allow: "/" },         // OpenAI
      { userAgent: "OpenAI", allow: "/" },        // OpenAI alternate
      { userAgent: "Bingbot", allow: "/" },       // Microsoft Bing
      { userAgent: "Googlebot", allow: "/" },     // Google
      { userAgent: "DuckAssistBot", allow: "/" }, // DuckDuckGo
      { userAgent: "PerplexityBot", allow: "/" }, // Perplexity AI
      { userAgent: "OmigiliBot", allow: "/" },    // Omigili
      { userAgent: "Diffbot", allow: "/" },       // Diffbot
      { userAgent: "You.com", allow: "/" },       // You.com AI
    ],
    sitemap: "https://bayareawebdesign.net/sitemap.xml",
  };
}
