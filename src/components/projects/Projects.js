import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./projectCards/ProjectCards";
import "./projects.css";

import hatchways from "../../assets/project-images/hatchways-assessement.jpg";
import cSharpCalculator from '../../assets/project-images/calculator-c-sharp.jpg';
import agroInterest from '../../assets/project-images/Agrointerest.png';

const Projects = () => {
  return (
    <Container fluid className="section-projects">
      <h1 className="project-heading">
        Personal <strong className="header-brown">Projects </strong>
      </h1>
      <Container>
        <Row style={{marginBottom: "100px"}}>
          <Col md={4} className="projects-card-col">
            <ProjectCards
              imgPath={hatchways}
              isBlog={false}
              title="Hatchways Assessment"
              description="This assessement testify your skills how to fetch data from JSON API and present the information on the screen, to style the web page, add a text and tag input to filter the list of students by their name and their tag and finally to make each student have an expandable list view so that all of their test scores may be viewed"
              link="https://amare-hatchways-assessement-react-app.netlify.app/"
            />
          </Col>
          <Col md={4} className="projects-card-col">
            <ProjectCards
              imgPath={cSharpCalculator}
              isBlog={false}
              title="Calculator with C#"
              description="Simple calculator with C# technology that includes the basic operations to calculate numbers"
              link="https://github.com/amare16/Simple-calculator-with-C-Sharp"
            />
          </Col>
          <Col md={4} className="projects-card-col">
            <ProjectCards
              imgPath={agroInterest}
              isBlog={false}
              title="Calculator with C#"
              description="Agro Interest is developed by a backend technology with PHP framework Symfony4 and with a Javascript framework React js.
              Agro Interest is a web site to meet a farmer or who has a hobby to cultivate (gardener) and also to meet a lender or donor of agricultural equipment."
              link="https://github.com/amare16/simplon-niveau-II-project-2019"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
