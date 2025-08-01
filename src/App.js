// src/App.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import MainContent from "./components/MainContent/MainContent";
import RightNavbar from "./components/RightNavbar/RightNavbar";
import { IoSettingsOutline } from "react-icons/io5";
import "./App.css";

function App() {
  return (
    <Container fluid className="app-container vh-100">
      <Row className="h-100 align-items-center">
        <Col lg={3} md={5} xs={12} className="mb-4 mb-md-0">
          <LeftSidebar />
        </Col>

        <Col lg={8} md={6} xs={12} className="mb-4 mb-md-0">
          <MainContent />
        </Col>

        <Col lg={1} md={1} xs={12}>
          <RightNavbar />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
