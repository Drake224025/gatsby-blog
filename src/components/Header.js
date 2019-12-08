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
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/">About Us</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/">Contact Us</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)
