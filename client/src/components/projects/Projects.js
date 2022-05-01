import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./projectCards/ProjectCards";
import HoverVideoPlayer from "react-hover-video-player";
import "./projects.css";

import hatchways from "../../assets/project-images/hatchways-assessement.jpg";
import tutoAppReactNodeJs from "../../assets/project-images/tuto-app-react-node-js.jpg";
import agroInterest from "../../assets/project-images/Agrointerest.png";
import agroInterestVideo from "../../assets/monsiteweb-agrointerest.mp4";

const Projects = () => {
  return (
    <Container fluid className="section-projects">
      <h1 className="project-heading">
        Personal <strong className="header-brown">Projects </strong>
      </h1>
      <Container>
        <Row style={{ marginBottom: "100px" }}>
          <Col md={4} className="projects-card-col">
            <ProjectCards
              imgPath={hatchways}
              isBlog={false}
              title="Hatchways Assessment with React js"
              description="This assessement testify your skills how to fetch data from JSON API and present the information on the screen, to style the web page, add a name and tag input to filter the list of students by their name and their tag and finally to make each student have an expandable list view so that all of their test scores may be viewed"
              link="https://amare-hatchways-assessement-react-app.netlify.app/"
            />
          </Col>
          <Col md={4} className="projects-card-col agroInterest">
            <HoverVideoPlayer
              videoSrc={agroInterestVideo}
              // We should display an image over the video while it is paused
              pausedOverlay={
                <ProjectCards
                  imgPath={agroInterest}
                  isBlog={false}
                  title="Agro Interest with Symfony 4 and React js"
                  description="Agro Interest is developed by a backend technology with PHP framework Symfony4 and with a Javascript framework React js.
              Agro Interest is a web site to meet a farmer or who has a hobby to cultivate (gardener) and also to meet a lender or donor of agricultural equipment."
                  link="https://github.com/amare16/simplon-niveau-II-project-2019"
                />
              }
            />
          </Col>
          <Col md={4} className="projects-card-col">
            <ProjectCards
              imgPath={tutoAppReactNodeJs}
              isBlog={false}
              title="Tutorial app with React and Node js"
              description="Tuto app is a FullStack app developed by using React js and Node js technology. "
              link="https://first-tuto-react-nodejs-app.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
