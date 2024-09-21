import "./Country.css";

const AdmissionData = [
  {
    id:1,
    icon: "https://strapi.orientspectra.com/uploads/possport_0c65803b78.webp",
    title: "A Valid Passport",
  },
  {
    id:2,
    icon: "https://strapi.orientspectra.com/uploads/certificate_2b2662d10c.webp",
    title: "Proof of English Proficiency (Not Mandatory for all Universities)",
  },
  {
    id:3,
    icon: "https://strapi.orientspectra.com/uploads/Academic_0e24a00ca2.webp",
    title: "Academic Tanscripts",
  },
  {
    id:4,
    icon: "https://strapi.orientspectra.com/uploads/Refrence_d4804c3d2c.webp",
    title: "Academic Reference Letters",
  },
  {
    id:5,
    icon: "https://strapi.orientspectra.com/uploads/Letters_7e2220fd8a.webp",
    title: "Letters of Recommendation",
  },
  {
    id:6,
    icon: "https://strapi.orientspectra.com/uploads/Portfolio_6a09763c1d.webp",
    title: "CV/Resume",
  },
  {
    id:7,
    icon: "https://strapi.orientspectra.com/uploads/Statement_b50bc660b6.webp",
    title: "Statement of Purpose (SOP)",
  },
  {
    id:8,
    icon: "https://strapi.orientspectra.com/uploads/Certificates_734a5b9296.webp",
    title: "Certificate of Extracurricular Activities",
  },
  {
    id:9,
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
          <b>United Kingdom Study Abroad</b>
          <p>
          Here are the major requirements to study in the UK, which you 
          need to ensure while applying to a UK university:
        </p>
        </h1>
      </div>

      <div className="admission-container">
        {AdmissionData.map((item) => (
          <div className="admission-detailscard" key={item.id}>
            <div className="Possporticon">
              <img src={item.icon} alt="icon" className="possporticon" loading="lazy"/>
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmitionRequired;
