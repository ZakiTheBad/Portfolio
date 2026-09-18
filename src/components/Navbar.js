import React, { useState } from "react";
import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [expand, updateExpanded] = useState(false);

  return (
    <BsNavbar expand="md" fixed="top" className="portfolio-navbar">
      <Container>
        <BsNavbar.Brand as={Link} to="/" onClick={() => updateExpanded(false)}>
          JM.
        </BsNavbar.Brand>
        <BsNavbar.Toggle
          onClick={() => updateExpanded(!expand)}
          aria-controls="main-nav"
        />
        <BsNavbar.Collapse id="main-nav" in={expand}>
          <Nav className="ms-auto" style={{ alignItems: "center" }}>
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                Accueil
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                Parcours
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                Competences
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                Projets
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/veille"
                onClick={() => updateExpanded(false)}
              >
                Veille
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/synthese"
                onClick={() => updateExpanded(false)}
              >
                Synthese E5
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
