// src/components/Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2025 Nguyen Tien Manh. All Rights Reserved.</p>
            <div>
              <a href="#" className="text-white me-3">
                <FaGithub size={30} />
              </a>
              <a href="#" className="text-white me-3">
                <FaLinkedin size={30} />
              </a>
              <a href="#" className="text-white">
                <FaFacebook size={30} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
