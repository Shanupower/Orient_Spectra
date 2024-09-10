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
                    Candidate must’ve cleared graduation with 60% of above marks
                  </li>
                  <li>
                    Candidate must have attended any of the below English
                    proficiency tests:
                  </li>
                  <li> IELTS: 6 or 6.5</li>
                  <li>TOEFL: 89</li>
                  <li>
                    Candidate can have multiple backlogs as there is no limit of
                    backlogs
                  </li>
                  <li> There is no age limit for the applicant</li>
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
                  <li> IELTS: 6 or 6.5</li>
                  <li>TOEFL: 89</li>
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
              <ul>
                <li>
                	Winter: January of every year
                </li>
                <li> 	Summer May of every year</li>
                <li>	Autumn September of every year</li>
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
                  src="https://strapi.orientspectra.com/uploads/University_of_Cincinnati_a00123d710.png"
                  alt=""
                />
              </div>
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/Northeastern_University_Logo_1ac770efc3.png"
                  alt=""
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/George_Mason_University_b9fb5b4192.png"
                  alt=""
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/University_of_Houston_Main_Campus_d3e90f8c69.png"
                  alt=""
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/University_of_Maryland_Baltimore_County_cb629dab69.png"
                  alt=""
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/University_at_Buffalo_logo_4c62684ee5.png"
                  alt=""
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/California_State_University_Long_Beach_98122890c0.png"
                  alt=""
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/Umass_b17269ab7e.png"
                  alt=""
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/stony_brook_0fc916d964.jpeg"
                  alt=""
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/arizona_state_university_963dab0ee7.png"
                  alt=""
                />
              </div>
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/Drexel_University_b963377272.png"
                  alt=""
                />
              </div>
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/John_Hopkins_University_06d1f2734d.png"
                  alt=""
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
