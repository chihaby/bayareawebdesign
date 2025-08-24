import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../styles/About.module.css';
import Link from 'next/link';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>About</h2>
      </div>
      <Row>
        <Col
          sm={12}
          md={12}
          style={{ padding: '5px 50px', lineHeight: '1.8em' }}
        >
          <p>
            At Bay Area Web Design, we focus on building websites that work for
            everyone. Our goal is to create clear and simple designs that are
            easy to use, putting user experience and accessibility front and
            center. We believe inclusive design isn{"'"}t just a buzzword—it
            {"'"}s about making sure every visitor, no matter their ability, can
            navigate and interact with your site without frustration. We
            specialize in custom WordPress websites, but we also love coding
            from scratch. This gives us full control over performance,
            customization, and integrations. Need payment processing,
            third-party APIs, or advanced functionality? We handle it. We also
            pay attention to copy, ensuring your content is clear and drives
            engagement. Our approach combines UI/UX design, accessibility
            standards, and web development best practices so your website not
            only looks good but works smoothly. SEO is built into every project,
            helping your site get found by the right audience. Whether you need
            a simple brochure site or a complex platform with multiple
            integrations, we make it easy for users and search engines alike. At
            Bay Area Web Design, we focus on building sites that are fast,
            accessible, and fully customized, making sure your online presence
            reflects your brand and connects with your audience effectively.
          </p>
          <br />
        </Col>
      </Row>
      {/* <Row className={styles.more}>
        <Link href='/about' style={{ color: '#457B9D' }}>
          Find out more about Rad.
        </Link>
      </Row> */}
    </div>
  );
};

export default About;
