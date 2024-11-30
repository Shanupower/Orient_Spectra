import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Country.css";
import { useState } from "react";
import Img2 from "../../../assets/University-Images/Fall.webp";
import Img3 from "../../../assets/University-Images/Spring.webp";
import img1 from "../../../assets/University-Images/France/1.webp";
import img2 from "../../../assets/University-Images/France/2.webp";
import img3 from "../../../assets/University-Images/France/3.webp";
import img4 from "../../../assets/University-Images/France/4.webp";
import img5 from "../../../assets/University-Images/France/5.webp";
import img6 from "../../../assets/University-Images/France/6.webp";
import img7 from "../../../assets/University-Images/France/7.webp";
import img8 from "../../../assets/University-Images/France/8.webp";
import img9 from "../../../assets/University-Images/France/9.webp";
import img10 from "../../../assets/University-Images/France/10.webp";
import img11 from "../../../assets/University-Images/France/11.webp";
import img12 from "../../../assets/University-Images/France/12.webp";
import img13 from "../../../assets/University-Images/France/13.webp";
import img14 from "../../../assets/University-Images/France/14.webp";
import img15 from "../../../assets/University-Images/France/15.webp";
import img16 from "../../../assets/University-Images/France/16.webp";

const Programdata = [
  {
    text: "	Hospitality ",
  },
  {
    text: "	Tourism Management ",
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
                        src={Img2}
                        alt="Fall"
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
                        src={Img3}
                        alt="Spring"
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
                  src={img11}
                  alt="Avaincity University"
                />
              </div>
              <div className="university-card">
                <img
                  src={img14}
                  alt="Paris School of Business"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img13}
                  alt="NEOMA Business School"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img10}
                  alt="ESSCA Business School"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img6}
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
                  src={img15}
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
                  src={img9}
                  alt="IUM"
                />
              </div>
              <div className="university-card">
                <img
                  src={img16}
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
