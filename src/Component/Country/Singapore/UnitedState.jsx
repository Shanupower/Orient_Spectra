import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";

const StudyData = [
  {
    id: 1,
    img: "https://strapi.orientspectra.com/uploads/world_class_Education_71b72a914c_ed92a52423.webp",
    title: "High - Quality Education",
    description: "Top universities renowned for their academic & research excellence.",
  },
  {
    id: 2,
    img: "https://strapi.orientspectra.com/uploads/1_removebg_10c95da1e1_9f783830c5.webp",
    title: "Affordable Tuition Fees",
    description: "Singapore is much affordable while providing high-quality education.",
  },
  {
    id: 3,
    img: "https://strapi.orientspectra.com/uploads/curriculum_9e777e3b3e_dda731de1f.webp",
    title: "Diverse Course Offerings",
    description: "A wide range of programs & courses tailored to your career goals.",
  },
  {
    id: 4,
    img: "https://strapi.orientspectra.com/uploads/technology_db90794e03_da84aebb6f.webp",
    title: "Innovation and Research",
    description: "Singapore emphasizes practical skills and innovation, for global challenges.",
  },
 
  {
    id: 5,
    img: "https://strapi.orientspectra.com/uploads/cultural_sensitivity_b317fd3821_e188d9d532.webp",
    title: "Cultural Diversity",
    description: "Singapore introduces you to a variety of cultures, languages and traditions.",
  },
  {
    id: 6,
    img: "https://strapi.orientspectra.com/uploads/7_m_Scholarship_c45b96c055.webp",
    title: "Scholarships",
    description:
      "Various scholarships are offered by both government and Universities for students",
  },
  {
    id: 7,
    img: "https://strapi.orientspectra.com/uploads/sollege_life_d8bbf45949_2837e5c04a.webp",
    title: "Career Opportunities",
    description: "Singapore's strong ties with global industries & multinational companies boost employment prospects.",
  },
];

const UnitedState = () => {
  return (
    <div className="unitedstate-continar section">
      <h1>Why Singapore</h1>
      <p>Studying in Singapore offers numerous benefits for international students, making it an attractive destination for higher education.</p>
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
