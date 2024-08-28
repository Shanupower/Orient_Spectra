import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./index.css";
import Cource from "../assets/GroupImg1.png";
import { NavLink } from "react-router-dom";
import Img2 from "../assets/GroupImg2.png";
import Img3 from "../assets/Asset 1@2x 2 (1).png";
import Img4 from "../assets/About2/Mentorship3.svg";
const Explore = () => {
  return (
    <>
    <div className="section Services-container">
      <p>Services <span>We Offer</span></p>
      <div className="services-card-container section">
        <div className="services-card">
          <img src="https://strapi.orientspectra.com/uploads/1_89b76eb043.png"/>
          <p>Free Expert Counselling</p>
        </div>
        <div className="services-card">
          <img src="https://strapi.orientspectra.com/uploads/4_Country_nad_course_selection_0efd5f716b.png" />
          <p>Country & Course Selection</p>
        </div>
        <div className="services-card">
          <img src="https://strapi.orientspectra.com/uploads/3_Application_process_9c560a57cb.png" />
          <p>Application Processing</p>
        </div>
        <div className="services-card">
          <img src="https://strapi.orientspectra.com/uploads/2_Admission_Guidance_0397dcea0f.png" />
          <p>Admission Guidance</p>
        </div>
        <div className="services-card">
          <img src="https://strapi.orientspectra.com/uploads/7_m_Scholarship_07c9399503.png" />
          <p>Scholarship Guidance</p>
        </div>
        <div className="services-card">
          <img src="https://strapi.orientspectra.com/uploads/1_removebg_preview_820ccc207b.png"/>
          <p>Education Loans Guidance</p>
        </div>
        <div className="services-card">
          <img src="https://strapi.orientspectra.com/uploads/5_possport_60b2752461.png" />
          <p>Visa Process Guidance</p>
        </div>
        <div className="services-card">
          <img src="https://strapi.orientspectra.com/uploads/6_pre_departure_c73f9d1211.png" />
          <p>Pre-departure Guidance</p>
        </div>
    </div>
    </div>
    
      {/* <div className="section Explore_container">
        <div className="Explore_leftSide">
          <p className="expliore">Services</p>
          <h2 className="Capabilities">We Offer</h2>
        </div>
        <div className="explore_rightSide"> */}
          {/* <div className="explore_rightCard">
            <div className="explore_rightCard_img">
              <img src={Img3} alt="" />
            </div>
            <div className="mentorShipSection-container">
              <div className="Image4Card">
                <img src={Img4} alt="" />
              </div>
              <div className="mentorShip_card">
                <h3>Mentorship</h3>
                <p className="courseText">
                  Orient Spectra empowers students to achieve academic and
                  career goals through personalized mentorship. Our program
                  guides students at all stages of their study abroad journey,
                  from initial exploration to program application.
                </p>
              </div>

              <NavLink style={{ color: "#fff" }} to={"/Mentorship"}>
                <ArrowForwardIcon
                  sx={{ fontSize: "40px" }}
                  className="menthosihpArrow"
                />
              </NavLink>
            </div>
          </div> */}
          {/* <div className="explore_rightCard">
            {" "}
            <img src={Cource} alt="" className="corcesImage" />
            <h3>
              Finding Your Course
              <NavLink style={{ color: "#fff" }} to={"/FindYourCourse"}>
                <ArrowForwardIcon sx={{ fontSize: "40px" }} />
              </NavLink>
            </h3>
            <p>
            Orient Spectra simplifies course selection to help you with your overseas education process. 
            Our experienced counselors provide expert guidance, helping you navigate international 
            study program options and make informed decisions that align with your aspirations. 
            </p>
          </div>
          <div className="explore_rightCard">
            {" "}
            <img src={Img2} alt="" className="corcesImage" />
            <h3>
            Study Abroad Coaching 
              <NavLink style={{ color: "#fff" }} to={"/Coaching"}>
                <ArrowForwardIcon sx={{ fontSize: "40px" }} />
              </NavLink>
            </h3>
            <p>
            Orient Spectra helps you with your student visa application process. We have an army of experienced counselors 
            who will provide comprehensive support, ensuring a smooth journey to your international education.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Explore;
