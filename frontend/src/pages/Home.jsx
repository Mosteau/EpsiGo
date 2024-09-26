import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import AOS from "aos";
// eslint-disable-next-line import/no-extraneous-dependencies
import "aos/dist/aos.css";
import cloudLogo from "../assets/cloudy.png";
import cv from "../assets/cv.png";
import contactEmail from "../assets/contact-mail.png";
import information from "../assets/information.png";
import robot from "../assets/robot.png";
import chat from "../assets/chat.png";
import Contacts from "../components/Contacts";
import UtilsInfos from "../components/UtilsInfos";
import Cv from "../components/Cv";
import Meteo from "../components/Meteo";
import Mydil from "../components/Mydil";
// eslint-disable-next-line import/no-named-as-default
import UserContext from "../context/UserContext";

function Home() {
  const navigate = useNavigate();
  const [showScroll, setShowScroll] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    AOS.init({
      duration: 200,
    });

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  const handleForumClick = () => {
    navigate("/Forum");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <h1 className="titleHome" data-aos="zoom-in">
        Bienvenue <p className="lastname-title">{user?.lastname}</p> sur le
        campus de l'EPSI
      </h1>
      <div className="buttons-home">
        <div className="button-container" data-aos="zoom-in">
          <button type="button" onClick={() => scrollToSection("utilsInfos")}>
            Infos Utiles
            <img src={information} alt="Infos Utiles" className="button-logo" />
          </button>
        </div>
        <div className="button-container" data-aos="zoom-in">
          <button type="button" onClick={handleForumClick}>
            Forum
            <img src={chat} alt="Chat" className="button-logo" />
          </button>
        </div>
        <div className="button-container" data-aos="zoom-in">
          <button type="button" onClick={() => scrollToSection("cv")}>
            CV
            <img src={cv} alt="Cv" className="button-logo" />
          </button>
        </div>
        <div className="button-container" data-aos="zoom-in">
          <button type="button" onClick={() => scrollToSection("meteo")}>
            <img src={cloudLogo} alt="Météo" className="button-logo" />
            Météo
          </button>
        </div>
        <div className="button-container" data-aos="zoom-in">
          <button type="button" onClick={() => scrollToSection("mydil")}>
            Mydil
            <img src={robot} alt="Mydil" className="button-logo" />
          </button>
        </div>
        <div className="button-container" data-aos="zoom-in">
          <button type="button" onClick={() => scrollToSection("contacts")}>
            Contacts
            <img src={contactEmail} alt="Contacts" className="button-logo" />
          </button>
        </div>
      </div>
      <hr className="separator" />
      <div id="contacts" data-aos="fade-up">
        <Contacts />
      </div>
      <hr className="separator" />
      <div id="utilsInfos" data-aos="fade-up">
        <UtilsInfos />
      </div>
      <hr className="separator" />
      <div id="cv" data-aos="fade-up">
        <Cv />
      </div>
      <hr className="separator" />
      <div id="mydil" data-aos="fade-up">
        <Mydil />
      </div>
      <hr className="separator" />
      <div id="meteo" data-aos="fade-up">
        <Meteo />
      </div>
      <button
        type="button"
        className="scrollTop"
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      >
        &#8679;
      </button>
    </div>
  );
}

export default Home;
