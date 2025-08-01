import Image from "next/image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../styles/About.module.css";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>About</h2>
      </div>
      <Row>
        <Col
          sm={12}
          md={12}
          style={{ padding: "5px 50px", lineHeight: "1.8em" }}
        >
          <p>
            Hi! I{"'"}m Rad, a professional web developer with 10 years of
            experience. Over the years, I{"'"}ve helped many companies upgrade
            their websites to be fast, responsive, and user-friendly, ensuring a
            great user experience and accessibility. I will solve your web
            development problems and deliver a reliable, easy-to-use website
            that includes all the essentials like SEO, performance,
            accessibility and best practices. Let me help you create a website
            that meets all your needs and exceed your expectations.
          </p>
          <br />
        </Col>
      </Row>
      <Row className={styles.more}>
        <Link href="/about" style={{ color: "#457B9D" }}>
          Find out more about Rad.
        </Link>
      </Row>
    </div>
  );
};

export default About;
