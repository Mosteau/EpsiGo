import React from "react";
import meteoImage from "../assets/meteo.png";

function Meteo() {
  return (
    <div className="meteo-container">
      <h1>Météo</h1>
      <img src={meteoImage} alt="Météo" className="meteo-image" />
    </div>
  );
}

export default Meteo;
