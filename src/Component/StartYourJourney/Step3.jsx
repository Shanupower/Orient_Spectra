import Stepper from "./Stepper";
import { NextStepComponent } from "./Step1";
import "./index.css";

const Step3 = ({ handleStepCount, step, handlePrevStep,year}) => {
  
  return (
    <div className="step1-container section">
      <div className="step1-left-card">
        <p></p>
        <h1>
          <b> Which year do you </b>
          <br />
          want to study abroad?
        </h1>
        <Stepper step={step} handlePrevStep={handlePrevStep} />
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

export default Step3;
