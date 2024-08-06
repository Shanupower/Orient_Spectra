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
}) => {
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
            type="email"
            name="email"
            value={email}
            placeholder="Please Enter Your Valid Email Id"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>
            By proceeding, you agree to the Terms & Conditions and Privacy
            Policy
          </p>
        </div>

        {email ? (
          <div className="Next-container">
            Sign Up
            <AddCircleOutlineOutlinedIcon
              onClick={handleSubmitData}
              style={{ fontSize: "50px" }}
            />
          </div>
        ) : (
          <div className="Next-container">
            Sign Up
            <AddCircleOutlineOutlinedIcon style={{ fontSize: "50px" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Step6;
