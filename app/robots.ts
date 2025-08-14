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