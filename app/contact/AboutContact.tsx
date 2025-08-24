'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Bay Area Web Design",
  description: "Contact Bay Area Web Design for free consultation",
  metadataBase: new URL("https://bayareawebdesign.net"),
  alternates: {
    canonical: "/contact",
  },
};
const contact = () => {
  return (
    <>
      <Navbar />
      <h1>Contact Us</h1>
      <Footer />
    </>
  );
};

export default contact;
