"use client";
import Navbar from "../../components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import Footer from "../../components/Footer";
import Rad from "../../public/img/Rad.jpg";
import Image from "next/image";
import styles from "../../styles/AboutPage.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Expert Web Developers",
  description:
    "Learn about our team of expert web developers specializing in Web design, web development, and modern web technologies in the Bay Area.",
  openGraph: {
    title: "About Us - Expert Web Developers",
    description: "Learn about our team of expert web developers.",
    url: "https://bayareawebdesign.net/about",
    images: [
      {
        url: "/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Bay Area Web Design Team",
      },
    ],
  },
};

export default function about() {
  return (
    <>
      <Navbar />
      <br />
      <main className={styles.container}>
        <h1 className={styles.title}>About</h1>
        <hr />
        <br />
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Image src={Rad} width={285} height={285} alt="profile photo" />
              <CardBody>
                <Card.Title>Rad</Card.Title>
                <Card.Text>Web developer, UI/UX specialist.</Card.Text>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <h3>Rad</h3>
            <p>
              I{"'"}m Rad, a web developer with many years of experience. I{"'"}
              ve learned a lot over the years and specialize in making
              user-friendly websites. I use my expertise to ensure your website
              is engaging and effective.
              <br />
              <br />
              My primary focus centers on four critical components: Design, User
              Experience (UX/UI), performance, and accessibility, each playing a
              significant role in website development. While design holds
              undeniable importance, it does not solely determine a website{"'"}
              s success. Therefore, I prioritize UX/UI, striving to create an
              intuitive and user-centric website that enhances overall user
              experience and facilitates conversions. Additionally, ensuring
              accessibility for people with disabilities is imperative, as it
              enables them to navigate and utilize the web effectively,
              fostering inclusivity and equal access to information and
              services.
              <br />
              <br />
              Finally, I recognize the criticality of performance in
              contemporary website development. Hence, I meticulously prioritize
              performance optimization, aiming not only to enhance your website
              {"'"}s SEO but also to elevate user experience through swift
              loading times and seamless navigation. Leveraging my expertise in
              these domains, I am confident in my ability to craft a website
              that surpasses your expectations and yields tangible outcomes.
            </p>
          </Col>
        </Row>
        <br />
      </main>
      <Footer />
    </>
  );
}
