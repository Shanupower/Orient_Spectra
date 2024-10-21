import React from "react";
import Button from "../Common/Button";
import "./about.css";

const Consectetuer = () => {
  return (
    <div className="consectetuer-container section">
      <h1>
        <strong> Founded in 2005</strong>, Orient Spectra excels in overseas
        education, partnering with 500+ universities worldwide and with 15000+
        Successful admissions
      </h1>
      <Button
        text="Start Your Journey"
        arrow={true}
        className="ConsectetuerButton"
        link="/start-your-journey"
      />
    </div>
  );
};

export default Consectetuer;
