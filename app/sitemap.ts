export default function sitemap() {
  const baseUrl = "https://bayareawebdesign.net";

  const routes = ["", "/about", "/services", "blog", "/contact", "/thank-you"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    })
  );

  return routes;
}