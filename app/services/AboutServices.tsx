"use client";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer.js";
import blitz from "../../public/img/blitz.png";
import pizza from "../../public/img/pizza.png";
import wellington from "../../public/assets/img/wellington.png";
// import oceo from "../../public/img/oceo.png";
import ebpt from "../../public/img/ebpt.png";
import cafelisbon from "../../public/img/cafelisbon.png";
// import landingpage from "../../public/img/landingpage.png";
import mn from "../../public/img/mn.png";
import about from "../../public/img/about.png";
import styles from "../../styles/ServicePage.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Bay Area Web Design",
  description:
    "View bay area web design services for small, medium businesses and industry professionals",
  metadataBase: new URL("https://bayareawebdesign.net"),
  alternates: {
    canonical: "/services",
  },
};

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
              <h2>Parking Management</h2>
              <br />
              <Card.Text>
                A trusted property management company with 15 years of service
                in the Bay Area. With focus on simplifying the rental experience
                for owners and tenants alike, ensuring every property is
                well-maintained, efficiently managed, and consistently
                profitable. From tenant screening to rent collection, our
                dedicated team handles every detail so you can enjoy peace of
                mind and maximize your investment.
              </Card.Text>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <a
                href="https://www.wellingtoncma.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#444444" }}
              >
                <div>
                  <Card>
                    <Image
                      src={wellington}
                      alt="photo of wellington website hero section"
                    />
                    <Card.Body>
                      <Card.Title>Wellington/CMA</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </a>
            </Col>
          </Row>
          <br />
          <br />
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
                      {/* <Card.Text>
                        A la carte business model for any business looking to
                        present a selection of prices and services
                      </Card.Text> */}
                    </Card.Body>
                    <Card.Body></Card.Body>
                  </Card>
                </div>
              </a>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <h2>Auto Detailing Service</h2>
              <br />
              <Card.Text>
                Auto detailing service with simplied booking process for
                customers. The site allows visitors to browse options such as
                interior, exterior, or full detailing packages, with the
                flexibility to include add-ons. Once selections are made,
                customers can schedule appointments directly through integrated
                Calendly, which syncs seamlessly with the business calendar to
                prevent scheduling conflicts. To complete the process, secure
                payment is built into the platform, confirming the appointment
                instantly. The result is a professional, user-friendly,
                responsive website designed to enhance customer experience.
              </Card.Text>
            </Col>
          </Row>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <Row className="justify-content-md-center">
            <Col sm={12} md={6} lg={6}>
              <Card.Text>
                <h2>Web Content Accessibility Guidlines WCAG AA 2.0</h2>
                <br />
                The East Bay Paratransit community depends on having a website
                that is accessible for all users, including those who are
                visually impaired, have hearing loss, or limited motor skills.
                The website was built with a simple, user-friendly design that
                makes navigation easy and works well with screen readers and
                keyboard controls. Accessibility was a priority from the start,
                and the site follows the latest WCAG 2.2 AA standards to ensure
                compliance. Features were built in to support an inclusive
                experience so every customer can find the information they need
                without barriers. The focus was to create a reliable,
                accessible, and modern website that meets the needs of East Bay
                Paratransit riders.
              </Card.Text>
            </Col>
            <Col sm={12} md={6} lg={6}>
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
                      <Card.Title>East Bay Paratransit</Card.Title>
                      {/* <Card.Text>
                        Public transit service for people with disabilities.
                      </Card.Text> */}
                    </Card.Body>
                    <Card.Body></Card.Body>
                  </Card>
                </div>
              </a>
            </Col>
          </Row>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <Row>
            <Col sm={12} md={6} lg={6}>
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
                      {/* <Card.Text>
                        Hand picked artisan coffee, locally sourced ingredients,
                        ensuring premium quality.
                      </Card.Text> */}
                    </Card.Body>
                    <Card.Body></Card.Body>
                  </Card>
                </div>
              </a>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <h2>Coffee Shop</h2>
              <br />
              <Card.Text>
                Cafe Lisbon was designed with a modern and elegant style to
                reflect the atmosphere of the business. The site highlights the
                different coffee blends and fresh pastries the shop offers,
                giving visitors a clear view of the menu. An About page shares
                the history of the business and the passion that drives it,
                helping customers connect with the story behind the brand. There
                is also a store page that includes practical details like the
                hours of operation and location, making it easy for people to
                plan their visit.
              </Card.Text>
            </Col>
          </Row>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <Row>
            <Col sm={12} md={6} lg={6}>
              <h2>Pizzeria</h2>
              <br />
              <Card.Text>
                This project is a full stack application built to give the owner
                control over the website through a simple back end where new
                menu items and prices can be uploaded and updated easily. On the
                customer side, the site allows visitors to browse the menu, view
                detailed ingredients for each pizza, and even filter options by
                ingredients to find exactly what they want. Once they make their
                choice, customers can place an order directly online. The goal
                was to create a smooth experience for both the business and its
                customers, combining an easy management system for the owner
                with a user-friendly interface that makes ordering pizza online
                straightforward and convenient.
              </Card.Text>
            </Col>
            <Col sm={12} md={6} lg={6}>
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
                      {/* <Card.Text>
                        Restaurant model featuring menu, daily special and order
                        submition
                      </Card.Text> */}
                    </Card.Body>
                    <Card.Body></Card.Body>
                  </Card>
                </div>
              </a>
            </Col>
          </Row>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <Row className="justify-content-md-center">
            <Col sm={12} md={6} lg={6}>
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
                      {/* <Card.Text>
                        The band model is for artists who want to showcase their
                        work and links to where to buy.
                      </Card.Text> */}
                    </Card.Body>
                    <Card.Body></Card.Body>
                  </Card>
                </div>
              </a>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <h2>Artists and Musicians</h2>
              <br />
              <Card.Text>
                This project was built as a space for artists to showcase their
                portfolio and share their latest work in a clean and organized
                way. The website includes links to the artist’s favorite
                platforms and social media so visitors can follow and connect
                easily. To help with audience growth, it features a signup
                button for joining a mailing list, along with options for
                selling merchandise. A contact form is also included for direct
                communication, and external e-commerce apps can be linked for
                more advanced selling needs. The goal was to create a simple but
                effective online hub that gives artists the tools they need to
                promote their work, grow their audience, and manage their
                creative brand.
              </Card.Text>
            </Col>
          </Row>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <Row className="justify-content-md-center">
            <Col sm={12} md={6} lg={6}>
              <h2>Entrepreneurs and Industry Professionals</h2>
              <Card.Text>
                This website was built as a model for industry professionals to
                showcase their services and talents in a clear and effective
                way. The design can be applied to almost any field—whether it’s
                chefs, yoga instructors, personal trainers, lawyers, teachers,
                or other professionals—giving them a space to highlight their
                portfolio and skills for maximum exposure. The site focuses on
                presenting information in a simple layout that makes it easy for
                potential clients or students to learn more, view experience,
                and get in touch. It works as both a personal brand hub and a
                professional portfolio, helping users stand out in their
                industry while giving them the tools to connect with a wider
                audience..
              </Card.Text>
            </Col>
            <Col sm={12} md={6} lg={6}>
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
                      {/* <Card.Text>
                        The portfolio model is for professionals who want to
                        showcase their skills and services.
                      </Card.Text> */}
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
