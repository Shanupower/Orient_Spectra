import Video from "../../../assets/Country/CountryVideo/France.mp4";
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
        <p>Explore France Universities, Intakes, etc.,</p>
        <h1>
          Quest Through the <br />
          France
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
