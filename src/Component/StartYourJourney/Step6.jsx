import Stepper from "./Stepper";
import { NextStepComponent } from "./Step1";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import "./index.css";

const Step6 = ({
  handleStepCount,
  step,
  handlePrevStep,
  email,
  setEmail,
  handleSubmitData,
  name,
  setName,
  number,
  setNumber,
  source,
  message,
}) => {
  const canProceed = name !== "" && email !== "" && number !== "";
  return (
    <div className="step1-container section">
      <div className="step1-left-card">
        <p></p>
        <h1>
          <b> Welcome to</b>
          <br />
          Orient Spectra
          <br />
          <span>sign up to start exploring</span>
        </h1>
        <Stepper step={step} handlePrevStep={handlePrevStep} />
      </div>
      <div className="step1-right-card">
        <div className="Email-card">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Please Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            style={{ marginBlock: "1rem" }}
            type="email"
            name="email"
            value={email}
            placeholder="Please Enter Your Valid Email Id"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            name="number"
            value={number}
            placeholder="Please Enter Your Mobile Number"
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type="hidden"
            name="Source"
            value={source}
          />
          <p>
            By proceeding, you agree to the Terms & Conditions and Privacy
            Policy
          </p>
          {message && <p style={{ color: "red" }}>{message} Please Try Again</p> }
          
        </div>

        <div
          className={`Next-container ${!canProceed ? "disabled" : ""}`}
          onClick={canProceed ? handleSubmitData : null}
        >
          {canProceed ? (
            <>
              Sign Up
              <AddCircleOutlineOutlinedIcon style={{ fontSize: "50px" }} />
            </>
          ) : (
            <>
              Schedule Your Call
              <AddCircleOutlineOutlinedIcon style={{ fontSize: "50px" }} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step6;
