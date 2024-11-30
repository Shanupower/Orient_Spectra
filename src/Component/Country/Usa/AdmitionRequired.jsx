import "./Country.css";
import Icon2 from "../../../assets/Country/certificate.webp";
import Icon3 from "../../../assets/Country/program.webp";
import Icon4 from "../../../assets/Country/Academic.webp";
import Icon5 from "../../../assets/Country/Refrence.webp";
import Icon6 from "../../../assets/Country/Letters.webp";
import Icon7 from "../../../assets/Country/Resume.webp";
import Icon8 from "../../../assets/Country/Statement.webp";
import Icon9 from "../../../assets/Country/Essays.webp";
import Icon10 from "../../../assets/Country/Portfolio.webp";
import Icon11 from "../../../assets/Country/Certificates.webp";
import Icon12 from "../../../assets/Country/Evidence.webp";
import Icon1 from "../../../assets/Country/possport.webp";

const AdmissionData = [
  {
    key: 1,
    icon: Icon1,
    title: "Copy of a valid passport",
  },
  {
    key: 2,
    icon: Icon2,
    title: "Proof of English proficiency (TOEFL/IELTS test scores)",
  },
  {
    key: 3,
    icon: Icon3,
    title: "ACT/SAT/LSAT for UG programs, GMAT/GRE scores for PG programs",
  },
  {
    key: 4,
    icon: Icon4,
    title: "Academic Tanscripts from the previous study",
  },
  {
    key: 5,
    icon: Icon5,
    title:
      "Academic Refrence Letters, the number of reference letters depends from university to university",
  },
  {
    key: 6,
    icon: Icon6,
    title:
      "Letters of recommendation from the employer/manager (if applicable)",
  },
  {
    key: 7,
    icon: Icon7,
    title: "CV/Resume",
  },
  {
    key: 8,
    icon: Icon8,
    title: "Statement of Purpose (SOP)",
  },
  {
    key: 9,
    icon: Icon9,
    title: "Essays (if demanded by the university)",
  },
  {
    key: 10,
    icon: Icon10,
    title: "Portfolio (for specific courses)",
  },
  {
    key: 11,
    icon: Icon11,
    title: "Certificates of extracurricular activities",
  },
  {
    key: 12,
    icon: Icon12,
    title: "Evidence of Funds",
  },
];
const AdmitionRequired = () => {
  return (
    <div className="section Admition-required-container">
      <div className="admissioncard-sticy">
        <h1>
          Admission Requirements for <br />
          <b>United States Study Abroad</b>
          <p>
            Here are the major requirements to study in the USA, which you need
            to ensure while applying to a USA university:
          </p>
        </h1>
      </div>

      <div className="admission-container">
        {AdmissionData.map((item) => (
          <div className="admission-detailscard" key={item.key}>
            <div className="Possporticon">
              <img src={item.icon} alt="icon" className="possporticon" />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmitionRequired;
