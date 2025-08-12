"use client";

import { useRouter } from "next/navigation";
import styles from "../../styles/thank-you.module.css";
import Navbar from "../../components/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function ThankYou() {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <>
      <Navbar />
      <main className={styles.thankYouPage}>
        <Row>
          <Col sm={12} md={8} lg={12}>
            <h1 className={styles.title}>Thank You!</h1>
            <p className={styles.subtitle}>
              Your message has been sent successfully
            </p>

            <div className={styles.message}>
              <p>
                We've received your message and appreciate you taking the time
                to contact us. We will review your inquiry and get back to you
                within 24-48 hours.
              </p>
            </div>

            <div className={styles.actionButtons}>
              <button
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={goHome}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9,22 9,12 15,12 15,22"></polyline>
                </svg>
                Back to Home
              </button>
            </div>
            <div className={styles.contactInfo}>
              <h3>Contact</h3>
              <div className={styles.contactDetails}>
                <p>📧 Email: rad@bayareawebdesign.net</p>
                <p>📞 Phone: (510) 630-9741</p>
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
}
