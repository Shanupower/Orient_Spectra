import Img1 from "../../../assets/Property 1=Default (1).png";
import Quote from "../../../assets/Country/quote.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import { Link } from "react-router-dom";

const StudyData = [
  {
    id: 1,
    img: "https://strapi.orientspectra.com/uploads/world_class_Education_71b72a914c_ed92a52423.webp",
    title: "High-Quality Education",
    description:
      "Australia hosts several top-ranked universities that consistently rank among the best globally.",
  },
  {
    id: 2,
    img: "https://strapi.orientspectra.com/uploads/curriculum_9e777e3b3e_dda731de1f.webp",
    title: "Diverse Course Offerings",
    description:
      "A wide range of courses available in various fields including science, engineering, arts, & business.",
  },
  {
    id: 3,
    img: "https://strapi.orientspectra.com/uploads/technology_db90794e03_da84aebb6f.webp",
    title: "Strong Research Opportunities",
    description:
      "Australian universities providing opportunities to work on innovative projects",
  },
  {
    id: 4,
    img: "https://strapi.orientspectra.com/uploads/cultural_sensitivity_b317fd3821_e188d9d532.webp",
    title: "Cultural Diversity",
    description:
      "Australia is welcoming students from across the world & provides a rich cultural experience",
  },
  {
    id: 5,
    img: "https://strapi.orientspectra.com/uploads/sollege_life_d8bbf45949_2837e5c04a.webp",
    title: "Vibrant Campus Life",
    description:
      "Vibrant campus life with numerous cultural events, festivals & social activities.",
  },
  {
    id: 6,
    img: "https://strapi.orientspectra.com/uploads/career_promotion_33a073a512_a05caa6393.webp",
    title: "Working Opportunities",
    description: "International students can work part-time while studying and full-time during breaks.",
  },
];
const UnitedState = () => {
  return (
    <div className="unitedstate-continar section">
      <h1>Why Australia</h1>
      <p>By studying in Australia, you’re choosing more than just a degree you’re embracing a vibrant and 
        diverse environment that promotes personal growth and cross-cultural connections.</p>
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
