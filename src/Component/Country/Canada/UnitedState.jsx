import Quote from "../../../assets/Country/quote.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import Img1 from "../../../assets/University-Images/World-Class-Education.webp";
import Img2 from "../../../assets/University-Images/Course.webp";
import Img3 from "../../../assets/University-Images/Technology.webp";
import Img4 from "../../../assets/University-Images/Diversity.webp";
import Img5 from "../../../assets/University-Images/Tution-Fees.webp";
import Img6 from "../../../assets/University-Images/College-Life.webp";
import Img7 from "../../../assets/University-Images/Career.webp";
import Brochuer from "../../../assets/About/OS_Brochure_Digital.pdf";

const StudyData = [
  {
    id: 1,
    img: Img1,
    title: "High-Quality Education",
    description: "Top universities are renowned for quality education and valued graduates.",
  },
  {
    id: 2,
    img: Img5,
    title: "Affordable Tuition Fees",
    description: "Tuition fees in Canada is often more affordable than in USA, UK, France, Germany etc..",
  },
  {
    id: 3,
    img: Img2,
    title: "Diverse Course Offerings",
    description: "A wide range of programs and courses are available across various fields",
  },
  {
    id: 4,
    img: Img4,
    title: "Cultural Diversity",
    description: "Canada offers a enriching education & preparing students for global workforce.",
  },
  {
    id: 5,
    img: Img3,
    title: "Strong Research & Innovation",
    description: "Canada leads in research across technology, medicine, and environmental science.",
  },
  {
    id: 6,
    img: Img6,
    title: "Safe & Quality Lifestyle",
    description:
      "Canada offers high & secure living standards, world-class healthcare for students.",
  },
  {
    id: 7,
    img: Img7,
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
            href={Brochuer}
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
