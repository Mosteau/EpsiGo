import React from "react";
import { useNavigate } from "react-router-dom";

function Forum() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/home");
  };

  return (
    <div className="forum-container">
      <button type="button" onClick={handleBackClick} className="button-back">
        Retour à la page principale
      </button>
      <div className="forum-category">
        <h2>Présentation et Bienvenue</h2>
        <div className="forum-topic">
          <h3>Présentation des nouveaux étudiants</h3>
          <p>Dernier message par Alice</p>
        </div>
        <div className="forum-topic">
          <h3>Bienvenue à l'EPSI</h3>
          <p>Dernier message par Bob</p>
        </div>
      </div>
      <div className="forum-category">
        <h2>Annonces et Événements</h2>
        <div className="forum-topic">
          <h3>Prochain événement de bienvenue</h3>
          <p>Dernier message par Clara</p>
        </div>
        <div className="forum-topic">
          <h3>Annonces importantes</h3>
          <p>Dernier message par David</p>
        </div>
      </div>
      <div className="forum-category">
        <h2>Cours et Matériel</h2>
        <div className="forum-topic">
          <h3>Partage de notes de cours</h3>
          <p>Dernier message par Emma</p>
        </div>
        <div className="forum-topic">
          <h3>Matériel recommandé</h3>
          <p>Dernier message par Frank</p>
        </div>
      </div>
      <div className="forum-category">
        <h2>Vie Étudiante</h2>
        <div className="forum-topic">
          <h3>Activités et clubs</h3>
          <p>Dernier message par George</p>
        </div>
        <div className="forum-topic">
          <h3>Événements sociaux</h3>
          <p>Dernier message par Hannah</p>
        </div>
      </div>
      <div className="forum-category">
        <h2>Logement et Transport</h2>
        <div className="forum-topic">
          <h3>Recherche de colocation</h3>
          <p>Dernier message par Ian</p>
        </div>
      </div>
    </div>
  );
}

export default Forum;
