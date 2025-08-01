import styles from "../styles/CtaLink.module.css";
import Link from "next/link";

const CtaLink = () => {
  return (
    <>
      <Link href="/services" className={styles.cta_link}>
        VIEW SERVICES
      </Link>
    </>
  );
};

export default CtaLink;
