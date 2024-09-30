import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Country.css";
import { useState } from "react";

const Programdata = [
  {
    text: "MSc in Artificial Intelligence & Machine Learning",
  },
  {
    text: "MSc Environmental Technology",
  },
  {
    text: "MSc in Public Health",
  },
  {
    text: "MSc in Project Management",
  },
  {
    text: "MSc in Aeronautical Engineering",
  },
  {
    text: "MSc in Management and Marketing",
  },
  {
    text: "MSc in Business Analytics",
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
                  <li>Bachelors Score: 60%</li>
                  <li>IELTS Score: 6.0</li>
                  <li> Toefl Score: 80</li>
                  <li>PTE Score: 55 and above</li>
                  <li>Backlogs Limit:</li>
                  <li>Age Limit:</li>
                </ul>
              ) : (
                <ul>
                  <li>Bachelors Score: 60%</li>
                  <li>IELTS Score: 6.0</li>
                  <li> Toefl Score: 80</li>
                  <li>PTE Score: 55 and above</li>
                  <li>Backlogs Limit:</li>
                  <li>Age Limit:</li>
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
                    <p> September Intake</p>
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
                    <p> February</p>
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
                  src="https://strapi.orientspectra.com/uploads/Dublin_Institute_of_Technology_4b197dfbed.png"
                  alt="Dublin_Institute_of_Technology"
                />
              </div>
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/UL_new_logo_1_b77d17bf85.png"
                  alt="University of Limerick"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/DCU_Digital_Logo_Offiial_Navy_Landscape_0_c00367c1c0.png"
                  alt="Dublin City University"
                />
              </div>{" "}
              
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/University_College_Cork_logo_svg_e07b3d4d2b.png"
                  alt="University College Cork"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/griffith_logo_fb818363a4.webp"
                  alt="Griffith College"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/NUI_Logo_SMC_removebg_preview_c4a7fdddab.png"
                  alt="National University of Ireland"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/Trinity_logo_bcb817f66f.webp"
                  alt="Trinity College Dublin"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/nu_f160e625cf.png"
                  alt="Maynooth University"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/national_college_of_ireland_logo_f6b3328d2c.jpg"
                  alt="national-college-of-ireland-logo"
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
