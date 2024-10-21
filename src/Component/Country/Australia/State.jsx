import "./Country.css";
import Img1 from "../../../assets/Country/Group 6-2.png";
import LeadForm from "../../Common/LeadForm";

const State = () => {
  const sourceValue = "Australia";

  return (
    <div className="section">
      <div className="state-container ">
        <h1><span>Study Abroad in </span>Australia</h1>
        <p>
        Get expert guidance to help you get closer to your dream of studying in the Australia
        and fastrack your visa application process.
        </p>
        <div className="lead-form-container">
          <LeadForm source={sourceValue} />
        </div>
      </div>
      <div className="capital-container1">
        <div className="leftcapital-container">
          <span>Capital</span>
          <h3>Canberra</h3>
        </div>
        <div className="Rightcapital-container">
          <div className="about-capital-card1">
            <span>Population </span>
            <h2>26 Million</h2>
          </div>
          <div className="about-capital-card1">
            <span>Language </span>
            <h2>English</h2>
          </div>
          <div className="about-capital-card1">
            <span>Currency </span>
            <h2>Australian Dollar (AUD)</h2>
          </div>
        </div>
      </div>

      <div className="GDP-container">
        <div className="gdp-card">
          <span>GDP</span>
          <h3>$ 1.7 Trillion</h3>
          <div className="imageCardGdp">
            <img src="https://strapi.orientspectra.com/uploads/graph_ecd0e550a3.webp" alt="GDPgraph" />
          </div>
        </div>
        <div className="univercity-container">
          <div className="imageCardGdp2">
            <img src={Img1} alt="" />
          </div>

          <div className="univercity-card2">
            <p>Universities</p>
            <h2>42</h2>
          </div>
        </div>
        <div className="International-conatiner">
          <p>Indian Students in Australia</p>
          <h1>1,18,109</h1>
        </div>
      </div>
    </div>
  );
};

export default State;
