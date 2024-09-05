import "./Country.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StudyData = [
  {
    id: 1,
    img: "https://strapi.orientspectra.com/uploads/world_class_Education_71b72a914c.png",
    title: "World-Class Education",
    description:
      "Top universities renowned for their academic & research excellence.",
  },
  {
    id: 2,
    img: "https://strapi.orientspectra.com/uploads/curriculum_9e777e3b3e.png",
    title: "Diverse Course Offerings",
    description:
      "A wide range of programs & courses tailored to your career goals.",
  },
  {
    id: 3,
    img: "https://strapi.orientspectra.com/uploads/technology_db90794e03.png",
    title: "Cutting-Edge Research",
    description:
      "Opportunity to work with advanced facilities & lead modern innovation.",
  },
  {
    id: 4,
    img: "https://strapi.orientspectra.com/uploads/cultural_sensitivity_b317fd3821.png",
    title: "Cultural Diversity",
    description:
      "A melting pot of cultures, providing a rich and diverse experience.",
  },
  {
    id: 5,
    img: "https://strapi.orientspectra.com/uploads/customer_service_bee18264a3.png",
    title: "Comprehensive Support Services",
    description:
      " Complete guidance to succeed in your overseas education journey.",
  },
  {
    id: 6,
    img: "https://strapi.orientspectra.com/uploads/sollege_life_d8bbf45949.png",
    title: "Vibrant Campus Life",
    description:
      "Vibrant campus life with numerous extracurricular activities, and clubs.",
  },
  {
    id: 7,
    img: "https://strapi.orientspectra.com/uploads/career_promotion_33a073a512.png",
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
            <img src={item.img} alt="" />
            <h3>{item.title} </h3>
            <p>{item.description} </p>
          </div>
        ))}
        <div className="ReadMoreCard">
          <p>Read More</p>
          <a
            href="https://strapi.orientspectra.com/uploads/USA_Digital_Booklet_bcc64fbf36.pdf"
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
