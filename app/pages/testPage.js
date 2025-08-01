import Navbar from "../components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Footer from "../components/Footer";
import Image from "next/image";
import styles from "../styles/AboutPage.module.css";

const about = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.container}>
        <h1>Test Page</h1>
      </div>
    </>
  );
};

export default about;
