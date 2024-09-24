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
    img: "https://strapi.orientspectra.com/uploads/curriculum_9e777e3b3e_dda731de1f.webp",
    title: "Diverse Course Offerings",
    description: "A wide range of programs & courses tailored to your career goals.",
  },
  {
    id: 3,
    img: "https://strapi.orientspectra.com/uploads/technology_db90794e03_da84aebb6f.webp",
    title: "Innovation and Research",
    description: "Ireland is a hub for cutting-edge research and innovation.",
  },
  {
    id: 4,
    img: "https://strapi.orientspectra.com/uploads/financial_report_d7262ccc54_a3cc5889a1.webp",
    title: "Practical Experience",
    description: "Many universities offer internships to gain practical experience.",
  },
  {
    id: 5,
    img: "https://strapi.orientspectra.com/uploads/cultural_sensitivity_b317fd3821_e188d9d532.webp",
    title: "Cultural Diversity",
    description: "Ireland introduces you to a variety of cultures and languages.",
  },
  {
    id: 6,
    img: "https://strapi.orientspectra.com/uploads/7_m_Scholarship_c45b96c055.webp",
    title: "Scholarships",
    description:
      "Various scholarships are available for students, reducing financial barriers.",
  },
  {
    id: 7,
    img: "https://strapi.orientspectra.com/uploads/sollege_life_d8bbf45949_2837e5c04a.webp",
    title: "Career Opportunities",
    description: "Ireland offers excellent work opportunities and industrial exposure.",
  },
];


const UnitedState = () => {
  return (
    <div className="unitedstate-continar section">
      <h1>Why Ireland</h1>
      <p>Ireland welcomes international students to pursue graduate, postgraduate, and master's 
        degrees, along with other specializations. It is home to some of the best universities 
        in the world.</p>
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
