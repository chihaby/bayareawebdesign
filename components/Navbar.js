import navbarStyles from "../styles/Navbar.module.css";
import Link from "next/link";
// import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Image from "next/image";
import bawd from "../public/assets/logo/bawd.png";

export default function Navbar() {
  return (
    <main className={navbarStyles.main}>
      <Row className={navbarStyles.navbar}>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <Image
                  alt="teal color logo of bay area web design "
                  src={bawd}
                  width={50}
                />
                <span style={{ marginLeft: "65px" }}>Bay Area Web Design</span>
              </Link>
            </li>
            <li className={navbarStyles.ul_links}>
              <Link href="/">Home</Link>
            </li>
            <li className={navbarStyles.ul_links}>
              <Link href="/about">About</Link>
            </li>
            <li className={navbarStyles.ul_links}>
              <Link href="/services">Services</Link>
            </li>
            {/* <li className={navbarStyles.ul_links}>
              <Link href="/blog">Blog</Link>
            </li> */}
            <li className={navbarStyles.ul_links}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </Row>
    </main>
  );
}
