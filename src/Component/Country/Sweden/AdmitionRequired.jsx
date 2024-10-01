import "./Country.css";

const AdmissionData = [
  {
    key: 1,
    icon: "https://strapi.orientspectra.com/uploads/possport_0c65803b78.webp",
    title: "Copy of a valid passport",
  },
  {
    key: 2,
    icon: "https://strapi.orientspectra.com/uploads/certificate_2b2662d10c.webp",
    title: "English language proficiency scores of IELTS / TOEFL / PTE",
  },
  {
    key: 3,
    icon: "https://strapi.orientspectra.com/uploads/program_a82348b8ac.webp",
    title: "Standardized test scores (as applicable)",
  },
  {
    key: 4,
    icon: "https://strapi.orientspectra.com/uploads/Academic_0e24a00ca2.webp",
    title: "Academic Tanscripts",
  },
  {
    key: 5,
    icon: "https://strapi.orientspectra.com/uploads/Letters_7e2220fd8a.webp",
    title: "Letters of Recommendation",
  },
  {
    key: 6,
    icon: "https://strapi.orientspectra.com/uploads/Resume_4ed7eda327.webp",
    title: "CV/Resume",
  },
  {
    key: 7,
    icon: "https://strapi.orientspectra.com/uploads/Statement_b50bc660b6.webp",
    title: "Statement of Purpose (SOP)",
  },
  {
    key: 8,
    icon: "https://strapi.orientspectra.com/uploads/Evidence_a35d42d28c.webp",
    title: "Evidence of Funds",
  },
];
const AdmitionRequired = () => {
  return (
    <div className="section Admition-required-container">
      <div className="admissioncard-sticy">
        <h1>
          Admission Requirements for <br />
          <b>Dubai Study Abroad</b>
          <p>
            Here are the major requirements to study in the Dubai, which you need
            to ensure while applying to a Dubai university:
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
