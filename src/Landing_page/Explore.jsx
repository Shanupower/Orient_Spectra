import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./index.css";
import Cource from "../assets/GroupImg1.png";
import {NavLink} from 'react-router-dom'
import Img2 from "../assets/GroupImg2.png";
const Explore = () => {
  return (
    <>
      <div className="section Explore_container">
        <div className="Explore_leftSide">
          <p className="expliore">Explore</p>
          <h2 className="Capabilities">Our Capabilities</h2>
        </div>
        <div className="explore_rightSide">
          <div className="explore_rightCard">
            <h3>Mentorship</h3>
            <p className="courseText">
              Orient Spectra empowers students to achieve academic and career
              goals through personalized mentorship. Our program guides students
              at all stages of their study abroad journey, from initial
              exploration to program application.
            </p>
            <NavLink style={{color:"black"}}  to={'/Mentorship'}>

            <ArrowForwardIcon
              sx={{ fontSize: "40px" }}
              className="menthosihpArrow"
            />
            </NavLink>
          </div>
          <div className="explore_rightCard">
            {" "}
            <img src={Cource} alt="" className="corcesImage" />
            <h3>
              Finding Your Course 
                
              <NavLink style={{color:"black"}}  to={'/FindYourCourse'}>
              <ArrowForwardIcon sx={{ fontSize: "40px" }} />
              </NavLink>
            </h3>
            <p>
              Orient Spectra simplifies course selection for your academic and
              career goals. Our experienced counselors provide expert guidance,
              helping you navigate program options and make informed decisions
              aligned with your aspirations.
            </p>
          </div>
          <div className="explore_rightCard">
            {" "}
          <img src={Img2} alt="" className="corcesImage" />
            <h3>
            
              Coaching 
              <NavLink style={{color:"black"}}  to={'/Coaching'} >
              <ArrowForwardIcon sx={{ fontSize: "40px" }} />
              </NavLink> 
            </h3>
            <p>
              Orient Spectra streamlines the student visa process. Our expert
              counselors provide comprehensive support, ensuring a smooth
              journey to your international education.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
