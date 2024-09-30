import Icon1 from "../../../assets/Country/possport.png";
import "./Country.css";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import Icon2 from "../../../assets/Country/certificate.png";
import Icon3 from "../../../assets/Country/program.png";
import Icon4 from "../../../assets/Country/Academic.png";
import Icon5 from "../../../assets/Country/Refrence.png";
import Icon6 from "../../../assets/Country/Letters.png";
import Icon7 from "../../../assets/Country/Resume.png";
import Icon8 from "../../../assets/Country/Statement.png";
import Icon9 from "../../../assets/Country/Essays.png";
import Icon10 from "../../../assets/Country/Portfolio.png";
import Icon11 from "../../../assets/Country/Certificates.png";
import Icon12 from "../../../assets/Country/Evidence.png";

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
          Admission Requirements for <br />
          <b>Malta Study Abroad</b>
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
