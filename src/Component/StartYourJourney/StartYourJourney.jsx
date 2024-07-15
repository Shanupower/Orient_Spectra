import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

const StartYourJourney = () => {
  const [country, setCountry] = useState();
  const [course, setCourse] = useState();
  const [year, setYear] = useState();
  const [Month, setMonth] = useState(); // Change month setter to setMonth for consistency
  const [Subject, setSubject] = useState([]);
  const [email, setEmail] = useState();

  const [step, setStep] = useState(1);

  const handleStepCount = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = (step) => {
    setStep(step);
  };

  return (
    <>
      {step === 1 && (
        <Step1
          step={step}
          handleStepCount={handleStepCount}
          setCountry={setCountry}
          country={country}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 2 && (
        <Step2
          step={step}
          course={course}
          setCourse={setCourse}
          handleStepCount={handleStepCount}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 3 && (
        <Step3
          step={step}
          setYear={setYear}
          year={year}
          handleStepCount={handleStepCount}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 4 && (
        <Step4
          step={step}
          handleStepCount={handleStepCount}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 5 && (
        <Step5
          step={step}
          Subject={Subject}
          setSubject={setSubject}
          handleStepCount={handleStepCount}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 6 && (
        <Step6
          step={step}
          handleStepCount={handleStepCount}
          handlePrevStep={handlePrevStep}
        />
      )}
    </>
  );
};

export default StartYourJourney;
