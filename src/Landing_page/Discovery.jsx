import Divider from "../Component/Common/Divider";
import "./index.css";
import Marquee from "react-fast-marquee";

const Discovery = () => {
  return (
    <div className=" discovery-section">
      <div className=" discovery_Container">
        <div className="dicovery_card">
          <h1>15,000+</h1>
          <p>Successful Admits</p>
        </div>
        <div className="dicovery_card">
          <h1>170+</h1>
          <p>Countries represented</p>
        </div>
        <div className="dicovery_card">
          <h1>98%</h1>
          <p>Visa Pass Rate</p>
        </div>
      </div>
      <div className="discoverTextCard">
        <p>
          Discover why thousands of students chose Orient Spectra to build their
          career Overseas.
        </p>

        <div className="Marguee">
          <Marquee className="MargueeText" speed={100}>A Study Abroad Consultancy</Marquee>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Discovery;
