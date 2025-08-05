import styles from "../styles/Benefits.module.css";
import Image from "next/image";
import ui from "../public/img/svg/ui.svg";
import dev from "../public/img/svg/webdev.svg";
import api from "../public/img/svg/api.svg";
import axe from "../public/img/svg/axe.svg";
// import seo from "../public/img/svg/seo.svg";
import logo from "../public/img/svg/logo.svg";
import copy from "../public/img/svg/copy.svg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Benefit = () => {
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <div className={styles.container}>
        <h2 className={styles.title}>What We Do</h2>
        <br />
        <Row>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={ui}
                alt="performance"
                width={130}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "18px",
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
                src={dev}
                alt="web development"
                width={130}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "18px",
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
              <Image
                src={api}
                alt="search engine optimization"
                width={130}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              API intergration
            </div>
            <br />
            <div className={styles.description}>
              Increased user satisfaction, improved navigation, enhanced
              customer loyalty and retention.
            </div>
          </Col>
        </Row>
        <Row style={{ padding: "16px" }}>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={copy}
                alt="writing for the web"
                width={130}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "18px",
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
              <Image
                src={axe}
                alt="accessibility"
                width={130}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "18px",
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
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={logo}
                alt="logo design"
                width={130}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "18px",
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
