import Icon1 from "../../../assets/Country/possport.webp";
import "./Country.css";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import Icon2 from "../../../assets/Country/certificate.webp";
import Icon3 from "../../../assets/Country/program.webp";
import Icon4 from "../../../assets/Country/Academic.webp";
import Icon6 from "../../../assets/Country/Letters.webp";
import Icon7 from "../../../assets/Country/Resume.webp";
import Icon8 from "../../../assets/Country/Statement.webp";
import Icon10 from "../../../assets/Country/Portfolio.webp";


const AdmissionData = [
  {
    key: 1,
    icon: Icon1,
    title: "Copy of a valid passport scores",
  },
  {
    key: 2,
    icon: Icon2,
    title: "French Language Test",
  },
  {
    key: 3,
    icon: Icon4,
    title: "Academic Tanscripts",
  },
  {
    key: 4,
    icon: Icon10,
    title: "Portfolio (for specific courses) ",
  },
  {
    key: 5,
    icon: Icon8,
    title: "Statement of Purpose (SOP)",
  },
  {
    key: 6,
    icon: Icon3,
    title: "GMAT/GRE scores for PG programs",
  },
  {
    key: 7,
    icon: Icon2,
    title: "TOEFL/IELTS/C1 Advanced",
  },
  {
    key: 8,
    icon: Icon6,
    title: "Letters of recommendation (LOR)",
  },
  {
    key: 9,
    icon: Icon7,
    title: "A CV (if applicable)",
  },
];
const AdmitionRequired = () => {
  return (
    <div className="section Admition-required-container">
      <div className="admissioncard-sticy">
        <h1>
          Admission Requirements for <br />
          <b>Study Abroad in France</b>
          <p>
            Here are the major requirements to study in France which we need to
            ensure while applying to a France university
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
