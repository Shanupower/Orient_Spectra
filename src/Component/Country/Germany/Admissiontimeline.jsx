import { Link } from "react-router-dom";
import "./Country.css";
import { useState } from "react";
import Img2 from "../../../assets/University-Images/Fall.webp";
import Img3 from "../../../assets/University-Images/Spring.webp";
import img1 from "../../../assets/University-Images/Germany/1.webp";
import img2 from "../../../assets/University-Images/Germany/2.webp";
import img3 from "../../../assets/University-Images/Germany/3.webp";
import img4 from "../../../assets/University-Images/Germany/4.webp";
import img5 from "../../../assets/University-Images/Germany/5.webp";
import img6 from "../../../assets/University-Images/Germany/6.webp";
import img7 from "../../../assets/University-Images/Germany/7.webp";
import img8 from "../../../assets/University-Images/Germany/8.webp";
import img11 from "../../../assets/University-Images/Germany/11.webp";
import img12 from "../../../assets/University-Images/Germany/12.webp";
import img13 from "../../../assets/University-Images/Germany/13.webp";
import img15 from "../../../assets/University-Images/Germany/15.webp";

const Programdata = [
  {
    text: "Data Science",
  },
  {
    text: " Business Analytics",
  },
  {
    text: "Finance",
  },
  {
    text: "Hospitality Management",
  },
  {
    text: "Engineering Management",
  },
  {
    text: "	Automotive",
  },
  {
    text: "Manufacturing",
  },
  {
    text: "Supply Chain Management",
  },
  {
    text: "Healthcare",
  },
  {
    text: "AI & ML ",
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
                <>
                  <ul>
                    <li>Candidate must’ve cleared inter /Diploma with 60%</li>
                    <li>Candidate must’ve scored a score of IELTS 6/6.5</li>
                  </ul>
                </>
              ) : (
                <>
                  <h4>Free Education</h4>
                  <ul>
                    <li>
                      Education or academic history of 16 years (180 Credits)
                    </li>
                    <li>Candidate must’ve cleared graduation with over 75%</li>
                    <li>
                      {" "}
                      Candidate must’ve scored a score of 6 or above in IELTS
                    </li>
                  </ul>
                  <h4>Paid Education</h4>
                  <ul>
                    <li>Candidate must’ve cleared graduation with over 55%</li>
                    <li>
                      Candidate must’ve scored a score of 6 and above in IELTS,
                      or 80 and above in TOEFL
                    </li>
                    <li>
                      {" "}
                      Candidate can have multiple backlogs as there is no limit
                      of backlogs
                    </li>
                    <li> The age limit of the applicant is up to 40 years</li>
                  </ul>
                </>
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
                     loading="lazy"
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
                      loading="lazy"
                    />
                  </div>
                  <div className="intackText">
                    <b>Spring</b>
                    <p> February / April Intake</p>
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
                  src={img1}
                  alt="EU Business School"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img5}
                  alt="GISMA University of Applied Sciences "
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img2}
                  alt="University of Europe for Applied Sciences "
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img3}
                  alt="IU University of Applied Sciences "
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img13}
                  alt="New European College"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img8}
                  alt="Marcomedia University"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img4}
                  alt="SRH University"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img7}
                  alt="Bersin School of Business & Innovation"
                  loading="lazy"
                />
              </div>
              <div className="university-card">
                <img
                  src={img11}
                  alt="Fresenius University of Applied Sciences "
                  loading="lazy"
                />
              </div>
              <div className="university-card">
                <img
                  src={img6}
                  alt="Steinbeis University"
                  loading="lazy"
                />
              </div>

              <div className="university-card">
                <img
                  src={img15}
                  alt="DIU(Dresden International University)"
                  loading="lazy"
                />
              </div>

              <div className="university-card">
                <img
                  src={img12}
                  alt="Andren University"
                  loading="lazy"
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
