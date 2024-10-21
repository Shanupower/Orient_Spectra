import Stepper from "./Stepper";
import { NextStepComponent } from "./Step1";
import "./index.css";

const CourseData = [
  {
    title: "Undergraduate",
  },
  {
    title: "Postgraduate",
  },
  {
    title: "Doctorate",
  },
  {
    title: "Foundation",
  },
];
const Step2 = ({
  handleStepCount,
  step,
  handlePrevStep,
  setCourse,
  course,
}) => {
  const handleSelectedCource = (title) => () => {
    console.log(title);
    setCourse(title);
  };
  const canProceed = course !== "";
  return (
    <div className="step1-container section">
      <div className="step1-left-card">
        <p></p>
        <h1>
          <b>Which study level</b>
          <br />
          are you interested in?
        </h1>
        <Stepper step={step} handlePrevStep={handlePrevStep} />
      </div>
      <div className="step1-right-card">
        <div className="Course-container">
          {CourseData.map((item, index) => (
            <div
              className={`Course-card ${
                item.title == course && "selectedCardcourse"
              }  `}
              key={index}
              onClick={handleSelectedCource(item.title)}
            >
              {item.title}
            </div>
          ))}
        </div>
        {course ? (
          <NextStepComponent handleStepCount={handleStepCount} canProceed={canProceed}/>
        ) : (
          <NextStepComponent />
        )}
      </div>
    </div>
  );
};

export default Step2;
