import Stepper from "./Stepper";
import { NextStepComponent } from "./Step1";
import "./index.css";

const Step6 = ({ handleStepCount, step,handlePrevStep }) => {
  return (
    <div className="step1-container section">
      <div className="step1-left-card">
        <p></p>
        <h1>
          <b> Welcome to</b>
          <br />
          Orient Spectra
          <br />
          <span>sign up to start exploring</span>
        </h1>
        <Stepper step={step}  handlePrevStep={handlePrevStep} />
      </div>
      <div className="step1-right-card">
        <div className="destination-card">
          <p>Pick Your Year</p>
          {[...Array(5)].map((item) => (
            <div className="destination-item"></div>
          ))}
        </div>
        <NextStepComponent handleStepCount={handleStepCount} />
      </div>
    </div>
  );
};

export default Step6;
