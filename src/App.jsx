import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import "./App.css";

const App = () => {
  return (
    <div className="app" id="app">
      <Navbar />
      <Home />
      <Skills />
    </div>
  );
};

export default App;
