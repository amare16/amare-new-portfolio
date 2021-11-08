import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logo192.png";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FaUserPlus, FaProjectDiagram } from "react-icons/fa";
import './navBar.css';

const NavBar = () => {
  const [expand, setExpand] = useState(false);
  const [navBarColor, setNavBarColor] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavBarColor(true);
    } else {
      setNavBarColor(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navBarColor ? 'sticky' : 'navbar'}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="img-fluid logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                <FcHome className="home-icon" />Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={() => setExpand(false)}>
                <FaUserPlus className="about-icon" />About
              </Nav.Link>
              <Nav.Link as={Link} to="/projects" onClick={() => setExpand(false)}>
                <FaProjectDiagram className="projects-icon" />Projects
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
