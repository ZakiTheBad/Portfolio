import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Veille.css";

function Veille() {
  return (
    <Container fluid className="veille-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12}>
            <h1 style={{ fontSize: "2.2em", paddingBottom: "20px" }}>
              Veille <strong className="purple">Technologique</strong>
            </h1>
          </Col>

          <Col md={12} className="veille-card">
            <h2>Sujet de veille choisi</h2>
            <p className="placeholder-text">Section en cours de redaction.</p>
          </Col>

          <Col md={12} className="veille-card">
            <h2>Outils de veille utilises</h2>
            <p className="placeholder-text">
              Agregateurs RSS, alertes, newsletters. Section en cours de redaction.
            </p>
          </Col>

          <Col md={12} className="veille-card">
            <h2>Synthese des articles / fiches de lecture</h2>
            <p className="placeholder-text">Section en cours de redaction.</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Veille;
