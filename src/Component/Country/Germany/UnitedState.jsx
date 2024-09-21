import Img1 from "../../../assets/Property 1=Default (1).png";
import Quote from "../../../assets/Country/quote.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import { Link } from "react-router-dom";


const StudyData = [
  {
    id: 1,
    img: "https://strapi.orientspectra.com/uploads/university_81771721e4_d1e50ebea5.webp",
    title: "Outstanding Universities",
    description: "German universities are famous for delivering high-quality education ",
  },
  {
    id: 2,
    img: "https://strapi.orientspectra.com/uploads/1_removebg_10c95da1e1_9f783830c5.webp",
    title: "Lower Tuition Fees",
    description: "Tuition fees in Germany is much lower than in USA, UK, etc.,",
  },
  {
    id: 3,
    img: "https://strapi.orientspectra.com/uploads/7_m_Scholarship_c45b96c055.webp",
    title: "Scholarships",
    description: "In Germany, there are lot of different options for financing your studies",
  },
  {
    id: 4,
    img: "https://strapi.orientspectra.com/uploads/cultural_sensitivity_b317fd3821_e188d9d532.webp",
    title: "Cultural Diversity",
    description: "Germany is a liberal and welcoming country that is full of diversity.",
  },
  {
    id: 5,
    img: "https://strapi.orientspectra.com/uploads/technology_db90794e03_da84aebb6f.webp",
    title: "Strong Research & Innovation",
    description: "Germany offers hands-on learning through research & industry patnerships.",
  },
  {
    id: 6,
    img: "https://strapi.orientspectra.com/uploads/curriculum_9e777e3b3e_dda731de1f.webp",
    title: "Diverse Course Offerings",
    description:
      "German universities offer wide range of master's programs in English and German across various fields.",
  },
  {
    id: 7,
    img: "https://strapi.orientspectra.com/uploads/salary_2d86931524.webp",
    title: "Attractive Starting Salary",
    description: "The average starting salary for entry-level role is around €36,000-42,000 per year.",
  },
  
];

const UnitedState = () => {
  return (
    <div className="unitedstate-continar section">
      <h1>Why Germany</h1>
      <p>Germany stands as a beacon of academic excellence and innovation, making it a top destination for 
        students worldwide. When you choose to study in Germany, you're not just choosing a degree; you're 
        choosing a transformative experience that combines high-quality education with rich cultural immersion</p>
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
