import { Link } from "react-router-dom";
import "./Country.css";
import { useState } from "react";

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
                      src="https://strapi.orientspectra.com/uploads/fall_1c6257491c_d2e984953b.webp"
                      alt="Fall"
                      loading="lazy"
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
                      src="https://strapi.orientspectra.com/uploads/67de7faf_5f92_402d_929e_75686635e0d9_a95c028b0f_9c384ade6f.webp"
                      alt="Spring"
                      loading="lazy"
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
                      src="https://strapi.orientspectra.com/uploads/Summer_6b20b10000_7979b72c34.webp"
                      alt="Summer"
                      loading="lazy"
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
