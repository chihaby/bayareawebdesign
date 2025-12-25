import Link from "next/link";
import styles from "../styles/NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className={styles.link}>
        Go back home
      </Link>
    </div>
  );
}
