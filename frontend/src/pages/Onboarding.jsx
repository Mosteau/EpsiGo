import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "../components/Stepper";

const steps = [
  {
    title: "Bienvenue !",
    text: "Nous sommes ravis de vous accueillir sur notre plateforme EPSI Go. 😊 Ici, vous trouverez tout ce dont vous avez besoin pour intégrer efficacement divers outils. Profitez de nos ressources et de notre Guide pour tirer le meilleur parti des outils à votre disposition. 😉",
  },
  {
    title: "Productivité",
    text: "Que vous cherchiez à améliorer votre productivité, à simplifier vos tâches ou à découvrir de nouvelles fonctionnalités. Notre plateforme est conçue pour vous accompagner à chaque étape.",
  },
  {
    title: "Boite à outils",
    text: "Ici vous trouverez des raccourcis, des informations utiles, à vous de les consulter. C’est parti !",
  },
];

function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/home");
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = steps[currentStep];

  return (
    <div className="onboarding-container">
      <div className="onboarding-content">
        <h1>{step.title}</h1>
        <p>{step.text}</p>
        <div className="onboarding-buttons">
          <button type="button" onClick={prevStep} disabled={currentStep === 0}>
            &#8592;
          </button>
          <button type="button" onClick={nextStep}>
            &#8594;
          </button>
        </div>
        <Stepper currentStep={currentStep} numberOfSteps={steps.length} />
      </div>
    </div>
  );
}

export default Onboarding;
