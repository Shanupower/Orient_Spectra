import Button from "../Common/Button";
import "./StudyOverseas.css";
const Hero = () => {
  return (
    <div className="study-overseas-container section">
      <p>Orient Spectra</p>
      <div className="SYJtodaycard">
        <h1>
          Start Your <br /> Journey Today
        </h1>
        <div>
          <Button
            text="Start Your Journey "
            arrow={true}
            link="/start-your-journey"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
