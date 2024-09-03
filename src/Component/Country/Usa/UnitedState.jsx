import Img1 from "../../../assets/Property 1=Default (1).png";
import Quote from "../../../assets/Country/quote.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./Country.css";


const StudyData =[
  {
    id: 1,
    title:"World-Class Education",
    description:"The USA boasts some of the best universities in the world, renowned for their academic excellence and innovative research. By choosing to study abroad in the USA, you gain access to top-tier education that can open doors to global career opportunities",
  },
  {
    id: 2,
    title:"Diverse Course Offerings",
    description:"American universities offer a wide range of programs and courses, allowing you to tailor your education to your interests and career goals. Whether you’re interested in engineering, business, arts, or sciences, studying in the USA provides endless possibilities.",
  },
  {
    id: 3,
    title:"Cutting-Edge Research and Technology",
    description:"The USA is a leader in research and technological advancements. As an international student, you will have the opportunity to work with state-of-the-art facilities and be at the forefront of innovation.",
  },
  {
    id: 4,
    title:"Cultural Diversity",
    description:"The USA is a melting pot of cultures, providing a rich and diverse environment for international students. Studying abroad in such a dynamic setting will broaden your perspective and enhance your global awareness.",
  },
  {
    id: 5,
    title:"Comprehensive Support Services",
    description:"American universities are known for their extensive support services for international students. From academic advising to career counseling, you will receive the guidance you need to succeed in your overseas education journey.",
  },
  {
    id: 6,
    title:"Vibrant Campus Life",
    description:"Campus life in the USA is vibrant and engaging, with numerous extracurricular activities, clubs, and organizations. By studying abroad in the USA, you will have the chance to develop new interests, build lifelong friendships, and create unforgettable memories.",
  },
  {
    id: 7,
    title:"Strong Career Prospects",
    description:"A degree from a US university is highly respected worldwide, giving you a competitive edge in the job market. Many American universities also offer internship and job placement services to help you kickstart your career.",
  },
]


const UnitedState = () => {
  return (
    <div className="unitedstate-continar section">
      <h1>Why United State of America</h1>
      <p>USA is known to host most number of international students in the world. 
        It provides a brilliant opportunity to grow academically and culturally.</p>
      <div className="whyWeStudy-container">
          {StudyData.map((item)=>(
                <div className="StudyingCard" key={item.id}>
                    <h3 >{item.title}</h3>
                    <p>{item.description}{" "}</p>
                  </div>
                ))}
      </div>
      {/* <div className="aboutstateCard">
        <div className="unitedImge">
          <img src={Img1} alt="" />
        </div>
        <div className="StudyingCard">
          <div className="quoteImge">
            <img src={Quote} alt="" />
          </div>
          <p>
            Studying abroad offers a world of opportunities, and the USA stands
            out as a premier destination for overseas education.{" "}
          </p>
        </div>
        <div className="ReadMoreCard">
          <p>Read More</p>

          <ArrowForwardIcon className="rightArrowBlog" />
        </div>
      </div> */}
    </div>
  );
};

export default UnitedState;
