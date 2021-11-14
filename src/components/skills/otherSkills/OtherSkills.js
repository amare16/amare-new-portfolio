import React from "react";
import { Col, Row } from "react-bootstrap";
import { GrTestDesktop, GrGithub, GrMysql } from "react-icons/gr";
import { DiScrum } from "react-icons/di";
import {
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiAmazonaws,
  SiPhpstorm,
  SiVisualstudiocode,
  SiSublimetext,
  SiUbuntu,
  SiWindows,
  SiPhpmyadmin,
  SiAdobephotoshop,
  SiGimp,
  SiFigma,
  SiMicrosoftoffice
} from "react-icons/si";
import './otherSkills.css';

const OtherSkills = () => {
  return (
    <Row className="other-skills-row">
      <Col xs={4} md={2} className="tool-icons">
        <GrTestDesktop color="#00758F" />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <DiScrum color="#264de4" />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <SiMysql color="#00758F" size={40} />
        &nbsp;
        <SiPostgresql size={40} color="#336791" />
        &nbsp;
        <SiMongodb size={40} color="#3FA037" />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <GrGithub color="#171515" />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <SiAmazonaws color="#FF9900" />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <SiPhpstorm color="#cc33ff" size={40} />
        &nbsp;
        <SiVisualstudiocode size={40} color="#0078d7" />
        &nbsp;
        <SiSublimetext size={40} color="#FF9800" />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <SiUbuntu color="#dd4814" size={40} />
        &nbsp;
        <SiWindows size={40} color="#00adef" />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <SiPhpmyadmin color="#6C78A" size={40} />
        &nbsp;
        <GrMysql size={40} color="#4479a1" />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <SiAdobephotoshop color="#1473e6" size={40} />
        &nbsp;
        <SiGimp size={40} color="#7b787c" />
        &nbsp;
        <SiFigma size={40} color="#a259ff" />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <SiMicrosoftoffice color="#F25022" />
      </Col>
    </Row>
  );
};

export default OtherSkills;
