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
    title: "Completed Visa Application Form",
  },
  {
    key: 2,
    icon: "https://strapi.orientspectra.com/uploads/certificate_2b2662d10c.webp",
    title: "2 Passport Size Photos",
  },
  {
    key: 3,
    icon: "https://strapi.orientspectra.com/uploads/Refrence_d4804c3d2c.webp",
    title: "Overseas Travel Medical Insurance",
  },
  {
    key: 4,
    icon: "https://strapi.orientspectra.com/uploads/Letters_7e2220fd8a.webp",
    title: "Original Letter of Acceptance from Maltese Educational Institute",
  },
  {
    key: 5,
    icon: "https://strapi.orientspectra.com/uploads/Portfolio_6a09763c1d.webp",
    title:
      "Course Details",
  },
  {
    key: 6,
    icon: "https://strapi.orientspectra.com/uploads/Evidence_a35d42d28c.webp",
    title: "Proof of Tuition Fee Payment",
  },
  {
    key: 7,
    icon: "https://strapi.orientspectra.com/uploads/resident_bd19a54281.webp",
    title: "Proof of Accommodation",
  },
  {
    key: 8,
    icon: "https://strapi.orientspectra.com/uploads/Academic_0e24a00ca2.webp",
    title: "Academic Transcripts and Certificates",
  },
  {
    key: 9,
    icon: "https://strapi.orientspectra.com/uploads/Resume_4ed7eda327.webp",
    title: "Aadhar Card",
  },
  {
    key: 10,
    icon: "https://strapi.orientspectra.com/uploads/possport_0c65803b78.webp",
    title: "Original and Photocopy of the passport bio page",
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
