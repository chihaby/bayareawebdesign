import Image from "next/image";
import about from "../public/img/about.png";
import blitz from "../public/assets/img/blitz.png";
import modelStyles from "../styles/Model.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import WhiteCtaLink from "./WhiteCtaLink";

const Model = () => {
  return (
    <div className={modelStyles.container}>
      <br />
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <h2 className={modelStyles.models_main_title}>Services</h2>
        <br />
        <br />
        <Row className={modelStyles.models}>
          <Col sm={12} md={6} className={modelStyles.model_item}>
            <a
              href="https://www.blitzdetail.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={modelStyles.model_link}
            >
              <div className={modelStyles.model_title}>Business</div>
              <div className={modelStyles.model_image}>
                <Image
                  src={blitz}
                  alt="website for business"
                  width={320}
                  height={200}
                />
              </div>
              <div className={modelStyles.model_text}>
                {/* <div className={modelStyles.model_pricing}>
                  Starting price: $2995
                </div> */}
                <div className={modelStyles.model_description}>
                  Tailored solutions to meet specific business needs. Perfect
                  for showcasing products and services.
                </div>
                <br />
                <div className={modelStyles.model_visit}>Visit website</div>
              </div>
            </a>
          </Col>
          <Col sm={12} md={6} className={modelStyles.model_item}>
            <a
              href="https://client-custom-website.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={modelStyles.model_link}
            >
              <div className={modelStyles.model_title}>Client</div>
              <div className={modelStyles.model_image}>
                <Image src={about} alt="Client" width={320} height={200} />
              </div>
              <div className={modelStyles.model_text}>
                {/* <div className={modelStyles.model_pricing}>
                  Sale: $950{" "}
                  <span className={modelStyles.model_sale}>$1200</span>
                </div> */}
                <div className={modelStyles.model_description}>
                  Perfect platform to showcase your skills and connect with
                  potential clients.
                </div>
                <br />
                <div className={modelStyles.model_visit}>Visit website</div>
              </div>
            </a>
          </Col>
        </Row>
        <Row className={modelStyles.cta_link}>
          <WhiteCtaLink />
        </Row>
      </div>
    </div>
  );
};

export default Model;
