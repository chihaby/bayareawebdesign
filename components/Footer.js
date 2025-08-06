"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/Footer.module.css";
import Spinner from "react-bootstrap/Spinner";
import Link from "next/link";

const Footer = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    // phone: '',
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFullNameInputChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      fullName: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  // const handlePhoneInputChange = (event) => {
  //   event.preventDefault();
  //   setValues((values) => ({
  //     ...values,
  //     phone: event.target.value,
  //   }));
  // };

  const handleMessageInputChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      message: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.fullName && values.email && values.message) {
      setValid(true);
    }
    setSubmitted(true);
    sendEmail();
  };

  const sendEmail = () => {
    const templateParams = {
      from_name: values.fullName,
      email: values.email,
      // phone: values.phone,
      message: values.message,
    };
    emailjs
      .send(
        process.env.USER_ID,
        process.env.TEMPLATE_ID,
        templateParams,
        process.env.PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    resetInputValues();
  };

  const resetInputValues = () => {
    setValues((values) => ({
      ...values,
      fullName: "",
    }));
    setValues((values) => ({
      ...values,
      email: "",
    }));
    // setValues((values) => ({
    //   ...values,
    //   phone: '',
    // }));
    setValues((values) => ({
      ...values,
      message: "",
    }));
    routeToThankYouPage();
  };

  const router = useRouter();

  const routeToThankYouPage = () => {
    // e.preventDefault();
    setSubmitted(!submitted);
    setTimeout(() => {
      redirectToThankYouPage();
    }, 600);
  };

  const redirectToThankYouPage = () => {
    router.push("/thankYou");
  };

  return (
    <div style={{ backgroundColor: "#252324" }}>
      <footer className={styles.footer}>
        <div className={styles.footer_form}>
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
            <span>Name</span>
            <br />
            <input
              className={styles.form_input}
              type="text"
              id="name"
              placeholder="Your name"
              required
              value={values.fullName}
              onChange={handleFullNameInputChange}
            />
            {submitted && !values.fullName && (
              <span id="first-name-error">Please enter your full name</span>
            )}
            <br />
            <br />
            <span>Email</span>
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
            <span>Message</span>
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
          <div className={styles.contact_email}>
            <p>
              <span>
                <i className="fa fa-envelope"> EMAIL</i>
              </span>{" "}
              <br />
              <a
                href={`mailto:${"websiteremedy.info"}?subject=${encodeURIComponent()}&body=${encodeURIComponent()}`}
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
    </div>
  );
};

export default Footer;
