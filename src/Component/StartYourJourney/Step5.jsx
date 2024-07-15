import React from "react";
import Stepper from "./Stepper";
import { NextStepComponent } from "./Step1";
import "./index.css";

const CourseData = [
  {
    id: 1,
    title: "Data Sciences & Big Data",
  },
  {
    id: 2,
    title: "Mechanical Engineering",
  },
  {
    id: 3,
    title: "Machine Learning",
  },
  {
    id: 4,
    title: "Journalism",
  },
  {
    id: 5,
    title: "Fashion Design",
  },
  {
    id: 6,
    title: "Hospitality Management",
  },
  {
    id: 7,
    title: "Cloud Computing",
  },
];

const Step5 = ({
  handleStepCount,
  step,
  handlePrevStep,
  setSubject,
  Subject,
}) => {
    const handleSelectedSubject = (item) => () => {
      if (Subject.some((subject) => subject.title === item.title)) {
        setSubject(Subject.filter((subject) => subject.title !== item.title));
      } else if (Subject.length < 5) {
        setSubject([...Subject, item]);
      }
    };

  return (
    <div className="step1-container section">
      <div className="step1-left-card">
        <p></p>
        <h1>
          <b> What do you</b>
          <br />
          want to study? <br />
          <span>Pick up to 5 subjects</span>
        </h1>
        <Stepper step={step} handlePrevStep={handlePrevStep} />
      </div>
      <div className="step1-right-card">
        <div className="Course-container">
          {CourseData.map((item, index) => (
            <div
              className={`subject-card ${
                Subject.some((subject) => subject.title === item.title)
                  ? "selectedCardcourse"
                  : ""
              }`}
              key={index}
              onClick={handleSelectedSubject(item)}
            >
              {item.title}
            </div>
          ))}
        </div>
        <NextStepComponent handleStepCount={handleStepCount} />
      </div>
    </div>
  );
};

export default Step5;
