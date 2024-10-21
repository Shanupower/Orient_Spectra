import "./Country.css";
import { Link } from "react-router-dom";
import Img1 from "../../../assets/Country/Group 6-1.png";
import Img2 from "../../../assets/Country/graph.png";
import LeadForm from "../../Common/LeadForm";

const State = () => {
  const sourceValue = "Singapore"
  
  return (
    <div className="section">
     <div className="state-container ">
        <h1><span>Study Abroad in </span><br/>Singapore</h1>
        <p>
        Get expert guidance to help you get closer to your dream of studying 
        in the Singapore and fastrack your visa application process.{" "}
        </p>
        <div className="lead-form-container">
          <LeadForm source={sourceValue} />
        </div>
      </div>
      <div className="capital-container1">
        <div className="leftcapital-container">
          <span>Capital</span>
          <h3>Singapore</h3>
        </div>
        <div className="Rightcapital-container">
          <div className="about-capital-card1">
            <span>Population </span>
            <h2>5.92 Million</h2>
          </div>
          <div className="about-capital-card1">
            <span>Language </span>
            <h2>Malay</h2>
          </div>
          <div className="about-capital-card1">
            <span>Currency </span>
            <h2>Singapore Dollar</h2>
          </div>
        </div>
      </div>

      <div className="GDP-container">
        <div className="gdp-card">
          <span>GDP</span>
          <h3>$ 500 Billion</h3>
          <div className="imageCardGdp">
            <img src={Img2} alt="" />
          </div>
        </div>
        <div className="univercity-container">
          <div className="imageCardGdp2">
            <img src={Img1} alt="" />
          </div>

          <div className="univercity-card2">
            <p>Universities</p>
            <h2>40+</h2>
          </div>
        </div>
        <div className="International-conatiner">
          <p>Indian Students in Singapore</p>
          <h1>7000</h1>
        </div>
      </div>
    </div>
  );
};

export default State;
