// src/App.js
import React from "react";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import MainContent from "./components/MainContent/MainContent";
import RightNavbar from "./components/RightNavbar/RightNavbar";
import { IoSettingsOutline } from "react-icons/io5";

function App() {
  return (
    <div className="app-container">
      <div className="top-left-icon">
        <IoSettingsOutline />
      </div>
      <LeftSidebar />
      <MainContent />
      <RightNavbar />
    </div>
  );
}

export default App;
