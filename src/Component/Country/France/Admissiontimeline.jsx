import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Country.css";
import { useState } from "react";

const Programdata = [
  {
    text: "	Hospitality & Tourism Management ",
  },
  {
    text: "	Data Science ",
  },
  {
    text: "	Business Analytics",
  },
  {
    text: "Finance",
  },
  {
    text: "	Supply Chain Management ",
  },
  {
    text: "	Fashion Designing ",
  },
  {
    text: "	Artificial Intelligence",
  },
  {
    text: "	Luxury Brand Management  ",
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
                  <li> Candidate must’ve cleared inter /Diploma with 60%</li>
                  <li>
                    Candidate must’ve scored 70+ english marks in intermediate
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>Candidate must’ve cleared graduation with over 55%</li>
                  <li>
                    Candidate can apply with MOI (Medium of Instruction) and no
                    test score is required
                  </li>
                  <li>
                    {" "}
                    Candidate can have multiple backlogs as there is no limit of
                    backlogs .
                  </li>
                  <li>The age limit of the applicant is up to 40 years</li>
                </ul>
              )}
            </div>

            <div className="howApllycard Estimate">
              <h3>Intakes</h3>
              <ul>
                <div className="intakesCOntainer">
                  <div className="intakesCard">
                    <div className="imageContainer">
                      <img
                        src="https://strapi.orientspectra.com/uploads/fall_1c6257491c.jpg"
                        alt=""
                      />
                    </div>
                    <div className="intackText">
                      <b>Fall</b>
                      <p> October Intake</p>
                    </div>
                  </div>
                  <div className="intakesCard">
                    <div className="imageContainer">
                      <img
                        src="https://strapi.orientspectra.com/uploads/67de7faf_5f92_402d_929e_75686635e0d9_a95c028b0f.jpg"
                        alt=""
                      />
                    </div>
                    <div className="intackText">
                      <b>Spring</b>
                      <p> January / February Intake</p>
                    </div>
                  </div>
      
                </div>
              </ul>
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
                  src="https://strapi.orientspectra.com/uploads/11_76e57375f8.webp"
                  alt="Avaincity University"
                />
              </div>
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/14_d712099774.webp"
                  alt="Paris School of Business"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/13_1_420208047d.webp"
                  alt="NEOMA Business School"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/10_ee15e54a4a.webp"
                  alt="ESSCA Business School"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/6_66f654a0645e6_da3f07d776.webp"
                  alt="INSEEC Business School"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/Logo_icn_business_school_dfbcdd18e6.png"
                  alt="ICN Business School"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/15_02e8ce5c4d.webp"
                  alt="Rennes School of Business"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/EM_Normandie_Logo_c4acc3543b.jpg"
                  alt="EM Normandie Business School"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/ESCE_53bb5633f9.png"
                  alt="ESCE"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/ECE_LOGO_20240226114033_ef71cfffe5.jpg"
                  alt="ECE"
                />
              </div>
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/9_711b8417a2.webp"
                  alt="IUM"
                />
              </div>
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/16_327f848301.webp"
                  alt="SupdePub"
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
