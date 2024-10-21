import { Link } from "react-router-dom";
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
                     src="https://strapi.orientspectra.com/uploads/fall_1c6257491c_d2e984953b.webp"
                     alt="Fall"
                     loading="lazy"
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
                      src="https://strapi.orientspectra.com/uploads/67de7faf_5f92_402d_929e_75686635e0d9_a95c028b0f_9c384ade6f.webp"
                      alt="Spring"
                      loading="lazy"
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
                  src="https://strapi.orientspectra.com/uploads/1_61d4a89cef.webp"
                  alt="EU Business School"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/5_e70654ef5b.webp"
                  alt="GISMA University of Applied Sciences "
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/2_a6101c1a73.webp"
                  alt="University of Europe for Applied Sciences "
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/3_35008e0c54.webp"
                  alt="IU University of Applied Sciences "
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/13_52c361d909.webp"
                  alt="New European College"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/8_b4289a68a8.webp"
                  alt="Marcomedia University"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/4_ab74fddb01.webp"
                  alt="SRH University"
                  loading="lazy"
                />
              </div>{" "}
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/7_ebd0f3ee88.webp"
                  alt="Bersin School of Business & Innovation"
                  loading="lazy"
                />
              </div>
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/11_4ebffb1e87.webp"
                  alt="Fresenius University of Applied Sciences "
                  loading="lazy"
                />
              </div>
              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/6_67f8497b5d.webp"
                  alt="Steinbeis University"
                  loading="lazy"
                />
              </div>

              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/thumbnail_channels4_profile_removebg_preview_333e855e4d_ad670dbaf2.webp"
                  alt="DIU(Dresden International University)"
                  loading="lazy"
                />
              </div>

              <div className="university-card">
                <img
                  src="https://strapi.orientspectra.com/uploads/12_7916183ad3.webp"
                  alt="Andren University"
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
