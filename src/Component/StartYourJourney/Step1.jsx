import React from "react";
import Us from "../../assets/Country/Flag/Group 25.png";
import Canada from "../../assets/Country/Flag/Group 23.png";
import Australia from "../../assets/Country/Flag/Group 28.png";
import Uk from "../../assets/Country/Flag/Group 30.png";
import Dubai from "../../assets/Country/Flag/Group 39.png";
import Sweden from "../../assets/Country/Flag/Group 40.png";
import Poland from "../../assets/Country/Flag/Group 41.png";
import Switzerland from "../../assets/Country/Flag/Group 42.png";
import Malta from "../../assets/Country/Flag/Malta.png";
import Singapore from "../../assets/Country/Flag/Singapore.png";
import Ireland from "../../assets/Country/Flag/Ireland.png";
import Germany from "../../assets/Country/Flag/Germany.png";
import France from "../../assets/Country/Flag/France.png";

import Stepper from "./Stepper";
import CircleArrow from "../Common/CircleArrow";

const FlagData = [
  {
    img: Us,
    name: "United States",
  },
  {
    img: Canada,
    name: "Canada",
  },
  {
    img: Australia,
    name: "Australia",
  },
  {
    img: Uk,
    name: "United Kingdom",
  },
  {
    img: Dubai,
    name: "Dubai",
  },
  {
    img: Sweden,
    name: "Sweden",
  },
  {
    img: Poland,
    name: "Poland",
  },
  {
    img: Switzerland,
    name: "Switzerland",
  },
  {
    img: Malta,
    name: "Malta",
  },
  {
    img: Ireland,
    name: "Ireland",
  },
  {
    img: Germany,
    name: "Germany",
  },
  {
    img: France,
    name: "France",
  },
  {
    img: Singapore,
    name: "Singapore",
  },
];

import "./index.css";

export const NextStepComponent = ({ handleStepCount, text, icon }) => {
  return (
    <div className="Next-container">
      {text ? text : "Next"}{" "}
      {icon ? icon : <CircleArrow onClick={handleStepCount} />}
    </div>
  );
};
const Step1 = ({
  handleStepCount,
  step,
  setCountry,
  country,
  handlePrevStep,
}) => {
  const onClickCoutry = (name) => () => {
    if (setCountry) setCountry(name);
  };

  return (
    <div className="step1-container section">
      <div className="step1-left-card">
        <p></p>
        <h1>
          <b> Where do you</b> <br /> want to study?
        </h1>
        <Stepper step={step} handlePrevStep={handlePrevStep} />
      </div>
      <div className="step1-right-card">
        <p>Pick Your study destination</p>

        <div className="destination-card">
          {FlagData?.map((item, index) => (
            <div
              className={`destination-item ${
                country === item.name && "SelectedCountry"
              } `}
              key={index}
              onClick={onClickCoutry(item.name)}
            >
              <div>
                <img src={item.img} alt={item.name} />
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        {country ? (
          <NextStepComponent handleStepCount={handleStepCount} />
        ) : (
          <NextStepComponent />
        )}
      </div>
    </div>
  );
};

export default Step1;
