// app/about/page.tsx (server by default)
import type { Metadata } from "next";
import About from "./AboutUs";

export const metadata: Metadata = {
  title: "About Us - Bay Area Web Design",
  alternates: {
    canonical: "https://bayareawebdesign.net/about",
  },
};

export default function AboutPage() {
  return <About />;
}
