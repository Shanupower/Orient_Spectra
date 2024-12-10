import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Country.css";
import { useState } from "react";
import Img1 from "../../../assets/University-Images/Summer.webp";
import Img2 from "../../../assets/University-Images/Fall.webp";
import Img3 from "../../../assets/University-Images/Spring.webp";
import Img4 from "../../../assets/University-Images/USA/31.webp";
import Img5 from "../../../assets/University-Images/USA/32.webp";
import Img6 from "../../../assets/University-Images/USA/33.webp";
import Img7 from "../../../assets/University-Images/USA/34.webp";
import Img8 from "../../../assets/University-Images/USA/35.webp";
import Img9 from "../../../assets/University-Images/USA/36.webp";
import Img10 from "../../../assets/University-Images/USA/37.webp";
import Img11 from "../../../assets/University-Images/USA/38.webp";
import Img12 from "../../../assets/University-Images/USA/39.webp";
import Img13 from "../../../assets/University-Images/USA/40.webp";
import Img14 from "../../../assets/University-Images/USA/41.webp";
import Img15 from "../../../assets/University-Images/USA/42.webp";


const Programdata = [
  {
    icon: "https://strapi.orientspectra.com/uploads/CSE_7598ac7df1.svg",
    text: "Computer Science Engineering",
  },
  {
    icon: "https://strapi.orientspectra.com/uploads/Software_Engineering_adb32cb9ba.svg",
    text: "Software Engineering",
  },
  {
    icon: "https://strapi.orientspectra.com/uploads/Aerospace_75fdb708d2.svg",
    text: "Aerospace Engineering",
  },
  {
    icon: "https://strapi.orientspectra.com/uploads/Mechanical_Engineering_91b8797d38.svg",
    text: "Mechanical Engineering",
  },
  {
    icon: "https://strapi.orientspectra.com/uploads/Data_Science_3725376790.svg",
    text: "Data Science",
  },
  {
    icon: "https://strapi.orientspectra.com/uploads/Information_technology_fc6638b4a8.svg",
    text: "Information Technology",
  },
  {
    icon: "https://strapi.orientspectra.com/uploads/Cyber_Security_6781432414.svg",
    text: "Cyber Security",
  },
  {
    icon: "https://strapi.orientspectra.com/uploads/Pharmaceutical_Sciences_df07155bdd.svg",
    text: "Pharmaceutical Sciences",
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
                    In academics, the candidate must’ve an aggregate score of
                    60% and above in 12th Class/Intermediate.
                  </li>
                  <li>
                    Candidate must have attended any of the below English
                    proficiency tests:
                  </li>
                  <div style={{ paddingLeft: "1.4rem" }}>
                    <li> IELTS: 6 or 6.5</li>
                    <li>TOEFL: 80</li>
                    <li>Duolingo: 115</li>
                  </div>
                  <li>
                    The candidate must’ve also scored below points in
                    standardized test:
                  </li>

                  <div style={{ paddingLeft: "1.4rem" }}>
                    <li> SAT: 1200 and above</li>
                  </div>
                </ul>
              ) : (
                <ul>
                  <li>
                    In terms of academics, candidate must’ve scored 60 /100
                    and/or CGPA-7/10
                  </li>
                  <li>
                    Candidate must have attended any of the below English
                    proficiency tests:
                  </li>
                  <div style={{ paddingLeft: "1.4rem" }}>
                    <li> IELTS: 6 or 6.5</li>
                    <li>TOEFL: 80</li>
                    <li>Duolingo: 115</li>
                  </div>

                  <li>
                    The candidate must’ve also scored below points in
                    standardized test:
                  </li>
                  <li> GRE : 300 and above</li>
                  <div style={{ paddingLeft: "1.4rem" }}>
                    <li> GMAT : 650 and above</li>
                  </div>
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
                      alt="fall"
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
                      src={Img3}
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
                  src={Img15}
                  alt="niversity_of_Cincinnati"
                  loading="lazy"
                />
              </div>
              <div className="university-card">
                <img
                  src={Img9}
                  alt="NorthEastern University"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img7}
                  alt="George_Mason_University"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img13}
                  alt="University_of_Houston" 
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img5}
                  alt="California_State_University"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img12}
                  alt="University_at_Buffalo"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img6}
                  alt="Drexel_University"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img11}
                  alt="Umass"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img10}
                  alt="stony_brook"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img4}
                  alt="arizona_state_university"
                  loading="lazy"
                />
              </div>
              <div className="university-card">
                <img
                  src={Img8}
                  alt="John_Hopkins_University"
                  loading="lazy"
                />
              </div>
              <div className="university-card">
                <img
                  src={Img14}
                  alt="University_of_Maryland_Baltimore_County"
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
