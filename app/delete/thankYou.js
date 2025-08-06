import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar.js";

function ThankYou() {
  return (
    <>
      <Navbar />
      <Container>
        <br />
        <br />
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <h2>Thank You</h2>
            <br />
            <p>
              Your form was submitted. We will process your order and reach back
              to you ASAP.
            </p>
            <p>
              <em>Website Remedy</em>
            </p>
            <Link href="/">Return to Home page</Link>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
      </Container>
    </>
  );
}

export default ThankYou;
