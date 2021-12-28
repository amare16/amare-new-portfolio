import React, { useState, useEffect, useRef } from "react";
import {
  ButtonGroup,
  Col,
  Container,
  Form,
  Row,
  Button,
} from "react-bootstrap";
import emailjs from "emailjs-com";
import Typed from "react-typed";
import { FaLinkedin } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import emailContact from "../../assets/email-contact.png";

import "./contact.css";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [thankyouMessage, setThankyouMessage] = useState('Thank you for your message!');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4iw62h4",
        "template_igy76li",
        formRef.current,
        "user_bSgjGV5ar1AAXQTmkzQq8"
      )
      .then(
        (result) => {
          console.log(result);
          setDone(true);
          setTimeout(() => {
            setDone(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    formRef.current.reset();
  };


  return (
    <section className="contact-section">
      <Container className="contact-container">
        <Row className="contact-title-row">
          <Col md={12}>
            {/* <h2 className="title-paragraph">
              Send you <strong>Email</strong> here!
            </h2> */}
            <Typed
              strings={["Send your <strong>Email</strong> here!"]}
              typeSpeed={40}
              backSpeed={60}
              loop
              style={{ color: "greenyellow", fontSize: "30px" }}
            /><br />
            <strong style={{color: "violet", fontSize: "16px"}}><span style={{color: "greenyellow"}}>Call me: </span> +33758169493</strong>
          </Col>
        </Row>
        <Row className="contact-form-row">
          <Col md={{ span: 3, offset: 1 }} className="m-auto img-form">
            <img
              src={emailContact}
              className="d-block mx-auto img-fluid img-email-contact"
              alt="image not found"
            />
          </Col>
          <Col md={{ span: 6, offset: 1 }} className="form-contact">
          {done && (
              <p
                className="thankyoumessage"
              >
                <strong>{thankyouMessage}</strong>
              </p>
            )}
            <Form className="form" ref={formRef} onSubmit={handleSubmit}>
              <Form.Group controlId="form.Name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="form.Email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="form.Subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="user_subject"
                  placeholder="Enter your subject"
                  required
                />
              </Form.Group>
              <Form.Group controlId="form.Textarea">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} required />
              </Form.Group>
              <ButtonGroup style={{ marginTop: "20px" }}>
                <Button type="submit" variant="primary">
                  Send <IoIosSend />
                </Button>
              </ButtonGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
