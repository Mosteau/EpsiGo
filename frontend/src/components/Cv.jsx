import React from "react";
import cvImage from "../assets/cvexemple.png";

function Cv() {
  return (
    <div className="cv-container">
      <h1 className="titleCv">CV Exemple</h1>
      <img src={cvImage} alt="CV Exemple" className="cv-image" />
    </div>
  );
}

export default Cv;
