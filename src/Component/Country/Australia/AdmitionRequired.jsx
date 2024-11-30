import Icon1 from "../../../assets/Country/possport.webp";
import "./Country.css";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
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

const AdmissionData = [
  {
    icon: Icon1,
    title: "Copy of a valid passport",
  },
  {
    icon: Icon2,
    title: "Proof of English proficiency (OEFL/IELTS test scores)",
  },
  {
    icon: Icon3,
    title: "ACT/SAT/LSAT forUG programs, GMAT/GRE scores for PG programs",
  },
  {
    icon: Icon4,
    title: "Academic Tanscripts from the previous study",
  },
  {
    icon: Icon5,
    title:
      "Academic Refrence Letters, the number of reference letters depends from university to university",
  },
  {
    icon: Icon6,
    title: "Letters of recommendation fromthe employer/manager (if applicable)",
  },
  {
    icon: Icon7,
    title: "CV/Resume",
  },
  {
    icon: Icon8,
    title: "Statement of Purpose (SOP)",
  },
  {
    icon: Icon9,
    title: "Essays (if dmanded by the university)",
  },
  {
    icon: Icon10,
    title: "Portfolio (for specific courses)",
  },
  {
    icon: Icon11,
    title: "      Certificates of extracurricular activities      ",
  },
  {
    icon: Icon12,
    title: "Evidence of Funds",
  },
];
const AdmitionRequired = () => {
  return (
    <div className="section Admition-required-container">
      <div className="admissioncard-sticy">
        <h1>
          Admission Requirements for 
          <b> Study Abroad in Australia</b>
        </h1>
      </div>

      <div className="admission-container">
        {AdmissionData.map((item) => (
          <div className="admission-detailscard" key={item}>
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
