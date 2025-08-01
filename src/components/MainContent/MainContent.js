// src/components/MainContent/MainContent.js
import React from "react";
import { Badge } from "react-bootstrap";

const MainContent = () => {
  return (
    <div className="main-content-custom">
      <div className="location-time">San Francisco, CA 10:24 AM</div>
      <p className="introduction">Introduction</p>
      <h1 className="main-heading">Making Your World a Pain Free Experience</h1>
      <p className="description">
        My passion lies in crafting elegant, straightforward digital
        experiences. It's a love for simplicity, pure and simple.
      </p>
      <div>
        <Badge pill className="tag-custom">
          Branding
        </Badge>
        <Badge pill className="tag-custom">
          Art Direction
        </Badge>
        <Badge pill className="tag-custom">
          UI Design
        </Badge>
        <Badge pill className="tag-custom">
          Webflow Development
        </Badge>
      </div>
    </div>
  );
};

export default MainContent;
