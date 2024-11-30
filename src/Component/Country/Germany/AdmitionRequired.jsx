import Icon1 from "../../../assets/Country/possport.webp";
import "./Country.css";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import Icon3 from "../../../assets/Country/program.webp";
import Icon4 from "../../../assets/Country/Academic.webp";
import Icon5 from "../../../assets/Country/Refrence.webp";
import Icon12 from "../../../assets/Country/Evidence.webp";
import Icon13 from "../../../assets/Country/travel.webp";

const AdmissionData = [
  {
    key:1,
    icon: Icon3,
    title: "Choose Your Program",
  },
  {
    key:2,
    icon: Icon4,
    title: "Meet the Requirements",
  },
  {
    key:3,
    icon: Icon5,
    title:
      "Apply to Universities",
  },
  {
    key:4,
    icon: Icon12,
    title: "Secure Funding",
  },
  {
    key:5,
    icon: Icon1,
    title: "Apply for a Visa",
  },
  {
    key:6,
    icon: Icon13,
    title: "Prepare for Departure",
  },
];
const AdmitionRequired = () => {
  return (
    <div className="section Admition-required-container">
      <div className="admissioncard-sticy">
        <h1>
          Admission Requirements for <br />
          <b>Study Abroad in Germany</b>
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
