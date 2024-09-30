import Icon1 from "../../../assets/Country/possport.png";
import "./Country.css";
import Icon3 from "../../../assets/Country/program.png";
import Icon4 from "../../../assets/Country/Academic.png";
import Icon6 from "../../../assets/Country/Letters.png";
import Icon7 from "../../../assets/Country/Resume.png";
import Icon8 from "../../../assets/Country/Statement.png";


const AdmissionData = [
  {
    key: 1,
    icon: Icon3,
    title: "Selecting a Program",
  },
  {
    key: 2,
    icon: Icon6,
    title: "Preparing the Paperwork",
  },
  {
    key: 3,
    icon: Icon4,
    title:
      "Examining Specific Admission Requirements",
  },
  {
    key: 4,
    icon: Icon8,
    title: "Submitting Your Application",
  },
  {
    key: 5,
    icon: Icon7,
    title: "Admissions",
  },
  {
    key: 6,
    icon: Icon1,
    title: "Applying for a Visa",
  },
  {
    key: 7,
    icon: "https://strapi.orientspectra.com/uploads/travel_c64ff0ffe2.webp",
    title: "Arriving",
  },
];
const AdmitionRequired = () => {
  return (
    <div className="section Admition-required-container">
      <div className="admissioncard-sticy">
        <h1>
          Admission Process to <br />
          <b>Study Abroad in Canada</b>
          <p>
            The process for overseas education can differ from what you're
            accustomed to, so if you have specific questions, contact the
            university to which you're applying. Here are some of the steps
            involved in the admission process when planning to study abroad in
            Canada.
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
