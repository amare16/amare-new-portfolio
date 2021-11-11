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
        <GrTestDesktop />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <DiScrum color="#264de4" />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <SiMysql color="#61DBFB" size={40} />
        &nbsp;
        <SiPostgresql size={40} />
        &nbsp;
        <SiMongodb size={40} />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <GrGithub color="#3c873a" title="NodeJS" />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <SiAmazonaws color="#474A8A" />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <SiPhpstorm color="#61DBFB" size={40} />
        &nbsp;
        <SiVisualstudiocode size={40} />
        &nbsp;
        <SiSublimetext size={40} />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <SiUbuntu color="#61DBFB" size={40} />
        &nbsp;
        <SiWindows size={40} />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <SiPhpmyadmin color="#61DBFB" size={40} />
        &nbsp;
        <GrMysql size={40} />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <SiAdobephotoshop color="#61DBFB" size={40} />
        &nbsp;
        <SiGimp size={40} />
        &nbsp;
        <SiFigma size={40} />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <SiMicrosoftoffice color="#474A8A" />
      </Col>
    </Row>
  );
};

export default OtherSkills;
