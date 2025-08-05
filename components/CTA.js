import styles from "../styles/CTA.module.css";

import Row from "react-bootstrap/Row";
// import CtaLink from './CtaLink';

const CTA = () => {
  return (
    <div className={styles.main}>
      <br />
      <br />
      <br />
      <h2 className={styles.cta_title}>Ready to get started?</h2>
      <br />
      <Row>
        <h2 className={styles.steps}>Get In Touch</h2>
        <br />
        <p className={styles.message}>
          Give me a call{" "}
          <a>
            {"("}510{")"} 630-9741
          </a>
          <br />
          Or send me a message in the form below.
        </p>
      </Row>
    </div>
  );
};

export default CTA;
