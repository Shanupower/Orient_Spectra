import "./Country.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Img1 from "../../../assets/University-Images/World-Class-Education.webp";
import Img2 from "../../../assets/University-Images/Course.webp";
import Img3 from "../../../assets/University-Images/Technology.webp";
import Img4 from "../../../assets/University-Images/Diversity.webp";
import Img5 from "../../../assets/University-Images/Support.webp";
import Img6 from "../../../assets/University-Images/College-Life.webp";
import Img7 from "../../../assets/University-Images/Career.webp";
import Broucher from "../../../assets/University-Images/USA-Digital-Booklet.pdf";

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
      "A wide range of programs & courses tailored to your career goals.",
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
      "A melting pot of cultures, providing a rich and diverse experience.",
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
      "Vibrant campus life with numerous extracurricular activities, and clubs.",
  },
  {
    id: 7,
    img: Img7,
    title: "Strong Career Prospects",
    description: "Internship and job opportunities to kickstart your career.",
  },
];

const UnitedState = () => {
  return (
    <div className="unitedstate-continar section">
      <h1>Why United State of America</h1>
      <p>
        USA is known to host most number of international students in the world.
        It provides a brilliant opportunity to grow academically and culturally.
      </p>
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
