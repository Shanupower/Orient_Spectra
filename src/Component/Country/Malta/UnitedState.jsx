import Img1 from "../../../assets/Property 1=Default (1).png";
import Quote from "../../../assets/Country/quote.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import { Link } from "react-router-dom";

const StudyData = [
  {
    id: 1,
    img: "https://strapi.orientspectra.com/uploads/world_class_Education_71b72a914c_ed92a52423.webp",
    title: "World-Class Education",
    description:
      "Top universities renowned for their academic & research excellence.",
  },
  {
    id: 2,
    img: "https://strapi.orientspectra.com/uploads/curriculum_9e777e3b3e_dda731de1f.webp",
    title: "Diverse Course Offerings",
    description:
      "A wide range of programs & courses tailored to your career goals.",
  },
  {
    id: 3,
    img: "https://strapi.orientspectra.com/uploads/technology_db90794e03_da84aebb6f.webp",
    title: "Cutting-Edge Research",
    description:
      "Opportunity to work with advanced facilities & lead modern innovation.",
  },
  {
    id: 4,
    img: "https://strapi.orientspectra.com/uploads/cultural_sensitivity_b317fd3821_e188d9d532.webp",
    title: "Cultural Diversity",
    description:
      "A melting pot of cultures, providing a rich and diverse experience.",
  },
  {
    id: 5,
    img: "https://strapi.orientspectra.com/uploads/customer_service_bee18264a3_aa46dcb898.webp",
    title: "Comprehensive Support Services",
    description:
      " Complete guidance to succeed in your overseas education journey.",
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
    img: "https://strapi.orientspectra.com/uploads/career_promotion_33a073a512_a05caa6393.webp",
    title: "Strong Career Prospects",
    description: "Internship and job opportunities to kickstart your career.",
  },
];

const UnitedState = () => {
  return (
    <div className="unitedstate-continar section">
      <h1>Why Malta</h1>

      <div className="whyWeStudy-container">
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
            href="https://strapi.orientspectra.com/uploads/OS_Brochure_Digital_bfcefac1d3.pdf"
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
