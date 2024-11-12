import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ExpEdu from "./components/Experience/ExpEdu";
import Customise from "./customise/Customise";
import { hexToHSL } from "./utils/hexToHsl";
import "./App.css";

// Apply colors from sessionStorage on page load
const savedColors = JSON.parse(sessionStorage.getItem("customColors"));
if (savedColors) {
  Object.entries(savedColors).forEach(([key, value]) => {
    const cssVarName = `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
    const { h, s, l } = hexToHSL(value);
    const hslValue = `hsl(${h}, ${s}%, ${l}%)`;
    document.documentElement.style.setProperty(cssVarName, hslValue);

    if (cssVarName === "--background-color") {
      document.documentElement.style.setProperty(
        "--background-color-2",
        `hsl(${h}, ${s}%, ${l + 6}%)`
      );
    }
    if (cssVarName === "--text-color") {
      document.documentElement.style.setProperty(
        "--grey-color",
        `hsl(${h}, ${s}%, ${l - 29}%)`
      );
    }
  });
}

const App = () => {
  return (
    <div className="app" id="app">
      <Customise />
      <Navbar />
      <Home />
      <Skills />
      <ExpEdu />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
