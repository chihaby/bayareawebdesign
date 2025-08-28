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
            Have you ever visited a website only to feel overwhelmed by clutter,
            inconsistent colors, or confusing navigation? At Bay Area Web
            Design, we specialize in eliminating that frustration. Our focus
            goes beyond aesthetics—we carefully structure information
            architecture and design intuitive content flows so visitors
            immediately know where to go and what to do. We understand that
            effective copywriting is just as critical as design, which is why we
            prioritize clear, concise messaging that engages and converts.
            Whether we{"’"}re developing a custom WordPress site or coding from
            the ground up, our priority is performance, accessibility, user
            interface, and user experience. The result is a website that{"’"}s
            not only visually stunning but also functional, user-friendly, and
            purpose-driven—built to connect your brand with the right audience.
          </p>
          <br />
        </Col>
      </Row>
      <Row className={styles.more}>
        <Link href="/about" style={{ color: "#457B9D" }}>
          Find out more
        </Link>
      </Row>
    </div>
  );
};

export default About;
