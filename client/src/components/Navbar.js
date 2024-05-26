import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">Rentify</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/addProperty">Add-Property</Nav.Link>
          <Nav.Link href="/">View-Posted-Properties</Nav.Link>
          <Nav.Link href="/viewProperty">View-Properties</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup" >Signup </Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarNav;