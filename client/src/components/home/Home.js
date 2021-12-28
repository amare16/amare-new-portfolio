import React from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { SiFreelancer } from "react-icons/si";
import Typed from "react-typed";
import { ModalHover } from "react-modal-hover";
import "./home.css";
import coding from "../../assets/coding_atmosphere.jpg";
import avatar from "../../assets/image-amare.jpg";
import cvFrench from "../../assets/AMARE_NIGATU_CV.pdf";
import cvEnglish from "../../assets/Amare_NIGATU_CV_english.pdf";
import { Link } from "react-router-dom";

const Home = () => {
  const MyContentStyles = {
    backgroundColor: "#ffc107",
  };
  return (
    <>
      <section>
        <Container fluid id="home" className="home-section">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header-column-7 mx-auto">
                <Row>
                  <Col md={12} className="hello-col">
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
                  <Col>
                    <ModalHover
                      ContentStyles={MyContentStyles}
                      onHover={
                        <>
                          <Link to={cvFrench} target="_blank" download>
                            <Button className="cv-btn-french">French CV</Button>
                          </Link>
                          <Link to={cvEnglish} target="_blank" download>
                            <Button className="cv-btn-english">
                              English CV
                            </Button>
                          </Link>
                        </>
                      }
                    >
                      <Button
                        className="cv-btn"
                        style={{ visibility: "visible" }}
                      >
                        Get My CV
                      </Button>
                    </ModalHover>
                  </Col>
                  {/* <Col md={{ span: 4, offset: -2 }}>
                    <Link to="/contact">
                      <Button className="hire-btn">Hire Me</Button>
                    </Link>
                  </Col> */}
                </Row>
                <Row>
                  <Col>
                    <Card
                      className="mx-auto col-freelancer-text"
                    >
                      <Card.Body>
                        <Card.Text>
                          <strong style={{fontSize: "20px", color: "green"}}>A passionate Full time Developer or Freelancer who wants to build:</strong>
                          <br /><br />
                          <strong style={{textAlign: "justify"}}><SiFreelancer size={35} /> a full project with React js and Node js!</strong> <br />
                          <strong><SiFreelancer size={35} /> a showcase website with Wordpress and an E-commerce
                          website with Woocommerce!</strong>
                        </Card.Text>
                      </Card.Body>
                      <Link to="/contact" style={{marginBottom: "10px"}}>
                      <Button className="hire-btn">Hire Me</Button>
                    </Link>
                    </Card>
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
