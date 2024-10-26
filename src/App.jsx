import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="app" id="app">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
