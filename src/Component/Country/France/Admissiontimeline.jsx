import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Country.css";
import { useState } from "react";

const Programdata = [
  {
    text: "	Hospitality & Tourism Management ",
  },
  {
    text: "	Data Science ",
  },
  {
    text: "	Business Analytics",
  },
  {
    text: "Finance",
  },
  {
    text: "	Supply Chain Management ",
  },
  {
    text: "	Fashion Designing ",
  },
  {
    text: "	Artificial Intelligence",
  },
  {
    text: "	Luxury Brand Management  ",
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
                  <li> Candidate must’ve cleared inter /Diploma with 60%</li>
                  <li>
                    Candidate must’ve scored 70+ english marks in intermediate
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>Candidate must’ve cleared graduation with over 55%</li>
                  <li>
                    Candidate can apply with MOI (Medium of Instruction) and no
                    test score is required
                  </li>
                  <li>
                    {" "}
                    Candidate can have multiple backlogs as there is no limit of
                    backlogs .
                  </li>
                  <li>The age limit of the applicant is up to 40 years</li>
                </ul>
              )}
            </div>

            <div className="howApllycard Estimate">
              <h3>Intakes</h3>
              <ul>
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
              </ul>
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
