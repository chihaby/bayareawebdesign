// app/about/page.tsx (server by default)
import type { Metadata } from "next";
import Contact from "./AboutContact";

export const metadata: Metadata = {
  title: "Contact Us - Bay Area Web Design",
  alternates: {
    canonical: "https://bayareawebdesign.net/contact",
  },
};

export default function AboutContact() {
  return <Contact />;
}
