import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "./Synthese.css";

function Synthese() {
  return (
    <Container fluid className="synthese-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12}>
            <h1 style={{ fontSize: "2.2em", paddingBottom: "20px" }}>
              Tableau de <strong className="purple">Synthese E5</strong>
            </h1>
            <p>
              Espace dedie a l'affichage ou au telechargement du tableau officiel
              recapitulatif des competences du referentiel.
            </p>
          </Col>

          <Col md={12}>
            <Table striped bordered hover variant="dark" className="synthese-table">
              <thead>
                <tr>
                  <th>Competence</th>
                  <th>Contexte / Activite</th>
                  <th>Niveau atteint</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="placeholder-text">A completer</td>
                  <td className="placeholder-text">A completer</td>
                  <td className="placeholder-text">A completer</td>
                </tr>
                <tr>
                  <td className="placeholder-text">A completer</td>
                  <td className="placeholder-text">A completer</td>
                  <td className="placeholder-text">A completer</td>
                </tr>
              </tbody>
            </Table>
            <a
              className="btn btn-primary"
              href="#"
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: "15px" }}
            >
              Telecharger le tableau de synthese (PDF)
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Synthese;
