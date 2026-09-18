import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container
      fluid
      className="footer"
      style={{
        width: "100%",
        padding: "14px 0",
        position: "fixed",
        left: 0,
        bottom: 0,
        zIndex: 100,
        backgroundColor: "#0d1117",
        borderTop: "1px solid #2a313c",
      }}
    >
      <Row>
        <Col
          md="12"
          className="footer-copywright"
          style={{ textAlign: "center" }}
        >
          <h3 style={{ fontSize: "1rem", margin: 0 }}>
            Copyright © 2026 Jawad MERDJI
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
