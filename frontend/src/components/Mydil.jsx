import React from "react";
import robot from "../assets/robot.png";

function Mydil() {
  return (
    <div className="mydil-container">
      <h1>Mydil</h1>
      <p>Présentation du laboratoire Mydil de l'EPSI</p>
      <img src={robot} alt="Mydil" className="mydil-image" />
      <div className="mydil-content">
        <h2>À propos de Mydil</h2>
        <p>
          Mydil est un laboratoire participatif de l'EPSI où les étudiants
          peuvent collaborer sur des projets innovants en informatique. Le
          laboratoire offre un espace pour l'expérimentation, l'apprentissage et
          le développement de nouvelles compétences techniques.
        </p>
        <h2>Projets en cours</h2>
        <ul>
          <li>
            Développement d'une application mobile pour la gestion des tâches
          </li>
          <li>Création d'un robot autonome pour la navigation intérieure</li>
          <li>
            Analyse de données pour des projets de recherche en intelligence
            artificielle
          </li>
        </ul>
        <h2>Comment participer</h2>
        <p>
          Les étudiants intéressés peuvent rejoindre Mydil en s'inscrivant via
          le portail étudiant de l'EPSI. Des réunions hebdomadaires sont
          organisées pour discuter des progrès des projets et planifier les
          prochaines étapes.
        </p>
      </div>
    </div>
  );
}

export default Mydil;
