import Stepper from "./Stepper";
import { NextStepComponent } from "./Step1";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./index.css";
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Step4 = ({
  handleStepCount,
  step,
  handlePrevStep,
  Month,
  setMonth,
  year,
}) => {
  const handleMonth = (month) => () => {
    setMonth(month);
  };
  const canProceed = Month !== "";
  return (
    <div className="step1-container section">
      <div className="step1-left-card">
        <p></p>
        <h1>
          <b> Which intake</b> <br />
          month?
        </h1>
        <Stepper step={step} handlePrevStep={handlePrevStep} />
      </div>
      <div className="step1-right-card">
        <p>Pick Your Month</p>

        <div className="yearcard-card">
          {MONTH_NAMES?.map((item, index) => (
            <div
              className={`month-card ${Month === item && "selected_year_card"}`}
              key={index}
              onClick={handleMonth(item)}
            >
              <CalendarMonthIcon
                className={`"CalendarMonthIcon" ${
                  Month === item && "selected_year_card"
                }`}
              />
              <p> {item}</p>
              <p> {year !== "not sure" && year}</p>
            </div>
          ))}
          <p className={`notSureCard  `}>Not Sure</p>
        </div>
        {Month ? (
          <NextStepComponent handleStepCount={handleStepCount} canProceed={canProceed}/>
        ) : (
          <NextStepComponent />
        )}
      </div>
    </div>
  );
};

export default Step4;
