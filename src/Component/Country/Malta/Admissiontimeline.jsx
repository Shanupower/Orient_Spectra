import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Country.css";
import { useState } from "react";

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
            <h2>Admission Timeline</h2>
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
                  <li> IELTS: 6 or 6.5</li>
                  <li>TOEFL: 80</li>
                  <li>Duolingo: 115</li>
                  <li>
                    The candidate must’ve also scored below points in
                    standardized test:
                  </li>
                  <li> SAT: 1200 and above</li>
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
                  <li> IELTS: 6 or 6.5</li>
                  <li>TOEFL: 80</li>
                  <li>Duolingo: 115</li>
                  <li>
                    The candidate must’ve also scored below points in
                    standardized test:
                  </li>
                  <li> GRE : 300 and above</li>
                  <li> GMAT : 650 and above</li>
                </ul>
              )}
            </div>

            <div className="howApllycard Estimate">
              <h3>Intakes</h3>
              <ul>
                <li>
                  Fall - September of every year Spring - January of every year
                </li>
                <li> Spring - January of every year</li>
                <li>Summer - May of every year</li>
              </ul>
            </div>
            <div className="PopularProgram_card">
              <h2>Popular Programs</h2>
              <div className="program-card">
                {Programdata?.map((item, index) => (
                  <div key={index} className="prgram-item-container">
                    <div className="icon_image">
                      <img src={item.icon} alt="" />
                    </div>
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
                  src="https://strapi.orientspectra.com/uploads/3_347d1f2c02.webp"
                  alt="Edinburgh Napier University"
                  loading="lazy"
                />
              </div>
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/6_ed0f9c0444.webp"
                  alt="Heroit Watt Univrsity"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/8_45019bf872.webp"
                  alt="Malvern House London"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/10_a73aebfada.webp"
                  alt="Northumbria University"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/16_3d3cc82a92.webp"
                  alt="University of Wolverhampton"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/18_d6f55d3a07.webp"
                  alt="University of Hertfordshire"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/19_bd7397c9ee.webp"
                  alt="University of East London"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/4_d5a5c04af5.webp"
                  alt="Wrexham University"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/9_23357945cf.webp"
                  alt="Middlesex University"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/13_447ed85804.webp"
                  alt="SaintPeter's University"
                />
              </div>
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/22_e6bf53e162.webp"
                  alt="York st John University"
                  loading="lazy"
                />
              </div>
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/2_d0f68ec276.webp"
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
