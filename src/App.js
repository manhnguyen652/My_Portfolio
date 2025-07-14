// src/App.js
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
