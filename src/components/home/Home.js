import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Typed from "react-typed";
import "./home.css";
import coding from "../../assets/coding_atmosphere.jpg";
import avatar from "../../assets/image-amare.jpg";
import cvFrench from "../../assets/AMARE_NIGATU_CV.pdf";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section>
        <Container fluid id="home" className="home-section">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header-column-7 m-auto">
                <Row>
                  <Col md={12}>
                    <h3>Hello, 🙋‍♂️</h3>

                    <h1 className="heading">
                      <Typed
                        strings={["<em><small>I'm</small></em> Amare NIGATU"]}
                        typeSpeed={40}
                        style={{ fontFamily: "Arial Black" }}
                      />
                    </h1>
                    <div>
                      <h2 className="header-quality">
                        <Typed
                          strings={[
                            "Junior Full Stack Developer 💻",
                            "Curious 🦝",
                            "Autonomous and Self-educated 🤳",
                            "MERN Stack",
                          ]}
                          typeSpeed={40}
                          backSpeed={60}
                          loop
                        />
                      </h2>
                    </div>
                  </Col>
                </Row>
                <Row className="avatar-row">
                  <Col md={12}>
                    <Link
                      to={cvFrench}
                      target="_blank"
                      download
                      style={{ marginRight: "30px" }}
                    >
                      <Button className="cv-btn">Get My CV</Button>
                    </Link>
                    <Link to="/contact">
                      <Button className="hire-btn">Hire Me</Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col md={5} className="coding">
                <img
                  src={coding}
                  alt={coding}
                  className="img-fluid img-coding"
                />
                <img
                  src={avatar}
                  alt={avatar}
                  className="img-fluid img-avatar img-avatar"
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default Home;
