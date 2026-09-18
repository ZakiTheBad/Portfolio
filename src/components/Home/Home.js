import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import Particle from "../Particle";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Salut tout le monde{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Je suis
                <strong className="main-name"> Jawad MERDJI</strong>
              </h1>

              <div style={{ padding: 20, textAlign: "left" }}>
                <Type />
              </div>

              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillLinkedin />
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="home-img"></Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
