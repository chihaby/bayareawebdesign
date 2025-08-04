import Image from 'next/image';
import about from '../public/img/about.png';
import blitz from '../public/assets/img/blitz.png';
import styles from '../styles/Service.module.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import WhiteCtaLink from './WhiteCtaLink';

const Service = () => {
  return (
    <div className={styles.container}>
      <br />
      <div style={{ maxWidth: '1200px', margin: 'auto' }}>
        <h2 className={styles.models_main_title}>Services</h2>
        <br />
        <br />
        <Row className={styles.models}>
          <Col sm={12} md={6} className={styles.model_item}>
            <a
              href='https://www.blitzdetail.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.model_link}
            >
              <div className={styles.model_title}>Business</div>
              <div className={styles.model_image}>
                <Image
                  src={blitz}
                  alt='website for business'
                  width={320}
                  height={200}
                />
              </div>
              <div className={styles.model_text}>
                <div className={styles.model_description}>
                  Tailored solutions to meet specific business needs. Perfect
                  for showcasing products and services.
                </div>
                <br />
                <div className={styles.model_visit}>Visit website</div>
              </div>
            </a>
          </Col>
          <Col sm={12} md={6} className={styles.model_item}>
            <a
              href='https://client-custom-website.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.model_link}
            >
              <div className={styles.model_title}>Personal</div>
              <div className={styles.model_image}>
                <Image src={about} alt='Client' width={320} height={200} />
              </div>
              <div className={styles.model_text}>
                <div className={styles.model_description}>
                  Perfect platform to showcase your skills and connect with
                  potential clients.
                </div>
                <br />
                <div className={styles.model_visit}>Visit website</div>
              </div>
            </a>
          </Col>
        </Row>
        <Row className={styles.cta_link}>
          <WhiteCtaLink />
        </Row>
      </div>
    </div>
  );
};

export default Service;
