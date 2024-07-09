import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Personalized = () => {
  return (
    <div className="section Personalized-container">
      <p>Get a Personalized</p>
      <div className="Expense-card">
        <p>Monthly Expense Estimate</p>
        <div className="Expertcard">
          <p>Talk To An Expert</p>
          <ArrowForwardIcon className="rightArrowB" />
        </div>
      </div>
    </div>
  );
};

export default Personalized;
