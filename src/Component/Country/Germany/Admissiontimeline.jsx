import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Img1 from "../../../assets/University Images/Germany/1.png";
import Img2 from "../../../assets/University Images/Germany/2.png";
import Img3 from "../../../assets/University Images/Germany/3.png";
import Img4 from "../../../assets/University Images/Germany/4.png";
import Img5 from "../../../assets/University Images/Germany/5.png";
import Img6 from "../../../assets/University Images/Germany/6.png";
import Img7 from "../../../assets/University Images/Germany/7.png";
import "./Country.css";
import { useState } from "react";

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
                  src={Img1}
                  alt="EU Business School"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img5}
                  alt="GISMA University of Applied Sciences "
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img2}
                  alt="University of Europe for Applied Sciences "
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img3}
                  alt="IU University of Applied Sciences "
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/Logo_update_6af66a1318.webp"
                  alt="New European College"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/hochschule_macromedia_logo_rgb_blueberry_e296c7e1d4.webp"
                  alt="Marcomedia University"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img4}
                  alt="SRH University"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src={Img7}
                  alt="Bersin School of Business & Innovation"
                />
              </div>
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/1545396559_HSF_Logo_RZ_RGB_2748269be1.jpg"
                  alt="Fresenius University of Applied Sciences "
                />
              </div>
              <div className="university-card">
                <img
                  src={Img6}
                  alt="Steinbeis University"
                />
              </div>

              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/channels4_profile_removebg_preview_333e855e4d.png"
                  alt="DIU(Dresden International University)"
                />
              </div>

              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/1718285496_arden_univerrsity_logo_a26cdefcb8.png"
                  alt="DIU(Dresden International University)"
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
