import Img1 from "../../../assets/Property 1=Default (1).png";
import Quote from "../../../assets/Country/quote.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import { Link } from "react-router-dom";


const StudyData = [
  {
    id: 1,
    img: "https://strapi.orientspectra.com/uploads/university_81771721e4.png",
    title: "World Renowned Universities",
    description: "UK is home for oldest & globally renowned universities.",
  },
  {
    id: 2,
    img: "https://strapi.orientspectra.com/uploads/1_removebg_10c95da1e1.png",
    title: "Affordable Tuition Fees",
    description: "Tuition fees in UK is much affordable than in USA, Australia, etc.,",
  },
  {
    id: 3,
    img: "https://strapi.orientspectra.com/uploads/financial_report_d7262ccc54.png",
    title: "Financial Assistance",
    description: "Most universities offer scholarships for Indian students",
  },
  {
    id: 4,
    img: "https://strapi.orientspectra.com/uploads/cultural_sensitivity_b317fd3821.png",
    title: "Cultural Diversity",
    description: "UK introduces you to a variety of cultures and languages.",
  },
  {
    id: 5,
    img: "https://strapi.orientspectra.com/uploads/Admission_75b4bfd983.png",
    title: "Easy Admission Process",
    description: "IELTS or TOEFL isn’t mandatory for many universities.",
  },
  {
    id: 6,
    img: "https://strapi.orientspectra.com/uploads/sollege_life_d8bbf45949.png",
    title: "Vibrant Campus Life",
    description:
      "Vibrant campus life with numerous extracurricular activities, and clubs.",
  },
  {
    id: 7,
    img: "https://strapi.orientspectra.com/uploads/job_seeker_6430b5255c.png",
    title: "Placement Opportunities",
    description: "Courses come with internships and post-study placements.",
  },
];
const UnitedState = () => {
  return (
    <div className="unitedstate-continar section">
      <h1>Why United Kingdom</h1>
      <div className="whyWeStudy-container-UK">
        {StudyData.map((item) => (
          <div className="StudyingCard" key={item.id}>
            <img src={item.img} alt="" />
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
