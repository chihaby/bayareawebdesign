import styles from "../styles/ServiceArea.module.css";
import Row from "react-bootstrap/Row";
import Link from "next/link";

const ServiceArea = () => {
  return (
    <div className={styles.main}>
      <br />
      <h2>Areas We Serve</h2>
      <br />
      <Row>
        <ul className={styles.areas}>
          <li>
            <Link href="/">San Francisco</Link>
          </li>
          <li>
            <Link href="/">Oakland</Link>
          </li>
          <li>
            <Link href="/">San Jose</Link>
          </li>
          <li>
            <Link href="/">Berkeley</Link>
          </li>
          <li>
            <Link href="/">Alameda</Link>
          </li>
          <li>
            <Link href="/">Hayward</Link>
          </li>
          <li>
            <Link href="/">Palo Alto</Link>
          </li>
          <li>
            <Link href="/">Concord</Link>
          </li>
          <li>
            <Link href="/">Moutain View</Link>
          </li>
          <li>
            <Link href="/">Freemont</Link>
          </li>
          <li>
            <Link href="/">Redwood City</Link>
          </li>
          <li>
            <Link href="/">Sunnyvale</Link>
          </li>
          <li>
            <Link href="/">Sausalito</Link>
          </li>
          <li>
            <Link href="/">Pleasanton</Link>
          </li>
          <li>
            <Link href="/">San Leandro</Link>
          </li>
          <li>
            <Link href="/">Emeryville</Link>
          </li>
          <li>
            <Link href="/">El Cerrito</Link>
          </li>
          <li>
            <Link href="/">Union City</Link>
          </li>
          <li>
            <Link href="/">Pacifica</Link>
          </li>
          <li>
            <Link href="/">Vallejo</Link>
          </li>
          <li>
            <Link href="/">Antioch</Link>
          </li>
          <li>
            <Link href="/">Albany</Link>
          </li>
          <li>
            <Link href="/">Livermore</Link>
          </li>
          <li>
            <Link href="/">San Ramon</Link>
          </li>
          <li>
            <Link href="/">Fairfield</Link>
          </li>
        </ul>
      </Row>
    </div>
  );
};

export default ServiceArea;
