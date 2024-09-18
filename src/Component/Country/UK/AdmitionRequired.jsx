import Icon1 from "../../../assets/Country/possport.png";
import "./Country.css";
import Icon2 from "../../../assets/Country/certificate.png";
import Icon4 from "../../../assets/Country/Academic.png";
import Icon5 from "../../../assets/Country/Refrence.png";
import Icon6 from "../../../assets/Country/Letters.png";
import Icon7 from "../../../assets/Country/Resume.png";
import Icon8 from "../../../assets/Country/Statement.png";
import Icon11 from "../../../assets/Country/Certificates.png";
import Icon12 from "../../../assets/Country/Evidence.png";

const AdmissionData = [
  {
    id:1,
    icon: Icon1,
    title: "A Valid Passport",
  },
  {
    id:2,
    icon: Icon2,
    title: "Proof of English Proficiency (Not Mandatory for all Universities)",
  },
  {
    id:3,
    icon: Icon4,
    title: "Academic Tanscripts",
  },
  {
    id:4,
    icon: Icon5,
    title: "Academic Reference Letters",
  },
  {
    id:5,
    icon: Icon6,
    title: "Letters of Recommendation",
  },
  {
    id:6,
    icon: Icon7,
    title: "CV/Resume",
  },
  {
    id:7,
    icon: Icon8,
    title: "Statement of Purpose (SOP)",
  },
  {
    id:8,
    icon: Icon11,
    title: "Certificate of Extracurricular Activities",
  },
  {
    id:9,
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
          <b>United Kingdom Study Abroad</b>
          <p>
          Here are the major requirements to study in the UK, which you 
          need to ensure while applying to a UK university:
        </p>
        </h1>
      </div>

      <div className="admission-container">
        {AdmissionData.map((item) => (
          <div className="admission-detailscard" key={item.id}>
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
