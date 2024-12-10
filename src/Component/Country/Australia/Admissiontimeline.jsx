import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Country.css";
import { useState } from "react";
import Img1 from "../../../assets/University-Images/Summer.webp";
import Img2 from "../../../assets/University-Images/Fall.webp";
import Img3 from "../../../assets/University-Images/Spring.webp";
import img1 from "../../../assets/University-Images/Australia/1.webp";
import img2 from "../../../assets/University-Images/Australia/2.webp";
import img3 from "../../../assets/University-Images/Australia/3.webp";
import img4 from "../../../assets/University-Images/Australia/4.webp";
import img5 from "../../../assets/University-Images/Australia/5.webp";
import img6 from "../../../assets/University-Images/Australia/6.webp";
import img7 from "../../../assets/University-Images/Australia/7.webp";
import img8 from "../../../assets/University-Images/Australia/8.webp";

const Programdata = [
  {
    text: "Data Science ",
  },
  {
    text: "BBA ",
  },
  {
    text: "Information Technology",
  },
  {
    text: "Project Management ",
  },
  {
    text: "Engineering Management",
  },
  {
    text: "Professional Accounting ",
  },
];
const Admissiontimeline = () => {
  const [admissionType, setAdmissiontype] = useState("Graduates");
  const handleAdmissionType = (text) => {
    setAdmissiontype(text);
  };
  return (
    <>
      <div className="section Addmission-timeline-container">
        <div className="admissionTime-container">
          <div className="admissintimeline-card">
            <h2>Admission Details</h2>
            <div className="coursemaster">
              <Link
                onClick={() => handleAdmissionType("Graduates")}
                className={`Graduates ${
                  admissionType === "Graduates" && "activeCard"
                }`}
              >
                Graduates
              </Link>
              <Link
                onClick={() => handleAdmissionType("Master")}
                className={`Graduates ${
                  admissionType === "Master" && "activeCard"
                }`}
              >
                Master
              </Link>
            </div>

            <div className="howApllycard">
              <h3>Eligibility Criteria</h3>

              {admissionType === "Graduates" ? (
                <ul>
                  <li>Bachelors Score: 60%</li>
                  <li>IELTS Score: 5.5</li>
                  <li> Toefl Score: 80</li>
                  <li>Backlogs Limit: No</li>
                  <li>Age Limit: No</li>
                </ul>
              ) : (
                <ul>
                  <li>Bachelors Score: 60%</li>
                  <li>IELTS Score: 5.5</li>
                  <li> Toefl Score: 80</li>
                  <li>Backlogs Limit: No</li>
                  <li>Age Limit: No</li>
                </ul>
              )}
            </div>

            <div className="howApllycard Estimate">
              <h3>Intakes</h3>
              <div className="intakesCOntainer">
                <div className="intakesCard">
                  <div className="imageContainer">
                    <img
                      src={Img2}
                      alt="Fall"
                    />
                  </div>
                  <div className="intackText">
                    <b>Fall</b>
                    <p> November Intake</p>
                  </div>
                </div>
                <div className="intakesCard">
                  <div className="imageContainer">
                    <img
                      src={Img3}
                      alt="Spring"
                    />
                  </div>
                  <div className="intackText">
                    <b>Spring</b>
                    <p> February Intake</p>
                  </div>
                </div>
                <div className="intakesCard">
                  <div className="imageContainer">
                    <img
                      src={Img1}
                      alt="Summer"
                    />
                  </div>
                  <div className="intackText">
                    <b>Summer</b>
                    <p>July Intake</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="PopularProgram_card">
              <h2>Popular Programs</h2>
              <div className="program-card">
                {Programdata?.map((item, index) => (
                  <div key={index} className="prgram-item-container">
                    <p className="program-name"> {item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="Popular_Universities-container">
            <h1>Popular Universities</h1>
            <div className="Popular_Universities">
              <div className="university-card">
                <img
                  src={img5}
                  alt="the university of melbourne"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img8}
                  alt="The University of Sydney"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img4}
                  alt="University of New South Wales (UNSW Sydney)"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img7}
                  alt="University of Queensland (UQ)"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img1}
                  alt="Monash University"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img6}
                  alt="The-University-of-Western-Australia-logo"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img2}
                  alt="The University of Adelaide"
                />
              </div>
              <div className="university-card">
                <img
                  src={img3}
                  alt="RMIT University"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admissiontimeline;
