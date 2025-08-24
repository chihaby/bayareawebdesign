"use client";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer.js";
import blitz from "../../public/img/blitz.png";
import pizza from "../../public/img/pizza.png";
// import oceo from "../../public/img/oceo.png";
import ebpt from "../../public/img/ebpt.png";
import cafelisbon from "../../public/img/cafelisbon.png";
// import landingpage from "../../public/img/landingpage.png";
import mn from "../../public/img/mn.png";
import about from "../../public/img/about.png";
import styles from "../../styles/ServicePage.module.css";

const services = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className={styles.container}>
          <h1>Services</h1>
          <hr />
          <br />
          <br />

          <Row className="justify-content-md-center">
            <Col sm={12} md={6} lg={6}>
              <a
                href="https://www.blitzdetail.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#444444" }}
              >
                <div>
                  <Card>
                    <Image
                      src={blitz}
                      alt="photo of blitzdetail website hero section"
                    />
                    <Card.Body>
                      <Card.Title>Blitz Auto Wash & Detail</Card.Title>
                      <Card.Text>
                        A la carte business model for any business looking to
                        present a selection of prices and services
                      </Card.Text>
                    </Card.Body>
                    <Card.Body></Card.Body>
                  </Card>
                </div>
              </a>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <Card.Text style={{ marginTop: "100px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                in lorem porta, accumsan elit sed, rhoncus eros. Sed sed gravida
                odio. Nulla non accumsan justo, vitae tempus nibh. Duis varius
                viverra purus quis porttitor. Duis ultricies in est vitae
                sollicitudin. Vivamus porta erat at ipsum rhoncus, a lacinia mi
                vestibulum. Nulla interdum nisl non laoreet tristique.
                Suspendisse semper sit amet nisi ac mattis..
              </Card.Text>
            </Col>
          </Row>
          <br />
          <br />

          <br />
          <br />
          <Row className="justify-content-md-center">
            <Col sm={12} md={6} lg={6}>
              <Card.Text style={{ marginTop: "200px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                in lorem porta, accumsan elit sed, rhoncus eros. Sed sed gravida
                odio. Nulla non accumsan justo, vitae tempus nibh. Duis varius
                viverra purus quis porttitor. Duis ultricies in est vitae
                sollicitudin. Vivamus porta erat at ipsum rhoncus, a lacinia mi
                vestibulum. Nulla interdum nisl non laoreet tristique.
                Suspendisse semper sit amet nisi ac mattis..
              </Card.Text>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <b>Web Content Accessibility WCAG</b>
              <a
                href="https://ebpt-rads-projects-304e987f.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#444444" }}
              >
                <div>
                  <Card>
                    <Image src={ebpt} alt="East Bay Paratransit bus" />
                    <Card.Body>
                      <Card.Title>East Bay Transit</Card.Title>
                      <Card.Text>
                        Public transit service for people with disabilities.
                      </Card.Text>
                    </Card.Body>
                    <Card.Body></Card.Body>
                  </Card>
                </div>
              </a>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col sm={12} md={6} lg={6}>
              <b>Coffee Shop</b>
              <a
                href="https://cafe-lisbon-2o6tx7f31-rads-projects-304e987f.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#444444" }}
              >
                <div>
                  <Card>
                    <Image src={cafelisbon} alt="Cafe Lisbon" />
                    <Card.Body>
                      <Card.Title>Cafe Lisbon</Card.Title>
                      <Card.Text>
                        Hand picked artisan coffee, locally sourced ingredients,
                        ensuring premium quality.
                      </Card.Text>
                    </Card.Body>
                    <Card.Body></Card.Body>
                  </Card>
                </div>
              </a>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <Card.Text style={{ marginTop: "200px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                in lorem porta, accumsan elit sed, rhoncus eros. Sed sed gravida
                odio. Nulla non accumsan justo, vitae tempus nibh. Duis varius
                viverra purus quis porttitor. Duis ultricies in est vitae
                sollicitudin. Vivamus porta erat at ipsum rhoncus, a lacinia mi
                vestibulum. Nulla interdum nisl non laoreet tristique.
                Suspendisse semper sit amet nisi ac mattis..
              </Card.Text>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col sm={12} md={6} lg={6}>
              <Card.Text style={{ marginTop: "200px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                in lorem porta, accumsan elit sed, rhoncus eros. Sed sed gravida
                odio. Nulla non accumsan justo, vitae tempus nibh. Duis varius
                viverra purus quis porttitor. Duis ultricies in est vitae
                sollicitudin. Vivamus porta erat at ipsum rhoncus, a lacinia mi
                vestibulum. Nulla interdum nisl non laoreet tristique.
                Suspendisse semper sit amet nisi ac mattis..
              </Card.Text>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <b>Pizzeria</b>
              <a
                href="https://downtownpizza.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#444444" }}
              >
                <div>
                  <Card>
                    <Image
                      src={pizza}
                      alt="photo of slicks pizza shop website"
                    />
                    <Card.Body>
                      <Card.Title>{"Slick Slices"}</Card.Title>
                      <Card.Text>
                        Restaurant model featuring menu, daily special and order
                        submition
                      </Card.Text>
                    </Card.Body>
                    <Card.Body></Card.Body>
                  </Card>
                </div>
              </a>
            </Col>
          </Row>
          <br />
          <br />
          <Row className="justify-content-md-center">
            <Col sm={12} md={6} lg={6}>
              <b>Music</b>
              <a
                href="https://mediterranean.band/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#444444" }}
              >
                <div>
                  <Card>
                    <Image src={mn} alt="mediterranean nights azure" />
                    <Card.Body>
                      <Card.Title>Mucisian/Band</Card.Title>
                      <Card.Text>
                        The band model is for artists who want to showcase their
                        work and links to where to buy.
                      </Card.Text>
                    </Card.Body>
                    <Card.Body></Card.Body>
                  </Card>
                </div>
              </a>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <Card.Text style={{ marginTop: "200px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                in lorem porta, accumsan elit sed, rhoncus eros. Sed sed gravida
                odio. Nulla non accumsan justo, vitae tempus nibh. Duis varius
                viverra purus quis porttitor. Duis ultricies in est vitae
                sollicitudin. Vivamus porta erat at ipsum rhoncus, a lacinia mi
                vestibulum. Nulla interdum nisl non laoreet tristique.
                Suspendisse semper sit amet nisi ac mattis..
              </Card.Text>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col sm={12} md={6} lg={6}>
              <Card.Text style={{ marginTop: "200px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                in lorem porta, accumsan elit sed, rhoncus eros. Sed sed gravida
                odio. Nulla non accumsan justo, vitae tempus nibh. Duis varius
                viverra purus quis porttitor. Duis ultricies in est vitae
                sollicitudin. Vivamus porta erat at ipsum rhoncus, a lacinia mi
                vestibulum. Nulla interdum nisl non laoreet tristique.
                Suspendisse semper sit amet nisi ac mattis..
              </Card.Text>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <b>Entrepreneur</b>
              <a
                href="https://client-custom-website.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#444444" }}
              >
                <div>
                  <Card>
                    <Image src={about} alt="portfolio website" />
                    <Card.Body>
                      <Card.Title>Portfolio</Card.Title>
                      <Card.Text>
                        The portfolio model is for professionals who want to
                        showcase their skills and services.
                      </Card.Text>
                    </Card.Body>
                    <Card.Body></Card.Body>
                  </Card>
                </div>
              </a>
            </Col>
          </Row>
        </div>
      </main>
      <hr />
      <br />
      <Footer />
    </>
  );
};

export default services;
