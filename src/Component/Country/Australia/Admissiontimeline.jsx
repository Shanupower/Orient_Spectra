import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Country.css";
import { useState } from "react";

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
                      src="https://strapi.orientspectra.com/uploads/fall_1c6257491c.jpg"
                      alt=""
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
                      src="https://strapi.orientspectra.com/uploads/67de7faf_5f92_402d_929e_75686635e0d9_a95c028b0f.jpg"
                      alt=""
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
                      src="https://strapi.orientspectra.com/uploads/Summer_6b20b10000.jpg"
                      alt=""
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
                  src="https://strapi.orientspectra.com/uploads/channels4_profile_fbccddc0da.jpg"
                  alt="the university of melbourne"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/U_Syd_Logo_1_removebg_preview_4eadf23bc9.png"
                  alt="The University of Sydney"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/download_removebg_preview_875f65d9d6.png"
                  alt="University of New South Wales (UNSW Sydney)"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/Untitled_design_47_removebg_preview_c489fdf123.png"
                  alt="University of Queensland (UQ)"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/download_removebg_preview_1_0b2805f151.png"
                  alt="Monash University"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/The_University_of_Western_Australia_logo_removebg_preview_6aa670811d.png"
                  alt="The-University-of-Western-Australia-logo"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/download_removebg_preview_2_a1315cfc13.png"
                  alt="The University of Adelaide"
                />
              </div>
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/download_removebg_preview_3_825d492b62.png"
                  alt="RMIT University"
                />
              </div>
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/uts_1b15e165f2.webp"
                  alt="University of Technology Sydney (UTS)"
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
