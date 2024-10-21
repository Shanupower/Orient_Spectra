import React, { useMemo, useState } from "react";
import Stepper from "./Stepper";
import { NextStepComponent } from "./Step1";
import CloseIcon from "@mui/icons-material/Close";
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
  {
    id: 8,
    title: "Mechanical Engineering",
  },
  {
    id: 9,
    title: "Machine Learning",
  },
  {
    id: 10,
    title: "Journalism",
  },
  {
    id: 11,
    title: "Fashion Design",
  },
  {
    id: 16,
    title: "Hospitality Management",
  },
  {
    id: 17,
    title: "Cloud Computing",
  },
  {
    id: 12,
    title: "Mechanical Engineering",
  },
  {
    id: 13,
    title: "Machine Learning",
  },
  {
    id: 14,
    title: "Journalism",
  },
  {
    id: 15,
    title: "Fashion Design",
  },
  {
    id: 26,
    title: "Hospitality Management",
  },
  {
    id: 27,
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
  const [userInput, setUserInput] = useState("");
  
  const filteredSubject = useMemo(() => {
    if (!userInput) {
      return null;
    }
    const lowercasedSearch = userInput.toLowerCase();
    return CourseData.filter((subject) =>
      subject.title.toLowerCase().includes(lowercasedSearch)
    );
  }, [CourseData, userInput]);





  const handleSubject = (item) => () => {
    if (!Subject.some((sub) => sub.id === item.id)) {
      setSubject((prevSubjects) => [...prevSubjects, item]);
      setUserInput("");
    } else {
      setUserInput("");
    }
  };

  const hanldeUserInput = (e) => {
    setUserInput(e.target.value);
  };
  const haandlRemoveSubject = (id) => () => {
    setSubject((prevSubjects) =>
      prevSubjects.filter((subject) => subject.id !== id)
    );
  };
  const canProceed = Subject !== "";
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
        <div className="step5_inputcard">
          <input
            type="text"
            name="subject"
            value={userInput}
            placeholder="Search and Select Your Subject"
            onChange={hanldeUserInput}
          />
          {userInput && (
            <div className="dropbox-container">
              {filteredSubject?.map((item, index) => (
                <div
                  key={index}
                  className="searchedItem-container"
                  onClick={handleSubject(item)}
                >
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="Course-container">
          {Subject.map((item, index) => (
            <div className={`subject-card`} key={index}>
              {item.title}{" "}
              <CloseIcon
                className="CloseIconCard"
                onClick={haandlRemoveSubject(item.id)}
              />
            </div>
          ))}
        </div>
        {Subject.length <= 1 ? <p>Please Select minimum 1 subject</p> : ""}

        {Subject.length >= 1 ? (
          <NextStepComponent handleStepCount={handleStepCount} canProceed={canProceed}/>
        ) : (
          <NextStepComponent />
        )}
      </div>
    </div>
  );
};

export default Step5;
