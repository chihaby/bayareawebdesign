import styles from "../styles/ServiceArea.module.css";
import Row from "react-bootstrap/Row";
import Link from "next/link";

const ServiceArea = () => {
  return (
    <div className={styles.main}>
      <b>Areas We Serve</b>
      <br />
      <br />
      <Row>
        <ul className={styles.service_areas}>
          <li>
            <Link className={styles.link} href="/">
              San Francisco
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Oakland
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              San Jose
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Berkeley
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Alameda
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Hayward
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Palo Alto
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Concord
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Moutain View
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Freemont
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Redwood City
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Sunnyvale
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Sausalito
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Pleasanton
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              San Leandro
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Emeryville
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              El Cerrito
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Union City
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Pacifica
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Vallejo
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Antioch
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Albany
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Livermore
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              San Ramon
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Fairfield
            </Link>
          </li>
        </ul>
      </Row>
      <hr />
    </div>
  );
};

export default ServiceArea;
