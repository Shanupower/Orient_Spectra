import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";


const StudyData = [
  {
    id: 1,
    img: "https://strapi.orientspectra.com/uploads/university_81771721e4_d1e50ebea5.webp",
    title: "World Renowned Universities",
    description: "UK is home for oldest & globally renowned universities.",
  },
  {
    id: 2,
    img: "https://strapi.orientspectra.com/uploads/1_removebg_10c95da1e1_9f783830c5.webp",
    title: "Affordable Tuition Fees",
    description: "Tuition fees in UK is much affordable than in USA, Australia, etc.,",
  },
  {
    id: 3,
    img: "https://strapi.orientspectra.com/uploads/financial_report_d7262ccc54_a3cc5889a1.webp",
    title: "Financial Assistance",
    description: "Most universities offer scholarships for Indian students",
  },
  {
    id: 4,
    img: "https://strapi.orientspectra.com/uploads/cultural_sensitivity_b317fd3821_e188d9d532.webp",
    title: "Cultural Diversity",
    description: "UK introduces you to a variety of cultures and languages.",
  },
  {
    id: 5,
    img: "https://strapi.orientspectra.com/uploads/Admission_75b4bfd983_778447e120.webp",
    title: "Easy Admission Process",
    description: "IELTS or TOEFL isn’t mandatory for many universities.",
  },
  {
    id: 6,
    img: "https://strapi.orientspectra.com/uploads/sollege_life_d8bbf45949_2837e5c04a.webp",
    title: "Vibrant Campus Life",
    description:
      "Vibrant campus life with numerous extracurricular activities, and clubs.",
  },
  {
    id: 7,
    img: "https://strapi.orientspectra.com/uploads/job_seeker_6430b5255c_34f413df42.webp",
    title: "Placement Opportunities",
    description: "Courses come with internships and post-study placements.",
  },
];
const UnitedState = () => {
  return (
    <div className="unitedstate-continar section">
      <h1>Why United Kingdom</h1>
      <p>Studying in the UK for a master's degree offers unparalleled advantages.The UK's strong 
        innovation and critical thinking focus prepares you for the global job market. 
        Choose overseas education in the UK to gain a prestigious degree, experience a vibrant lifestyle, 
        and access exceptional resources, ensuring a bright future.
      </p>
      <div className="whyWeStudy-container-UK">
        {StudyData.map((item) => (
          <div className="StudyingCard" key={item.id}>
            <img src={item.img} alt="icon" loading="lazy" />
            <h3>{item.title} </h3>
            <p>{item.description} </p>
          </div>
        ))}
        <div className="ReadMoreCard">
          <p>Read More</p>
          <a
            href="https://strapi.orientspectra.com/uploads/UK_Digital_Booklet_2f190d053f.pdf"
            target="_blank"
          >
            <ArrowForwardIcon className="rightArrowBlog" />
          </a>
        </div>
      </div>     
      </div>
  );
};

export default UnitedState;
