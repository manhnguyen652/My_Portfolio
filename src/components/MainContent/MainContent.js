// src/components/MainContent/MainContent.js
import React from "react";
import "./MainContent.css";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="content-area">
        <div className="location-time">San Francisco, CA 10:24 AM</div>
        <p className="introduction">Introduction</p>
        <h1 className="main-heading">
          Making Your World a Pain Free Experience
        </h1>
        <p className="description">
          My passion lies in crafting elegant, straightforward digital
          experiences. It's a love for simplicity, pure and simple.
        </p>
      </div>
      <div className="tags">
        <span className="tag">Branding</span>
        <span className="tag">Art Direction</span>
        <span className="tag">UI Design</span>
        <span className="tag">Webflow Development</span>
      </div>
    </main>
  );
};

export default MainContent;
