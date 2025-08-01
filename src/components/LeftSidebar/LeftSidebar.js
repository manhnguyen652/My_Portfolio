import React from "react";
import "./LeftSidebar.css";
import profilePic from "../../assets/images/avatar.png";
import {
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaFacebookF,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const LeftSidebar = () => {
  return (
    <aside className="left-sidebar">
      <div className="profile-card">
        <div className="availability">
          <span className="dot"></span>
          Available for 3 projects
        </div>
        <div className="profile-image-container">
          <img src={profilePic} alt="Jayden" className="profile-image" />
          <h1 className="profile-name">Mạnh</h1>
        </div>
        <p className="profile-email">manhnguyentien653@gmail.com</p>
        <p className="profile-location">Hà Nội, Việt Nam</p>
        <div className="social-icons">
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
        <button className="get-started-btn">
          Get Started <IoIosArrowForward />
        </button>
      </div>
    </aside>
  );
};

export default LeftSidebar;
