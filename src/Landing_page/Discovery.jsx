import Divider from "../Component/Common/Divider";
import "./index.css";
import Marquee from "react-fast-marquee";

const Discovery = () => {
  return (
    <div className=" discovery-section">
      <div className=" discovery_Container">
        <div className="dicovery_card">
          <h1>19+</h1>
          <p>Years Experience</p>
        </div>
        <div className="dicovery_card">
          <h1>15000+</h1>
          <p>Successful Admits
          </p>
        </div>
        <div className="dicovery_card">
          <h1>10+</h1>
          <p>Study Destinations
          </p>
        </div>
        <div className="dicovery_card">
          <h1>500+</h1>
          <p>Global Universities
          </p>
        </div>
        <div className="dicovery_card">
          <h1>98%</h1>
          <p>Visa Success Rate
          </p>
        </div>
      </div>
      <div className="discoverTextCard">
        <p>
        Orient Spectra provides end-to-end guidance with your study abroad goal across university connects, visa application, 
        and loan assistance. Our student-focussed offerings and expert counselling has made us the top overseas education consultants 
        in Hyderabad.
        </p>

        <div className="Marguee">
          <Marquee className="MargueeText" speed={100}> Start Your Abroad Study Journey. </Marquee>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Discovery;
