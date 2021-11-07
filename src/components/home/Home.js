import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Typed from "react-typed";
import "./home.css";
import coding from '../../assets/coding_atmosphere.jpg';

const Home = () => {
  return (
    <section>
      <Container fluid id="home" className="home-section">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header-column-7">
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
            <Col md={5}>
                <img src={coding} alt={coding} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Home;
