import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

export default props => (
  <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">{props.children}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link to="/" as={Link}>
            Home
          </Nav.Link>
          <Nav.Link to="/about" as={Link}>
            About Us
          </Nav.Link>
          <Nav.Link to="/contact" as={Link}>
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)
