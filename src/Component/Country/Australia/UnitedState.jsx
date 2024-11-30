import Quote from "../../../assets/Country/quote.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import Img1 from "../../../assets/University-Images/World-Class-Education.webp";
import Img2 from "../../../assets/University-Images/Course.webp";
import Img3 from "../../../assets/University-Images/Technology.webp";
import Img4 from "../../../assets/University-Images/Diversity.webp";
import Img6 from "../../../assets/University-Images/College-Life.webp";
import Img7 from "../../../assets/University-Images/Career.webp";
import Brochuer from "../../../assets/About/OS_Brochure_Digital.pdf";

const StudyData = [
  {
    id: 1,
    img: Img1,
    title: "High-Quality Education",
    description:
      "Australia hosts several top-ranked universities that consistently rank among the best globally.",
  },
  {
    id: 2,
    img: Img2,
    title: "Diverse Course Offerings",
    description:  "A wide range of courses available in various fields including science, engineering, arts, & business.",
  },
  {
    id: 3,
    img: Img3,
    title: "Strong Research Opportunities",
    description:
      "Australian universities providing opportunities to work on innovative projects",
  },
  {
    id: 4,
    img: Img4,
    title: "Cultural Diversity",
    description:
      "Australia is welcoming students from across the world & provides a rich cultural experience",
  },
  {
    id: 5,
    img: Img6,
    title: "Vibrant Campus Life",
    description:
      "Vibrant campus life with numerous cultural events, festivals & social activities.",
  },
  {
    id: 6,
    img: Img7,
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
