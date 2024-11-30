import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Country.css";
import { useState } from "react";
import Img1 from "../../../assets/University-Images/Summer.webp";
import Img2 from "../../../assets/University-Images/Fall.webp";
import Img3 from "../../../assets/University-Images/Spring.webp";

const Programdata = [
  {
    icon: "https://strapi.orientspectra.com/uploads/CSE_7598ac7df1.svg",
    text: "Human-Computer Interaction",
  },
  {
    icon: "https://strapi.orientspectra.com/uploads/Software_Engineering_adb32cb9ba.svg",
    text: "Artificial Intelligence",
  },
  {
    icon: "https://strapi.orientspectra.com/uploads/Aerospace_75fdb708d2.svg",
    text: "Machine Learning",
  },
  {
    icon: "https://strapi.orientspectra.com/uploads/Mechanical_Engineering_91b8797d38.svg",
    text: "Data Science",
  },
  {
    icon: "https://strapi.orientspectra.com/uploads/Data_Science_3725376790.svg",
    text: "Agile Analysis",
  },
  {
    icon: "https://strapi.orientspectra.com/uploads/Information_technology_fc6638b4a8.svg",
    text: "Business Data Analytics",
  },
  {
    icon: "https://strapi.orientspectra.com/uploads/Cyber_Security_6781432414.svg",
    text: "Cybersecurity Analysis",
  },
  {
    icon: "https://strapi.orientspectra.com/uploads/Pharmaceutical_Sciences_df07155bdd.svg",
    text: "Project Management",
  },
  {
    text:"Health Management"
  }
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
                  <li>Bachelors Score : 58%</li>
                  <li>IELTS Score: 6.0</li>
                  <li> Toefl (ibt) Score: 90</li>
                  <li>Backlogs Limit: 25</li>
                  <li>Age Limit: 32</li>
                </ul>
              ) : (
                <ul>
                  <li>Bachelors Score : 58%</li>
                  <li>IELTS Score: 6.0</li>
                  <li> Toefl (ibt) Score: 90</li>
                  <li>Backlogs Limit: 25</li>
                  <li>Age Limit: 32</li>
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
                      alt="Fall"
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
                    {/* <div className="icon_image">
                      <img src={item.icon} alt="" />
                    </div> */}
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
                  src="https://strapi.orientspectra.com/uploads/UW_Logo_2_L_horz_e3bb6b24f3.png"
                  alt="University of Windsor"
                />
              </div>
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/waterloo_0_removebg_preview_6fc1a68275.png"
                  alt="University of Waterloo"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/University_of_Toronto_369f30d99e.webp"
                  alt="University-of-Toronto"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/Mc_Master_University_logo_1ded05fa78.svg"
                  alt="McMaster_University_logo"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/a_of_u_removebg_preview_5a5971a6e3.png"
                  alt="University of Alberta"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/images_removebg_preview_d388a981f3.png"
                  alt="University of Calgary"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/Dalhousie_University_2_54e654032a.webp"
                  alt="Dalhousie-University-2"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/images_removebg_preview_1_dffefb34ea.png"
                  alt="Toronto Metropolitan University"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/Wilfrid_Laurier_University_63463d4638.png"
                  alt="Wilfrid Laurier University"
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
