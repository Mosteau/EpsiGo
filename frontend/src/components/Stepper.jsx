import React from "react";
import PropTypes from "prop-types";

function Stepper({ currentStep, numberOfSteps }) {
  return (
    <div className="stepper-container">
      {Array.from({ length: numberOfSteps }).map((_, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={`step ${index === currentStep ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

Stepper.propTypes = {
  currentStep: PropTypes.number.isRequired,
  numberOfSteps: PropTypes.number.isRequired,
};

export default Stepper;
