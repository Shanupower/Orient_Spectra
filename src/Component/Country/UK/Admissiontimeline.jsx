import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Country.css";
import { useState } from "react";
import Img2 from "../../../assets/University Images/UK/2.png";
import Img3 from "../../../assets/University Images/UK/3.jpg";
import Img4 from "../../../assets/University Images/UK/4.png";
import Img6 from "../../../assets/University Images/UK/6.png";
import Img8 from "../../../assets/University Images/UK/8.png";
import Img9 from "../../../assets/University Images/UK/9.png";
import Img10 from "../../../assets/University Images/UK/10.png";
import Img13 from "../../../assets/University Images/UK/13.png";
import Img16 from "../../../assets/University Images/UK/16.jpg";
import Img18 from "../../../assets/University Images/UK/18.png";
import Img19 from "../../../assets/University Images/UK/19.jpg";
import Img22 from "../../../assets/University Images/UK/22.jpg";

const Programdata = [
  {
    text: "MBA",
  },
  {
    text: "	Data science",
  },
  {
    text: "	Cyber security",
  },
  {
    text: "Computer science",
  },
  {
    text: "	AI and Robotics",
  },
  {
    text: "	Aerospace engineering",
  },
 
  {
    text: "	Construction project management with BIM",
  },
  {
    text: "Telecommunication ",
  },
  {
    text: "		Electrical and electronics engineering",
  },
  {
    text: "Biomedical science",
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
                      src="https://strapi.orientspectra.com/uploads/fall_1c6257491c.jpg"
                      alt=""
                    />
                  </div>
                  <div className="intackText">
                    <b>Fall</b>
                    <p> September of every year</p>
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
                    <p> January of every year</p>
                  </div>
                </div>
                <div className="intakesCard">
                  <div className="imageContainer">
                    <img
                      src="https://strapi.orientspectra.com/uploads/Summer_6b20b10000.jpg"
                      alt=""
                    />
                  </div>
                  <div className="intackText">
                    <b>Summer</b>
                    <p> May of every year</p>
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
                  src={Img3}
                  alt="Edinburgh Napier University"
                />
              </div>
              <div className="university-card">
                <img
                  src={Img6}
                  alt="Heroit Watt Univrsity"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img8}
                  alt="Malvern House London"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img10}
                  alt="Northumbria University"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img16}
                  alt="University of Wolverhampton"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img18}
                  alt="University of Hertfordshire"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img19}
                  alt="University of East London"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img4}
                  alt="Wrexham University"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img9}
                  alt="Middlesex University"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img13}
                  alt="SaintPeter's University"
                />
              </div>
              <div className="university-card">
                <img
                  src={Img22}
                  alt="York st John University"
                />
              </div>
              <div className="university-card">
                <img
                  src={Img2}
                  alt="Bradley University"
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
