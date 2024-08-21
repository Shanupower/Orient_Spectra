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
          <p>Successful Admits</p>
        </div>
        <div className="dicovery_card">
          <h1>98%</h1>
          <p>Visa Success Rate</p>
        </div>
      </div>
      <div className="discoverTextCard">
        <p>
          Discover why countless students choose Orient Spectra to shape their
          international education journey.
        </p>

        <div className="Marguee">
          <Marquee className="MargueeText" speed={100}>
            {" "}
            Abroad Education Simplified.
          </Marquee>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Discovery;
