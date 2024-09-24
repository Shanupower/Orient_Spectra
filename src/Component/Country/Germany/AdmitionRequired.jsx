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
    icon: "https://strapi.orientspectra.com/uploads/travel_c64ff0ffe2.webp",
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
