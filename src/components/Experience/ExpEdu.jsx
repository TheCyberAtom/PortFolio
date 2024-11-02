import React, { useState } from "react";
import Experience from "./Experience";
import Education from "./Education";
import "./ExpEdu.css";

const ExpEdu = () => {
  const [tabValue, setTabValue] = useState("exp");
  return (
    <div className="expedu" id="expedu">
      <div className="expedu-content">
        <div className="expedu-content-title">
          <h1>Experience</h1>
        </div>
        <div className="expedu-content-description">
          <p>
            A glimpse into my academic and profesional experience, shaping my
            growth in the tech world.
          </p>
        </div>
        <div className="expedu-sections">
          <div className="tabs">
            <div
              className={
                tabValue === "exp" ? "exp-tab tab active" : "exp-tab tab"
              }
              onClick={() => setTabValue("exp")}
            >
              <p>Experience</p>
            </div>
            <div
              className={
                tabValue === "edu" ? "edu-tab tab active" : "edu-tab tab"
              }
              onClick={() => setTabValue("edu")}
            >
              <p>Education</p>
            </div>
          </div>
          <div className="exp-edu-details">
            {tabValue === "exp" ? <Experience /> : <Education />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpEdu;
