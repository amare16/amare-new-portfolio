import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ModalHover } from "react-modal-hover";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPhp,
  FaBootstrap,
  FaSymfony,
  FaWordpress,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { DiJavascript1, DiNodejs } from "react-icons/di";
import { SiRedux, SiJest, SiJquery, SiCsharp } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import "./myProgrammingStack.css";

const MyProgrammingStack = () => {
  const MyContentStyles = {
    backgroundColor: "tomato",
    color: "white",
    // padding: "20px 40px",
  };
  const now = [10, 25, 40, 50, 60, 75, 80, 90, 100];
  return (
    <Row className="programme-stack-row">
      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={<><h3>HTML5</h3><ProgressBar variant="success" now={now[7]} label={`${now[7]}%`} /></>}
      >
        <Col xs={4} md={2} className="language-icons">
          <FaHtml5 color="#E34C26" />
        </Col>
      </ModalHover>
      <ModalHover
       ContentStyles={MyContentStyles}
       onHover={<><h3>CSS3</h3><ProgressBar variant="success" now={now[6]} label={`${now[6]}%`} /></>}>
        <Col xs={4} md={2} className="language-icons">
          <FaCss3Alt color="#264de4" />
        </Col>
      </ModalHover>
      <ModalHover
       ContentStyles={MyContentStyles}
       onHover={<><h3>JAVASCRIPT</h3><ProgressBar variant="success" now={now[5]} label={`${now[5]}%`} /></>}>
        <Col xs={4} md={2} className="language-icons">
          <DiJavascript1 color="#F0DB4F" />
        </Col>
      </ModalHover>

      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={<><h3>NODE JS</h3><ProgressBar variant="success" now={now[4]} label={`${now[4]}%`} /></>}
      >
        <Col xs={4} md={2} className="language-icons">
          <DiNodejs color="#3c873a" title="NodeJS" />
        </Col>
      </ModalHover>
      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={<>
          <h3>React</h3><ProgressBar variant="success" now={now[5]} label={`${now[5]}%`} />
          <h3>Redux</h3><ProgressBar variant="warning" now={now[3]} label={`${now[3]}%`} />
          <h3>Jest</h3><ProgressBar variant="danger" now={now[2]} label={`${now[2]}%`} />
        </>}
      >
        <Col xs={4} md={2} className="language-icons">
          <FaReact color="#61DBFB" size={40} />
          &nbsp;
          <SiRedux size={40} color="#764abc" />
          &nbsp;
          <SiJest size={40} color="#a42f2f" />
        </Col>
      </ModalHover>
      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={<><h3>PHP</h3><ProgressBar variant="success" now={now[5]} label={`${now[5]}%`} /></>}
      >
        <Col xs={4} md={2} className="language-icons">
          <FaPhp color="#474A8A" />
        </Col>
      </ModalHover>

      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={<><h3>WORDPRESS</h3><ProgressBar variant="success" now={now[6]} label={`${now[6]}%`} /></>}
      >
        <Col xs={4} md={2} className="language-icons">
          <FaWordpress color="#21759b" />
        </Col>
      </ModalHover>
      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={<><h3>SQL</h3><ProgressBar variant="success" now={now[5]} label={`${now[5]}%`} /></>}
      >
        <Col xs={4} md={2} className="language-icons">
          <AiOutlineConsoleSql color="#4d4dff" />
        </Col>
      </ModalHover>
      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={<><h3>BOOTSTRAP</h3><ProgressBar variant="success" now={now[6]} label={`${now[6]}%`} /></>}
      >
        <Col xs={4} md={2} className="language-icons">
          <FaBootstrap color="#6610f2" />
        </Col>
      </ModalHover>

      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={<><h3>JQUERY</h3><ProgressBar variant="success" now={now[4]} label={`${now[4]}%`} /></>}
      >
        <Col xs={4} md={2} className="language-icons">
          <SiJquery color="#0769ad" />
        </Col>
      </ModalHover>
      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={<><h3>SYMFONY 4</h3><ProgressBar variant="success" now={now[4]} label={`${now[4]}%`} /></>}
      >
        <Col xs={4} md={2} className="language-icons">
          <FaSymfony color="#000000" />
        </Col>
      </ModalHover>
      <ModalHover
        ContentStyles={MyContentStyles}
        onHover={<>
          <h3>JAVA</h3><ProgressBar variant="danger" now={now[2]} label={`${now[2]}%`} />
          <h3>C-SHARP</h3><ProgressBar variant="danger" now={now[2]} label={`${now[2]}%`} />
          <h3>PYTHON</h3><ProgressBar variant="danger" now={now[2]} label={`${now[2]}%`} />
        </>}
      >
        <Col xs={4} md={2} className="language-icons">
          <FaJava size={40} color="#5382a1" />
          &nbsp;
          <SiCsharp size={40} color="#a877e8" />
          &nbsp;
          <FaPython size={40} color="#4B8BBE" />
        </Col>
      </ModalHover>
    </Row>
  );
};

export default MyProgrammingStack;
