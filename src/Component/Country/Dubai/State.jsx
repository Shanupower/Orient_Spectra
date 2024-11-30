import "./Country.css";
import LeadForm from "../../Common/LeadForm";
import Img1 from "../../../assets/University-Images/Graph.webp";
import Img2 from "../../../assets/University-Images/USA.webp";

const State = () => {
  const sourceValue ="Dubai";

  return (
    <div className="section">
      <div className="state-container ">
        <h1><span>Study Abroad in </span> Dubai</h1>
        <p>Get expert guidance to help you get closer to your dream of studying in the 
        Dubai and fastrack your visa application process.{" "}</p>
        <div className="lead-form-container">
          <LeadForm source={sourceValue} />
        </div>
      </div>

      <div className="capital-container1">
        <div className="leftcapital-container">
          <span>Capital</span>
          <h3>Abu Dhabi</h3>
        </div>
        <div className="Rightcapital-container">
          <div className="about-capital-card1">
            <span>Population </span>
            <h2>3.6 Million</h2>
          </div>
          <div className="about-capital-card1">
            <span>Language </span>
            <h2>Arabic & English</h2>
          </div>
          <div className="about-capital-card1">
            <span>Currency </span>
            <h2>United Arab Emirates Dirham (AED)</h2>
          </div>
        </div>
      </div>

      <div className="GDP-container">
        <div className="gdp-card">
          <span>GDP</span>
          <h3>$ 140 Billion</h3>
          <div className="imageCardGdp">
            <img src={Img1} alt="GDPgraph" />
          </div>
        </div>
        <div className="univercity-container">
          <div className="imageCardGdp2">
            <img src={Img2} alt="University" />
          </div>

          <div className="univercity-card2">
            <p>Universities</p>
            <h2>60</h2>
          </div>
        </div>
        <div className="International-conatiner">
          <p>Indian Students in US: </p>
          <h1>20,000+</h1>
        </div>
      </div>
    </div>
  );
};

export default State;
