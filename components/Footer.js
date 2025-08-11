"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/Footer.module.css";
import Spinner from "react-bootstrap/Spinner";
import Link from "next/link";

const Footer = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handlenameInputChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleMessageInputChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      message: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (values.name && values.email && values.message) {
      setValid(true);
    }
    setSubmitted(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // Check if the response is ok before trying to parse JSON
      if (!res.ok) {
        const errorData = await res.json();
        console.error("Server error:", errorData.error);
        console.error("Error details:", errorData.details); // This will show specific error info
        return;
      }

      const data = await res.json();
      if (data.success) {
        console.log("Email sent successfully!");
        resetInputValues();
      } else {
        console.error("Error sending email:", data.error);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  const resetInputValues = () => {
    setValues((values) => ({
      ...values,
      name: "",
    }));
    setValues((values) => ({
      ...values,
      email: "",
    }));
    setValues((values) => ({
      ...values,
      message: "",
    }));
    routeToThankYouPage();
  };

  const router = useRouter();

  const routeToThankYouPage = () => {
    setSubmitted(!submitted);
    setTimeout(() => {
      redirectToThankYouPage();
    }, 600);
  };

  const redirectToThankYouPage = () => {
    router.push("/thank-you");
  };

  return (
    <main style={{ backgroundColor: "#252324" }}>
      <footer className={styles.footer}>
        <div className={styles.footer_form}>
          <br />
          <h2>CONTACT US</h2>
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
              onChange={handlenameInputChange}
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
            <br />
            <br />
            <div className={styles.label}>Message</div>
            <br />
            <textarea
              className={styles.form_message}
              type="text"
              id="message"
              placeholder="Message"
              required
              value={values.message}
              onChange={handleMessageInputChange}
            />
            <br />
            <br />
            <button type="subit" id="btnsubmit" className={styles.form_submit}>
              {" "}
              SUBMIT
            </button>
            {submitted && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden"></span>
              </Spinner>
            )}
          </form>
        </div>
        <div className={styles.footer_contact}>
          <div className={styles.contact_phone}>
            <p>
              <span>
                <i className="fa fa-phone"> PHONE</i>
              </span>
              <br />
              {" +1 510 630 9741"}
            </p>
          </div>
          Try these Instead -----------------------------------
          <p>📧 Email: rad@bayareawebdesign.net</p>
          <p>📞 Phone: (510) 630-9741</p>
          <div className={styles.contact_email}>
            <p>
              <span>
                <i className="fa fa-envelope"> EMAIL</i>
              </span>{" "}
              <a
                href={`mailto:${"rad@bayareawebdesign.net"}?subject=${encodeURIComponent()}&body=${encodeURIComponent()}`}
                style={{
                  padding: "10px 20px",
                  // backgroundColor: "#0070f3",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "5px",
                }}
              >
                rad@bayareawebdesign.net
              </a>
            </p>
          </div>
          <div style={{ color: "white" }}>
            <br />
            <span>
              <i className="fa fa-bars"> SITE MAP</i>
            </span>{" "}
            <br />
            <ul>
              <li>
                <Link href="/" passHref>
                  <span className={styles.site_map}> Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <span className={styles.site_map}> About</span>
                </Link>
              </li>
              <li>
                <Link href="/services" passHref>
                  <span className={styles.site_map}> services</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <span className={styles.site_map}> Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.copyright}>
            <p> Copyright &copy; 2025 BayAreaWebDesign.Net</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
