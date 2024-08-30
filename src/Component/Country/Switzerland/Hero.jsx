import Video from "../../../assets/Country/CountryVideo/Switzerland.mp4";
import Button from "../../Common/Button";
import "./Country.css";

const Hero = () => {
  return (
    <div className="hero-container section">
      <div className="hero-image-container">
        <video className="hero-video" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className="hero-content">
        <p>Orient Spectra - Countries We are at</p>
        <h1>
          Quest Through the <br />
          Switzerland
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
