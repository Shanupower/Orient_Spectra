import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import Img1 from "../../../assets/University-Images/World-Class-Education.webp";
import Img2 from "../../../assets/University-Images/Tution-Fees.webp";
import Img3 from "../../../assets/University-Images/Financial.webp";
import Img4 from "../../../assets/University-Images/Diversity.webp";
import Img5 from "../../../assets/University-Images/Admission.webp";
import Img6 from "../../../assets/University-Images/College-Life.webp";
import Img7 from "../../../assets/University-Images/Career.webp";
import Broucher from "../../../assets/University-Images/UK-Digital-Booklet.pdf";

const StudyData = [
  {
    id: 1,
    img: Img1,
    title: "World Renowned Universities",
    description: "UK is home for oldest & globally renowned universities.",
  },
  {
    id: 2,
    img: Img2,
    title: "Affordable Tuition Fees",
    description: "Tuition fees in UK is much affordable than in USA, Australia, etc.,",
  },
  {
    id: 3,
    img: Img3,
    title: "Financial Assistance",
    description: "Most universities offer scholarships for Indian students",
  },
  {
    id: 4,
    img: Img4,
    title: "Cultural Diversity",
    description: "UK introduces you to a variety of cultures and languages.",
  },
  {
    id: 5,
    img: Img5,
    title: "Easy Admission Process",
    description: "IELTS or TOEFL isn’t mandatory for many universities.",
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
    title: "Placement Opportunities",
    description: "Courses come with internships and post-study placements.",
  },
];
const UnitedState = () => {
  return (
    <div className="unitedstate-continar section">
      <h1>Why United Kingdom</h1>
      <p>Studying in the UK for a master's degree offers unparalleled advantages.The UK's strong 
        innovation and critical thinking focus prepares you for the global job market. 
        Choose overseas education in the UK to gain a prestigious degree, experience a vibrant lifestyle, 
        and access exceptional resources, ensuring a bright future.
      </p>
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
