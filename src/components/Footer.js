import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container
      fluid
      className="footer"
      style={{
        width: "100%",
        marginTop: "40px",
        padding: "18px 0",
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
