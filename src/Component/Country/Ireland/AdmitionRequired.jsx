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
    key: 1,
    icon: Icon4,
    title: "Academic Tanscripts",
  },
  {
    key: 2,
    icon: Icon2,
    title: "Proof of Graduation",
  },
  {
    key: 3,
    icon: Icon3,
    title: "Standardized Test Scores",
  },

  {
    key: 4,
    icon: Icon5,
    title: "Valid Visa:",
  },
  {
    key: 5,
    icon: Icon6,
    title: "Letters of Recommendation",
  },
  {
    key: 6,
    icon: Icon7,
    title: "CV/Resume",
  },
  {
    key: 7,
    icon: Icon10,
    title: "Portfolio (for specific courses)",
  },
  {
    key: 8,
    icon: Icon8,
    title: "Statement of Purpose (SOP)",
  },
  {
    key: 9,
    icon: Icon2,
    title: "Proof of English Proficiency",
  },
];
const AdmitionRequired = () => {
  return (
    <div className="section Admition-required-container">
      <div className="admissioncard-sticy">
        <h1>
          Admission Requirements for <br />
          <b>Studying in Ireland</b>
          <p>
            Admission requirements can vary depending on the university and the
            course you are applying for. Before starting the application
            process, it is essential to check the specific criteria and keep all
            necessary documents ready. Pay close attention to the application
            procedures, fees, and deadlines as they can differ between
            institutions. To ensure a fair chance of consideration, apply at
            least 4-6 months before the deadline.
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
