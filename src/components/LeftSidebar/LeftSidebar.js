// src/components/LeftSidebar/LeftSidebar.js
import React from "react";
import { Card, Button } from "react-bootstrap";
import profilePic from "../../assets/images/avatar.png";
import {
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaFacebookF,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const LeftSidebar = () => {
  return (
    <>
      <Card className="profile-card-custom text-white text-center">
        <Card.Body>
          <div className="availability">
            <span className="dot"></span>
            Available for 3 projects
          </div>
          <div className="profile-image-container">
            <Card.Img
              variant="top"
              src={profilePic}
              className="profile-image"
            />
          </div>
          <h1 className="profile-name">Manhh</h1>
          <Card.Text className="profile-email">
            manhnguyentien653@gmail.com
          </Card.Text>
          <Card.Text className="profile-location">Hà Nội, Việt Nam</Card.Text>
          <div className="social-icons my-4">
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaDribbble />
            </a>
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
          </div>
          <Button
            variant="dark"
            size="lg"
            className="get-started-btn-custom w-100"
          >
            Get Started <IoIosArrowForward />
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default LeftSidebar;
