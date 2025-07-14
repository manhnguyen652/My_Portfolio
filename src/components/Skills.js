// src/components/Skills.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// 1. Import thư viện và file CSS
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Skills.css";

// 2. Định nghĩa dữ liệu kỹ năng
const skillsData = [
  {
    name: "HTML & CSS",
    percentage: 90,
    description: "Xây dựng giao diện web tĩnh và responsive.",
  },
  {
    name: "JavaScript",
    percentage: 85,
    description: "Lập trình logic, tương tác phía client.",
  },
  {
    name: "ReactJS",
    percentage: 80,
    description: "Phát triển ứng dụng single-page phức tạp.",
  },
  {
    name: "Node.js",
    percentage: 75,
    description: "Xây dựng API và xử lý backend.",
  },
];

const Skills = () => {
  return (
    // Sử dụng class 'skills-section' từ file CSS
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="text-center">Kỹ năng chuyên môn</h2>
        <Row>
          {/* 3. Dùng map để render các kỹ năng */}
          {skillsData.map((skill, index) => (
            <Col md={3} sm={6} key={index} className="skill-item">
              <CircularProgressbar
                value={skill.percentage}
                text={`${skill.percentage}%`}
                // Các style inline này sẽ bị ghi đè bởi file Skills.css,
                // nhưng vẫn hữu ích để tùy chỉnh nhanh
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: "#00aeff",
                  trailColor: "rgba(255, 255, 255, 0.2)",
                })}
              />
              <h5 className="mt-3">{skill.name}</h5>
              <p>{skill.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
