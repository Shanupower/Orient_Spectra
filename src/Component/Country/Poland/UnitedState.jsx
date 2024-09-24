import Img1 from "../../../assets/Property 1=Default (1).png";
import Quote from "../../../assets/Country/quote.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import { Link } from "react-router-dom";

const StudyData = [
  {
    id: 1,
    img: "https://strapi.orientspectra.com/uploads/world_class_Education_71b72a914c_ed92a52423.webp",
    title: "High - Quality Education",
    description: "Poland's historic universities rank among the world's best and offer English programs.",
  },
  {
    id: 2,
    img: "https://strapi.orientspectra.com/uploads/1_removebg_10c95da1e1_9f783830c5.webp",
    title: "Affordable Tuition Fees",
    description: "Tuition fees and cost of Living in Poland is much affordable than other countries.",
  },
  {
    id: 3,
    img: "https://strapi.orientspectra.com/uploads/curriculum_9e777e3b3e_dda731de1f.webp",
    title: "Diverse Course Offerings",
    description: "A wide range of programs in English across various fields, including science, arts, and engineering",
  },
  {
    id: 4,
    img: "https://strapi.orientspectra.com/uploads/cultural_sensitivity_b317fd3821_e188d9d532.webp",
    title: "Cultural Diversity",
    description: "Studying in Poland lets you experience its rich culture and historic cities.",
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
      "Poland offers a vibrant student life with diverse organizations and nightlife.",
  },
  {
    id: 7,
    img: "https://strapi.orientspectra.com/uploads/customer_service_bee18264a3_aa46dcb898.webp",
    title: "Comprehensive Support Services",
    description: "Complete guidance to succeed in your overseas education journey.",
  },
];
const UnitedState = () => {
  return (
    <div className="unitedstate-continar section">
      <h1>Why Poland</h1>
      <p>Poland is an increasingly popular destination for international students. With its rich history, 
        vibrant culture, and high-quality education system, Poland offers a unique and enriching study experience.</p>
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
