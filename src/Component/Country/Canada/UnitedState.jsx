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
    description: "Top universities are renowned for quality education and valued graduates.",
  },
  {
    id: 2,
    img: "https://strapi.orientspectra.com/uploads/1_removebg_10c95da1e1_9f783830c5.webp",
    title: "Affordable Tuition Fees",
    description: "Tuition fees in Canada is often more affordable than in USA, UK, France, Germany etc..",
  },
  {
    id: 3,
    img: "https://strapi.orientspectra.com/uploads/curriculum_9e777e3b3e_dda731de1f.webp",
    title: "Diverse Course Offerings",
    description: "A wide range of programs and courses are available across various fields",
  },
  {
    id: 4,
    img: "https://strapi.orientspectra.com/uploads/cultural_sensitivity_b317fd3821_e188d9d532.webp",
    title: "Cultural Diversity",
    description: "Canada offers a enriching education & preparing students for global workforce.",
  },
  {
    id: 5,
    img: "https://strapi.orientspectra.com/uploads/technology_db90794e03_da84aebb6f.webp",
    title: "Strong Research & Innovation",
    description: "Canada leads in research across technology, medicine, and environmental science.",
  },
  {
    id: 6,
    img: "https://strapi.orientspectra.com/uploads/sollege_life_d8bbf45949_2837e5c04a.webp",
    title: "Safe & Quality Lifestyle",
    description:
      "Canada offers high & secure living standards, world-class healthcare for students.",
  },
  {
    id: 7,
    img: "https://strapi.orientspectra.com/uploads/job_seeker_6430b5255c_34f413df42.webp",
    title: "Work Opportunities",
    description: "Canada offers work opportunities for international students, including part-time jobs.",
  },
];

const UnitedState = () => {
  return (
    <div className="unitedstate-continar section">
      <h1>Why Canada</h1>
      <p>Choosing to pursue overseas education in Canada opens doors to a wealth of opportunities and experiences. 
        From top-tier education and affordable living costs to a welcoming environment and promising career prospects, 
        studying abroad in Canada equips you with the skills and knowledge needed to succeed globally.</p>
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
