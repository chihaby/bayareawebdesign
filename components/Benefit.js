import styles from "../styles/Benefits.module.css";
import Image from "next/image";
import ui from "../public/img/svg/ui.svg";
import dev from "../public/img/svg/webdev.svg";
import api from "../public/img/svg/api.svg";
import axe from "../public/img/svg/axe.svg";
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
              Inclusive design with a simple, clear layout ensures all
              visitors—including those with disabilities—can easily access and
              interact with your content.
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
              From concept to launch, your site is built for performance and
              reliability, enabling it to scale seamlessly as your business
              grows.
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
              Whether it is payments, gateways, or CRMs, your systems are
              seamlessly connected with third-party API integrations that grow
              with your business
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
              Engaging web copy communicates your message clearly, connects with
              your audience, and drives results.{" "}
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
              A fully accessible website that meets the latest legal
              accessibility standards, allowing all users to engage with the
              content.
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
              A logo that tells your brand story and resonates with your
              audience, leaving a lasting impression
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Benefit;
