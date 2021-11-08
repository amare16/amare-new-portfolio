import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  console.log("year:", year);
  return (
    <Container fluid className="footer-container fixed-bottom">
      <Row>
        <Col md={3} className="footer-copyright">
          <h4>Copyright &copy; {year}</h4>
        </Col>
        <Col md={6} className="footer-copyright-designed">
          <h4>Designed and Developed by Amare NIGATU - All rights reserved</h4>
        </Col>
        <Col md={3} className="social-networks">
          <ul className="footer-social-icons">
            <li className="social-icons">
              <a href="https://www.linkedin.com/in/amare-nigatu-006972125/" target="_blank">
                <FaLinkedin size="30" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
