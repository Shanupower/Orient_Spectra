import Marquee from "react-fast-marquee";
import img1 from "../../assets/Blogs/glob1.png";
import Globe from "../../assets/About/Earth_1-ezgif.com-optimize.gif";

import "./about.css";
const Hero = () => {
  return (
    <div className="hero-conntainer section">
      <div className="hero-leftside-card">
        <p>Orient Spectra</p>
        <h1>
          Your Passport <br /> To <b> Global Education</b>
        </h1>
        <div className="BlogMarguee">
          <Marquee className="blogMargueeText" speed={100}>
            Study Abroad Consultancy  
          </Marquee>
        </div>
      </div>

      <div className="hero-rightside-card">
        <img src={Globe} alt="img1" className="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
