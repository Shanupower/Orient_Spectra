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
    key: 1,
    icon: "https://strapi.orientspectra.com/uploads/possport_0c65803b78.webp",
    title: "Completed visa application form",
  },
  {
    key: 2,
    icon: "https://strapi.orientspectra.com/uploads/certificate_2b2662d10c.webp",
    title: "2 passport size photos",
  },
  {
    key: 3,
    icon: "https://strapi.orientspectra.com/uploads/Refrence_d4804c3d2c.webp",
    title: "Medical insurance that is valid in Europe",
  },
  {
    key: 4,
    icon: Icon4,
    title: "Proof of having the required financial resources to cover your educational and living expenses during your course of study",
  },
  {
    key: 5,
    icon: "https://strapi.orientspectra.com/uploads/Certificates_734a5b9296.webp",
    title: "Certificate of acceptance from an educational institution in Poland",
  },
  {
    key: 6,
    icon: "https://strapi.orientspectra.com/uploads/resident_bd19a54281.webp",
    title: "Proof of Accommodation",
  },
  {
    key: 7,
    icon: "https://strapi.orientspectra.com/uploads/Essays_c9cdd737c1.webp",
    title: "Receipt of payment of tuition fees for the first semester",
  },
  {
    key: 8,
    icon: "https://strapi.orientspectra.com/uploads/Essays_c9cdd737c1.webp",
    title: "Receipt of payment of the visa application fees",
  },
];
const AdmitionRequired = () => {
  return (
    <div className="section Admition-required-container">
      <div className="admissioncard-sticy">
        <h1>
          Admission Requirements for <br />
          <b>Poland Study Abroad</b>
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
