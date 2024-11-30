import { Link } from "react-router-dom";
import "./Country.css";
import { useState } from "react";
import Img1 from "../../../assets/University-Images/Summer.webp";
import Img2 from "../../../assets/University-Images/Fall.webp";
import Img3 from "../../../assets/University-Images/Spring.webp";
import img2 from "../../../assets/University-Images/UK/2.webp";
import img3 from "../../../assets/University-Images/UK/3.webp";
import img4 from "../../../assets/University-Images/UK/4.webp";
import img6 from "../../../assets/University-Images/UK/6.webp";
import img8 from "../../../assets/University-Images/UK/8.webp";
import img9 from "../../../assets/University-Images/UK/9.webp";
import img10 from "../../../assets/University-Images/UK/10.webp";
import img13 from "../../../assets/University-Images/UK/13.webp";
import img16 from "../../../assets/University-Images/UK/16.webp";
import img18 from "../../../assets/University-Images/UK/18.webp";
import img19 from "../../../assets/University-Images/UK/19.webp";
import img22 from "../../../assets/University-Images/UK/22.webp";

const Programdata = [
  {
    text: "MBA",
  },
  {
    text: "	Data Science",
  },
  {
    text: "	Cyber Security",
  },
  {
    text: "Computer Science",
  },
  {
    text: "	AI and Robotics",
  },
  {
    text: "	Aerospace Engineering",
  },
 
  {
    text: "	Construction",
  },
  {
    text: "Telecommunication ",
  },
  {
    text: "	Electrical and Electronics Engineering",
  },
  {
    text: "Biomedical Science",
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
                  <li>
                    Candidate must’ve cleared graduation with 60% of above marks
                  </li>
                  <li>Candidate must’ve scored above 70 Marks in English.</li>
                </ul>
              ) : (
                <ul>
                  <li>
                    Candidate must’ve cleared graduation with 60% of above marks
                  </li>
                  <li>
                    Candidate must have attended any of the below English
                    proficiency tests:
                  </li>
                  <div style={{ paddingLeft: "1.4rem" }}>
                    <li> IELTS: 6 or 6.5</li>
                    <li>TOEFL: 89</li>
                  </div>
                  <li>
                    Candidate can have multiple backlogs as there is no limit of
                    backlogs
                  </li>
                  <li> There is no age limit for the applicant</li>
                </ul>
              )}
            </div>

            <div className="howApllycard Estimate">
              <h3>Intakes</h3>
              <div className="intakesCOntainer">
                <div className="intakesCard">
                  <div className="imageContainer">
                    <img
                      src={Img3}
                      alt="Fall"
                      loading="lazy"
                    />
                  </div>
                  <div className="intackText">
                    <b>Fall</b>
                    <p> September Intake</p>
                  </div>
                </div>
                <div className="intakesCard">
                  <div className="imageContainer">
                    <img
                      src={Img2}
                      alt="Spring"
                      loading="lazy"
                    />
                  </div>
                  <div className="intackText">
                    <b>Spring</b>
                    <p> January Intake</p>
                  </div>
                </div>
                <div className="intakesCard">
                  <div className="imageContainer">
                    <img
                      src={Img1}
                      alt="Summer"
                      loading="lazy"
                    />
                  </div>
                  <div className="intackText">
                    <b>Summer</b>
                    <p> May Intake</p>
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
                  src={img3}
                  alt="Edinburgh Napier University"
                  loading="lazy"
                />
              </div>
              <div className="university-card">
                <img
                  src={img6}
                  alt="Heroit Watt Univrsity"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img8}
                  alt="Malvern House London"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img10}
                  alt="Northumbria University"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img16}
                  alt="University of Wolverhampton"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img18}
                  alt="University of Hertfordshire"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img19}
                  alt="University of East London"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img4}
                  alt="Wrexham University"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img9}
                  alt="Middlesex University"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={img13}
                  alt="SaintPeter's University"
                />
              </div>
              <div className="university-card">
                <img
                  src={img22}
                  alt="York st John University"
                  loading="lazy"
                />
              </div>
              <div className="university-card">
                <img
                  src={img2}
                  alt="Bradley University"
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
