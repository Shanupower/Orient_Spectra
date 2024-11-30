
import Quote from "../../../assets/Country/quote.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import { Link } from "react-router-dom";
import Img1 from "../../../assets/University-Images/World-Class-Education.webp";
import Img2 from "../../../assets/University-Images/Course.webp";
import Img3 from "../../../assets/University-Images/Technology.webp";
import Img4 from "../../../assets/University-Images/Diversity.webp";
import Img5 from "../../../assets/University-Images/Support.webp";
import Img6 from "../../../assets/University-Images/College-Life.webp";
import Img7 from "../../../assets/University-Images/Career.webp";
import Broucher from "../../../assets/University-Images/EUFair-Digital-Booklet.pdf";

const StudyData = [
  {
    id: 1,
    img: Img1,
    title: "World-Class Education",
    description:
      "Top universities renowned for their academic & research excellence.",
  },
  {
    id: 2,
    img: Img2,
    title: "Diverse Course Offerings",
    description:
      "A wide range of courses available in English across various fields.",
  },
  {
    id: 3,
    img: Img3,
    title: "Cutting-Edge Research",
    description:
      "Opportunity to work with advanced facilities & lead modern innovation.",
  },
  {
    id: 4,
    img: Img4,
    title: "Cultural Diversity",
    description:
      "France providing a rich cultural heritage, art, and historical landmarks.",
  },
  {
    id: 5,
    img: Img5,
    title: "Comprehensive Support Services",
    description:
      " Complete guidance to succeed in your overseas education journey.",
  },
  {
    id: 6,
    img: Img6,
    title: "Vibrant Campus Life",
    description:
      "Vibrant campus life with numerous cultural events, & social activities.",
  },
  {
    id: 7,
    img: Img7,
    title: "Working Opportunities",
    description: "France offers internships, making it easier for students to gain experience.",
  },
];
const UnitedState = () => {
  return (
    <div className="unitedstate-continar section">
      <h1>Why France</h1>
      <p>France is renowned for its rich academic tradition and cultural heritage, making it a premier destination
        for students worldwide. By choosing to study in France, you're not only pursuing a degree but also embarking 
        on a journey of cultural exploration and intellectual growth. </p>
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
            href={Broucher}
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
