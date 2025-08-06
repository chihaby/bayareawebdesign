import navbarStyles from '../styles/Navbar.module.css';
import Link from 'next/link';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';
import plus from '../public/assets/img/plus.png';

export default function Navbar() {
  const handleScrollAbout = async () => {
    window.scroll({
      top: 630,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleScrollContact = async () => {
    window.scroll({
      top: 9999,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ backgroundColor: '#252324' }}>
      <Row className={navbarStyles.navbar}>
        <ul>
          <li>
            <Link href='/'>
              {/* <Image src={plus} alt="performance" width="50" height="50" /> */}
              <span style={{ marginLeft: '15px' }}>Bay Area Web Design</span>
            </Link>
          </li>
          {/* <li>
              <Link href="/">Home</Link>
            </li> */}
          <li className={navbarStyles.ul_links}>
            <Link href='/about'>About</Link>
          </li>
          <li className={navbarStyles.ul_links}>
            <Link href='/services'>Services</Link>
          </li>
          <li className={navbarStyles.ul_links}>
            <Link href='/blog'>Blog</Link>
          </li>
          <li className={navbarStyles.ul_links}>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </Row>
    </div>
  );
}
