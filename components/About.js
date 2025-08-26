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
            At Bay Area Web Design, we build websites that work by keeping them
            simple, clutter-free, and easy to navigate. Our focus is always on
            inclusive design, making sure that anyone—regardless of ability—can
            move through your site without confusion. We don{"’"}t just add
            pretty colors or flashy visuals; we carefully study information
            architecture and design the flow of content so visitors know exactly
            where to go and what to do. By structuring information clearly, we
            remove distractions and create a seamless experience that helps your
            message stand out. Copywriting is just as important as design, which
            is why we say more with less, using clear and direct language that
            drives engagement. Whether we{"’"}re building a custom WordPress
            site or coding from scratch, we prioritize performance,
            accessibility, user interface, and overall user experience. Every
            project blends UX/UI best practices with SEO and accessibility
            standards, so your site isn{"’"}t just beautiful—it
            {"’"}s functional, user-friendly, and built to connect your brand
            with the right audience.
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
