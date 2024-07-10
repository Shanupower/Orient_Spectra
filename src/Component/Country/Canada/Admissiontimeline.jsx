import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Country.css";
const Admissiontimeline = () => {
  return (
    <>
      <div className="section Addmission-timeline-container">
        <div className="admissionTime-container">
          <div className="admissintimeline-card">
            <h2>Admission Timeline</h2>
            <div className="coursemaster">
              <Link className="Graduates">Graduates</Link>
              <Link className="Graduates">Maste</Link>
            </div>
            <div className="howApllycard">
              <h3>How to Apply</h3>
              <p>
                UG Applications are submitted directly through the <br />{" "}
                websites of each university
              </p>
            </div>
            <div className="howApllycard Estimate">
              <h3>Cost Estimate</h3>
              <p>$24,000- $32,000 (INR 17,84,745 -23,79,660) per year</p>
            </div>
            <div className="PopularProgram_card">
              <h2>Popular Programs</h2>
              <div className="program-card">
                {[1, 2, 2, 2, 1, 2, 2, 2].map((item) => (
                  <p key={item}>
                    <FiberManualRecordIcon className="FiberManualRecordIcon" />
                    Lorem ipsum
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="Popular_Universities-container">
            <h1>Popular Universities</h1>
            <div className="Popular_Universities">
              <div className="university-card"></div>
              <div className="university-card"></div>
              <div className="university-card"></div>
              <div className="university-card"></div>
              <div className="university-card"></div>
              <div className="university-card"></div>
              <div className="university-card"></div>
              <div className="university-card"></div>
              <div className="university-card"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admissiontimeline;
