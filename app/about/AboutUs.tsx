"use client";
import Navbar from "../../components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import CardBody from "react-bootstrap/CardBody";
import Footer from "../../components/Footer";
import Rad from "../../public/img/Rad.jpg";
import Image from "next/image";
import styles from "../../styles/AboutPage.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Bay Area Web Design",
  description: "Learn more about Rad, a web developer and UI/UX specialist.",
  metadataBase: new URL("https://bayareawebdesign.net"),
  alternates: {
    canonical: "/about",
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
              {/* <CardBody>
                <Card.Title>Rad</Card.Title>
                <Card.Text>Web developer, UI/UX specialist.</Card.Text>
              </CardBody> */}
            </Card>
          </Col>
          <br />
          <Col>
            {/* <h3>Rad</h3> */}
            <p>
              I{"'"}m Rad, a professional web developer with years of experience
              creating user-friendly and high-performing websites. Over time, I
              {"'"}ve honed my skills to focus on building websites that are not
              only visually appealing but also intuitive, accessible, and
              effective in achieving business goals.
              <br />
              <br />
              My work centers on four key pillars: Design, User Experience
              (UX/UI), Performance, and Accessibility. While design is
              important, it alone does not determine a website{"'"}s success.
              That{"'"}s why I prioritize UX/UI, crafting websites that are easy
              to navigate, engaging, and built to convert visitors into
              customers.
              <br />
              <br />
              Accessibility is equally critical. I ensure that every website I
              develop is usable by people with disabilities, following best
              practices to provide inclusive access to information and services.
              This approach fosters a more equitable web experience for all
              users.
              <br />
              <br />
              Performance is another top priority. I optimize websites to load
              quickly, run smoothly, and provide seamless
              interactions—benefiting both users and SEO. By combining
              thoughtful design, intuitive UX, accessibility, and high
              performance, I deliver websites that not only meet expectations
              but also drive meaningful results.
            </p>
          </Col>
        </Row>
        <br />
      </main>
      <Footer />
    </>
  );
}
