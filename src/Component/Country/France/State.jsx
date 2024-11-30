import "./Country.css";
import Img1 from "../../../assets/Country/Clip path group-3.png";
import Img2 from "../../../assets/University-Images/Graph.webp";
import LeadForm from "../../Common/LeadForm";

const State = () => {
  const sourceValue ="France";

  return (
    <div className="section">
      <div className="state-container ">
        <h1><span>Study Abroad in </span>France</h1>
        <p>
        Get expert guidance to help you get closer to your dream of studying in the France
        and fastrack your visa application process.{" "}
        </p>
        <div className="lead-form-container">
          <LeadForm source={sourceValue} />
        </div>
      </div>
      <div className="capital-container1">
        <div className="leftcapital-container">
          <span>Capital</span>
          <h3>Paris</h3>
        </div>
        <div className="Rightcapital-container">
          <div className="about-capital-card1">
            <span>Population </span>
            <h2>67 Million</h2>
          </div>
          <div className="about-capital-card1">
            <span>Language </span>
            <h2>French</h2>
          </div>
          <div className="about-capital-card1">
            <span>Currency </span>
            <h2>Euro (€)</h2>
          </div>
        </div>
      </div>

      <div className="GDP-container">
        <div className="gdp-card">
          <span>GDP</span>
          <h3>$ 3 Trillon</h3>
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
            <h2>3500</h2>
          </div>
        </div>
        <div className="International-conatiner">
          <p>Indian Students in France</p>
          <h1>10,000</h1>
        </div>
      </div>
    </div>
  );
};

export default State;
