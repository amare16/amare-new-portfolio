import React from "react";
import { Col, Row } from "react-bootstrap";
import { ModalHover } from "react-modal-hover";
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
  SiMicrosoftoffice,
  SiMacos,
} from "react-icons/si";
import "./otherSkills.css";

const OtherSkills = () => {
  const MyContentStyles = {
    backgroundColor: "rgb(155, 57, 210)",
    color: "white",
  };

  return (
    <Row className="other-skills-row">
      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={
          <>
            <h3>TDD</h3>
          </>
        }
      >
        <Col xs={4} md={4} className="tool-icons">
          <GrTestDesktop color="#00758F" />
        </Col>
      </ModalHover>
      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={
          <>
            <h3>AGILE</h3>
          </>
        }
      >
        <Col xs={4} md={4} className="tool-icons">
          <DiScrum color="#264de4" />
        </Col>
      </ModalHover>
      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={
          <>
            <h3>MYSQL</h3>
            <h3>POSTGRSQL</h3>
            <h3>MONGODB</h3>
          </>
        }
      >
        <Col xs={4} md={4} className="tool-icons">
          <SiMysql color="#00758F" size={40} />
          &nbsp;
          <SiPostgresql size={40} color="#336791" />
          &nbsp;
          <SiMongodb size={40} color="#3FA037" />
        </Col>
      </ModalHover>
      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={
          <>
            <h3>GITHUB</h3>
          </>
        }
      >
        <Col xs={4} md={4} className="tool-icons">
          <GrGithub color="#171515" />
        </Col>
      </ModalHover>
      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={
          <>
            <h3>AWS</h3>
          </>
        }
      >
        <Col xs={4} md={4} className="tool-icons">
          <SiAmazonaws color="#FF9900" />
        </Col>
      </ModalHover>
      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={
          <>
            <h3>PHPSTORM</h3>
            <h3>VSCODE</h3>
            <h3>SUBLIME</h3>
          </>
        }
      >
        <Col xs={4} md={4} className="tool-icons">
          <SiPhpstorm color="#cc33ff" size={40} />
          &nbsp;
          <SiVisualstudiocode size={40} color="#0078d7" />
          &nbsp;
          <SiSublimetext size={40} color="#FF9800" />
        </Col>
      </ModalHover>
      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={
          <>
            <h3>UBUNTU</h3>
            <h3>WINDOWS10</h3>
            <h3>MACOS</h3>
          </>
        }
      >
        <Col xs={4} md={4} className="tool-icons">
          <SiUbuntu color="#dd4814" size={40} />
          &nbsp;
          <SiWindows size={40} color="#00adef" />
          &nbsp;
          <SiMacos size={40} color="#00adef" />
        </Col>
      </ModalHover>
      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={
          <>
            <h3>PHPMYADMIN</h3>
            <h3>MYSQLWB</h3>
          </>
        }
      >
        <Col xs={4} md={4} className="tool-icons">
          <SiPhpmyadmin color="#6C78A" size={40} />
          &nbsp;
          <GrMysql size={40} color="#4479a1" />
        </Col>
      </ModalHover>
      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={
          <>
            <h3>PHOTOSHOP</h3>
            <h3>GIMP</h3>
            <h3>FIGMA</h3>
          </>
        }
      >
        <Col xs={4} md={4} className="tool-icons">
          <SiAdobephotoshop color="#1473e6" size={40} />
          &nbsp;
          <SiGimp size={40} color="#7b787c" />
          &nbsp;
          <SiFigma size={40} color="#a259ff" />
        </Col>
      </ModalHover>
      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={
          <>
            <h3>MSOFFICE</h3>
          </>
        }
      >
        <Col xs={4} md={4} className="tool-icons">
          <SiMicrosoftoffice color="#F25022" />
        </Col>
      </ModalHover>
    </Row>
  );
};

export default OtherSkills;
