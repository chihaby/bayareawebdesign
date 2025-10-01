"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import ServiceArea from "../components/ServiceArea";

const Footer = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const recaptchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  const router = useRouter();

  const handleNameInputChange = (event) => {
    setValues((prev) => ({
      ...prev,
      name: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    setValues((prev) => ({
      ...prev,
      email: event.target.value,
    }));
  };

  const handleMessageInputChange = (event) => {
    setValues((prev) => ({
      ...prev,
      message: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!values.name || !values.email || !values.message) {
      setValid(false);
      setSubmitted(true);
      return;
    }

    // Ensure captcha solved
    if (!captchaToken) {
      alert("Please verify that you are human.");
      return;
    }

    setValid(true);
    setSubmitted(true);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, token: captchaToken }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error("Server error:", errorData.error || res.statusText);
        setIsSubmitting(false);
        return;
      }

      const data = await res.json();
      if (data.success) {
        console.log("Email sent successfully!");
        resetInputValues();
      } else {
        console.error("Error sending email:", data.error);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Request failed:", error);
      setIsSubmitting(false);
    }
  };

  const resetInputValues = () => {
    setValues({
      name: "",
      email: "",
      message: "",
    });
    setSubmitted(false);
    setValid(false);
    setIsSubmitting(false);

    // Reset captcha after submission
    if (
      recaptchaRef.current &&
      typeof recaptchaRef.current.reset === "function"
    ) {
      recaptchaRef.current.reset();
    }
    setCaptchaToken(null);

    // Redirect to thank-you page
    setTimeout(() => {
      router.push("/thank-you");
    }, 300);
  };

  // Spinner (no Bootstrap SSR issues)
  const LoadingSpinner = () => (
    <div className={styles.spinner}>
      <div className={styles.spinnerRing}></div>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#252324" }}>
      <footer className={styles.footer}>
        <div className={styles.footer_form}>
          <br />
          <h1>CONTACT US</h1>
          <br />
          <div className={styles.title_section}>
            <p className={styles.paragraph}>
              We{"'"}d love to hear from you! Kindly fill out the form below,
              and we{"'"}ll get back to you as soon as we can. Looking forward
              to connecting with you!
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.label}>Name</div>
            <br />
            <input
              className={styles.form_input}
              type="text"
              id="name"
              placeholder="Your name"
              required
              value={values.name}
              onChange={handleNameInputChange}
            />
            {submitted && !values.name && (
              <div id="first-name-error">Please enter your full name</div>
            )}
            <br />
            <br />

            <div className={styles.label}>Email</div>
            <br />
            <input
              className={styles.form_input}
              type="email"
              id="email"
              placeholder="Your email"
              required
              value={values.email}
              onChange={handleEmailInputChange}
            />
            {submitted && !values.email && (
              <div>Please enter a valid email</div>
            )}
            <br />
            <br />

            <div className={styles.label}>Message</div>
            <br />
            <textarea
              className={styles.form_message}
              id="message"
              placeholder="Message"
              required
              value={values.message}
              onChange={handleMessageInputChange}
            />
            {submitted && !values.message && (
              <div>Please enter your message</div>
            )}
            <br />
            <br />

            {/* Google reCAPTCHA */}
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={(token) => setCaptchaToken(token)}
            />
            <br />

            <button
              type="submit"
              id="btnsubmit"
              className={styles.form_submit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "SENDING..." : "SUBMIT"}
            </button>
            {isSubmitting && <LoadingSpinner />}
          </form>
        </div>

        {/* Contact Info */}
        <hr />
        <Row className={styles.footer_contact}>
          <hr />
          <p className={styles.contact_phone}>📞 Phone: (510) 630-9741</p>
          <p className={styles.contact_email}>
            <a
              href={`mailto:rad@bayareawebdesign.net`}
              style={{
                padding: "10px 20px",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              📧 Email: rad@bayareawebdesign.net
            </a>
          </p>
          <hr />
          <div style={{ color: "white" }}>
            <b>Sitemap</b>
            <br />
            <ul className={styles.sitemap}>
              <li>
                <Link className={styles.link} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr />
          <ServiceArea />
          <div className={styles.copyright}>
            <p> Copyright &copy; 2025 Inclusive Web Design</p>
          </div>
        </Row>
      </footer>
    </div>
  );
};

export default Footer;
