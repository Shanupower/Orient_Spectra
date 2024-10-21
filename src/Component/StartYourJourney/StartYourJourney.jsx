import React, { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import axios from "axios";
import ThankYouDialog from "./Thankyou";
import { useNavigate } from "react-router-dom";

const StartYourJourney = () => {
  const [country, setCountry] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [Month, setMonth] = useState("");
  const [Subject, setSubject] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [source, setSource] = useState("Orient Spectra Website");
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();


  const [step, setStep] = useState(1);

  const handleStepCount = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = (step) => {
    setStep(step);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmitData = async () => {
    const courseName = Subject.map(sub => sub.title);
    const payload = [
      { "Attribute": "mx_Where_do_you_want_to_study", "Value": country },
      { "Attribute": "mx_Interested_Study_Level", "Value": course },
      { "Attribute": "mx_Interested_Intake_Year", "Value": year },
      { "Attribute": "mx_Interested_Intake_Month", "Value": Month },
      { "Attribute": "mx_Interested_Courses", "Value": courseName.join(", ") }, // Assuming Subject is an array
      { "Attribute": "FirstName", "Value": name },
      { "Attribute": "EmailAddress", "Value": email },
      { "Attribute": "Phone", "Value": number },
      { "Attribute": "Source", "Value": source }
    ];
    const api = 'https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?accessKey=u$r2d7bbe00a63507ce0a224d0c7646110c&secretKey=cb866dd034696b390e69d5ef8f4f66f9060a846c';
    try {
      const response = await axios.post(api, payload, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.data.Status === "Success") {
        // Reset form fields
        setCountry("");
        setCourse("");
        setYear("");
        setMonth("");
        setSubject([]);
        setEmail("");
        setName("");
        setNumber("");

        setOpen(true);

      }
    } catch (error) {
      setErrorMessage(error.response.data.ExceptionMessage);
    }
  };

  const handleClose = ()=>{
    setOpen(false);
    navigate("/");
  }
  const canProceed = () => { // Below feilds must be selected only the next button is enabled
    switch (step) {
      case 1:
        return country !== ""; 
      case 2:
        return course !== "";
      case 3:
        return year !== "";
      case 4:
        return Month !== "";
      case 5:
        return Subject.length > 0;
      case 6:
        return email !== "" && name !== "" && number !== "";
      default:
        return false;
    }
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
          canProceed={canProceed()}
        />
      )}
      {step === 2 && (
        <Step2
          step={step}
          course={course}
          setCourse={setCourse}
          handleStepCount={handleStepCount}
          handlePrevStep={handlePrevStep}
          canProceed={canProceed()}

        />
      )}
      {step === 3 && (
        <Step3
          step={step}
          setYear={setYear}
          year={year}
          handleStepCount={handleStepCount}
          handlePrevStep={handlePrevStep}
          canProceed={canProceed()}
        />
      )}
      {step === 4 && (
        <Step4
          step={step}
          handleStepCount={handleStepCount}
          handlePrevStep={handlePrevStep}
          Month={Month}
          setMonth={setMonth}
          year={year}
          canProceed={canProceed()}
        />
      )}
      {step === 5 && (
        <Step5
          step={step}
          Subject={Subject}
          setSubject={setSubject}
          handleStepCount={handleStepCount}
          handlePrevStep={handlePrevStep}
          canProceed={canProceed()}
        />
      )}
      {step === 6 && (
        <Step6
          step={step}
          handleStepCount={handleStepCount}
          handlePrevStep={handlePrevStep}
          email={email}
          setEmail={setEmail}
          name={name}
          setName={setName}
          number={number}
          setNumber={setNumber}
          source={source}
          setSource={setSource}
          handleSubmitData={handleSubmitData}
          canProceed={canProceed()}
          message={errorMessage}
        />
      )}

      <ThankYouDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default StartYourJourney;
