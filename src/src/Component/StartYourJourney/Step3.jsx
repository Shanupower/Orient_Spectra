import Stepper from "./Stepper";
import { NextStepComponent } from "./Step1";
import "./index.css";

const Step3 = ({ handleStepCount, step, handlePrevStep, year, setYear }) => {
  const handleYearData = (year) => () => {
    setYear(year);
  };
  const currentYear = new Date().getFullYear();
  console.log(year);
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
        <p>Pick Your Year</p>

        <div className="yearcard-card">
          {[...Array(4)].map((item, index) => (
            <div
              className={`year-card ${
                year === currentYear + index && "selected_year_card"
              }`}
              key={index}
              onClick={handleYearData(currentYear + index)}
            >
              <p>{currentYear + index}</p>
            </div>
          ))}
          <p
            className={`notSureCard  ${
              year === "not sure" && "selected_year_card"
            }`}
            onClick={handleYearData("not sure")}
          >
            Not Sure
          </p>
        </div>
        {year ? (
          <NextStepComponent handleStepCount={handleStepCount} />
        ) : (
          <NextStepComponent />
        )}
    
      </div>
    </div>
  );
};

export default Step3;
