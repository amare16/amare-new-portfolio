import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Typed from "react-typed";
import "./home.css";
import coding from "../../assets/coding_atmosphere.jpg";
import avatar from "../../assets/amare-image.jpg";

const Home = () => {
  return (
    <section>
      <Container fluid id="home" className="home-section">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header-column-7">
              <Row>
                <Col md={12}>
                  <h1 className="heading">
                    <Typed
                      strings={["Amare NIGATU"]}
                      typeSpeed={40}
                      style={{ fontFamily: "Arial Black" }}
                    />
                  </h1>
                  <div>
                    <h2 className="header-quality">
                      <Typed
                        strings={[
                          "Junior Developer",
                          "Curious",
                          "Autonomous and Self-educated",
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
                  <img
                    src={avatar}
                    alt={avatar}
                    className="img-fluid img-avatar"
                  />
                </Col>
              </Row>
            </Col>
            <Col md={5} className="coding">
              <img src={coding} alt={coding} className="img-fluid img-coding" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Home;
