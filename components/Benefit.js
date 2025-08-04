import styles from "../styles/Benefits.module.css";
import Image from "next/image";
// import design from "../public/assets/svg/design.svg";
import ux from "../public/assets/svg/ux.svg";
import performance from "../public/assets/svg/performance.svg";
import axe from "../public/assets/svg/axe.svg";
// import copy from '../public/assets/svg/copy.svg';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Benefit = () => {
  return (
    // <div style={{ backgroundColor: "#E0E8E7" }}>
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <div className={styles.container}>
        <h2 className={styles.title}>What We Do</h2>
        <br />
        <Row style={{ padding: "16px" }}>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image src={ux} alt="performance" width={120} height={150} />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "24px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Design UI/UX
            </div>
            <br />
            <div className={styles.description}>
              Increased user satisfaction, improved navigation, enhanced
              customer loyalty and retention.
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={performance}
                alt="performance"
                width={120}
                height={150}
              />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "24px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Development
            </div>
            <br />
            <div className={styles.description}>
              API intergration ...etc serch for development examples Higher
              engagements, better search engine ranking, increased conversions
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image src={axe} alt="features" width={120} height={150} />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "24px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Accessibility
            </div>
            <br />
            <div className={styles.description}>
              100% compliant with the legal requirements and accessibility
              standards {"(WCAG)"}
            </div>
          </Col>
        </Row>
        <Row style={{ padding: "16px" }}>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={performance}
                alt="performance"
                width={120}
                height={150}
              />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "24px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Copy
            </div>
            <br />
            <div className={styles.description}>
              Writing for the web. Higher engagements, better search engine
              ranking, increased conversions, and reduced bounce rates.
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image src={ux} alt="performance" width={120} height={150} />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "24px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              SEO
            </div>
            <br />
            <div className={styles.description}>
              Increased user satisfaction, improved navigation, enhanced
              customer loyalty and retention.
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image src={axe} alt="features" width={120} height={150} />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "24px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Logo
            </div>
            <br />
            <div className={styles.description}>
              Compliant with the latest legal requirements and accessibility
              standards {"(WCAG 2.2 )"}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Benefit;
