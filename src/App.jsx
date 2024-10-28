import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import "./App.css";

const App = () => {
  return (
    <div className="app" id="app">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
