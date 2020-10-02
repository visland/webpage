import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

export default function NavBar() {
  return(
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#about"><span className="pinkBold">Xiaohan Zhu </span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href={require("./assets/files/Resume.pdf")}>Resume</Nav.Link>
          <Nav.Link href="#recom">Recommendation</Nav.Link>
          <Nav.Link href="#project">Projects</Nav.Link>
          <Nav.Link href="#certi">Certificates</Nav.Link>
          <Nav.Link href="#fun">Fun</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}