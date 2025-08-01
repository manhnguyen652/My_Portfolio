// src/components/RightNavbar/RightNavbar.js
import React from "react";
import "./RightNavbar.css";
import {
  IoHomeOutline,
  IoStatsChart,
  IoDocumentTextOutline,
  IoPersonOutline,
  IoChatbubbleEllipsesOutline,
  IoMailOutline,
  IoGridOutline,
} from "react-icons/io5";

const RightNavbar = () => {
  return (
    <nav className="right-navbar">
      <div className="nav-icon active">
        <IoGridOutline />
      </div>
      <div className="nav-icon">
        <IoHomeOutline />
      </div>
      <div className="nav-icon">
        <IoStatsChart />
      </div>
      <div className="nav-icon">
        <IoDocumentTextOutline />
      </div>
      <div className="nav-icon">
        <IoPersonOutline />
      </div>
      <div className="nav-icon">
        <IoChatbubbleEllipsesOutline />
      </div>
      <div className="nav-icon">
        <IoMailOutline />
      </div>
    </nav>
  );
};

export default RightNavbar;
