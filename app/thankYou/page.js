"use client";
import Navbar from "../../components/Navbar";
import styles from "../../styles/AboutPage.module.css";
import Footer from "../../components/Footer";

const about = () => {
  return (
    <>
      <Navbar />
      <br />
      <main className={styles.container}>
        <h1 className={styles.title}>Thank You</h1>
      </main>
      <Footer />
    </>
  );
};

export default about;
