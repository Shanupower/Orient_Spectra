import Quote from "../../../assets/Country/quote.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import Img1 from "../../../assets/University-Images/University.webp";
import Img2 from "../../../assets/University-Images/Tution-Fees.webp";
import Img3 from "../../../assets/University-Images/Course.webp";
import Img4 from "../../../assets/University-Images/Diversity.webp";
import Img5 from "../../../assets/University-Images/Technology.webp";
import Img6 from "../../../assets/University-Images/Scholarship.webp";
import Img7 from "../../../assets/University-Images/Salary.webp";
import Broucher from "../../../assets/University-Images/EUFair-Digital-Booklet.pdf";

const StudyData = [
  {
    id: 1,
    img: Img1,
    title: "Outstanding Universities",
    description: "German universities are famous for delivering high-quality education ",
  },
  {
    id: 2,
    img: Img2,
    title: "Lower Tuition Fees",
    description: "Tuition fees in Germany is much lower than in USA, UK, etc.,",
  },
  {
    id: 3,
    img: Img6,
    title: "Scholarships",
    description: "In Germany, there are lot of different options for financing your studies",
  },
  {
    id: 4,
    img: Img4,
    title: "Cultural Diversity",
    description: "Germany is a liberal and welcoming country that is full of diversity.",
  },
  {
    id: 5,
    img: Img5,
    title: "Strong Research & Innovation",
    description: "Germany offers hands-on learning through research & industry patnerships.",
  },
  {
    id: 6,
    img: Img3,
    title: "Diverse Course Offerings",
    description:
      "German universities offer wide range of master's programs in English and German across various fields.",
  },
  {
    id: 7,
    img: Img7,
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
