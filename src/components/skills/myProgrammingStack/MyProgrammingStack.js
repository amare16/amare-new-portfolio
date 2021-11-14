import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
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
  return (
    <Row className="programme-stack-row">
      <Col xs={4} md={2} className="language-icons">
        <FaHtml5 color="#E34C26" />
      </Col>
      <Col xs={4} md={2} className="language-icons">
        <FaCss3Alt color="#264de4" />
      </Col>
      <Col xs={4} md={2} className="language-icons">
        <DiJavascript1 color="#F0DB4F" />
      </Col>
      <Col xs={4} md={2} className="language-icons">
        <DiNodejs color="#3c873a" title="NodeJS" />
      </Col>
      <Col xs={4} md={2} className="language-icons">
        <FaReact color="#61DBFB" size={40} />
        &nbsp;
        <SiRedux size={40} color="#764abc" />
        &nbsp;
        <SiJest size={40} color="#a42f2f" />
      </Col>
      <Col xs={4} md={2} className="language-icons">
        <FaPhp color="#474A8A" />
      </Col>
      <Col xs={4} md={2} className="language-icons">
        <FaWordpress color="#21759b" />
      </Col>
      <Col xs={4} md={2} className="language-icons">
        <AiOutlineConsoleSql color="#4d4dff" />
      </Col>
      <Col xs={4} md={2} className="language-icons">
        <FaBootstrap color="#6610f2" />
      </Col>
      <Col xs={4} md={2} className="language-icons">
        <SiJquery color="#0769ad" />
      </Col>
      <Col xs={4} md={2} className="language-icons">
        <FaSymfony color="#000000" />
      </Col>
      <Col xs={4} md={2} className="language-icons">
        <FaJava size={40} color="#5382a1" />
        &nbsp;
        <SiCsharp size={40} color="#a877e8" />
        &nbsp;
        <FaPython size={40} color="#4B8BBE" />
      </Col>
    </Row>
  );
};

export default MyProgrammingStack;
