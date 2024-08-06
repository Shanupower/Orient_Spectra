import React from "react";
import "./index.css"; // Import the custom CSS file

const Stepper = ({ step, handlePrevStep }) => {
  const handleOnclickStep = (stepNum) => () => {
    if (step > stepNum) {
      handlePrevStep(stepNum);
    }
  };
  return (
    <div className="stepper">
      <div
        className={`step ${step >= 1 && "ActiveStep"}`}
        onClick={handleOnclickStep(1)}
      ></div>
      <div className={`line ${step >= 2 && "ActiveStep"}`}></div>
      <div
        className={`step ${step >= 2 && "ActiveStep"}`}
        onClick={handleOnclickStep(2)}
      ></div>
      <div className={`line ${step >= 3 && "ActiveStep"}`}></div>
      <div
        className={`step ${step >= 3 && "ActiveStep"}`}
        onClick={handleOnclickStep(3)}
      ></div>
      <div className={`line ${step >= 4 && "ActiveStep"}`}></div>
      <div
        className={`step ${step >= 4 && "ActiveStep"}`}
        onClick={handleOnclickStep(4)}
      ></div>
      <div className={`line ${step >= 5 && "ActiveStep"}`}></div>
      <div
        className={`step ${step >= 5 && "ActiveStep"}`}
        onClick={handleOnclickStep(5)}
      ></div>
      <div className={`line ${step >= 6 && "ActiveStep"}`}></div>
      <div
        className={`step ${step >= 6 && "ActiveStep"}`}
        // onClick={handleOnclickStep(6)}
      ></div>
    </div>
  );
};

export default Stepper;
