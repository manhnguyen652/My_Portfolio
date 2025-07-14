// src/components/Projects.js
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const projects = [
  {
    title: "Dự án A",
    description:
      "Mô tả ngắn gọn về dự án A. Công nghệ sử dụng: React, Node.js, MongoDB.",
    imgUrl: "https://via.placeholder.com/300x200", // Thay bằng ảnh dự án
    link: "#",
  },
  {
    title: "Dự án B",
    description:
      "Mô tả ngắn gọn về dự án B. Công nghệ sử dụng: Vue.js, Firebase.",
    imgUrl: "https://via.placeholder.com/300x200", // Thay bằng ảnh dự án
    link: "#",
  },
  {
    title: "Dự án C",
    description:
      "Mô tả ngắn gọn về dự án C. Công nghệ sử dụng: HTML, CSS, JavaScript.",
    imgUrl: "https://via.placeholder.com/300x200", // Thay bằng ảnh dự án
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Dự án nổi bật</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={project.imgUrl} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link} target="_blank">
                    Xem chi tiết
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
