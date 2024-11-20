import Video from "../../../assets/Country/CountryVideo/US.mp4";
import Button from "../../Common/Button";
import "./Country.css";

const Hero = () => {
  return (
    <div className="hero-container_1 section">
      <div className="hero-image-container">
        <video className="hero-video" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className="hero-content">
        <p>Explore Dubai Universities, Intakes, etc.,</p>
        <h1>
          Quest Through the <br /> Dubai
        </h1>
        <Button
          text="Start Your Journey"
          arrow={true}
          link="/start-your-journey"
        />
      </div>
    </div>
  );
};

export default Hero;
