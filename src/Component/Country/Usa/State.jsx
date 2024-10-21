import "./Country.css";
import LeadForm from "../../Common/LeadForm";

const State = () => {
  const sourceValue = "USA";
  
  return (
    <div className="section">
      <div className="state-container ">
        <h1><span>Study Abroad in </span>United State of America</h1>
        <p>Get expert guidance to help you get closer to your dream of studying in the 
          USA and fastrack your US visa application process.{" "}</p>
        <div className="lead-form-container">
          <LeadForm source={sourceValue}/>
          </div>
      </div>

      <div className="capital-container1">
        <div className="leftcapital-container">
          <span>Capital</span>
          <h3>Washinton D.C.</h3>
        </div>
        <div className="Rightcapital-container">
          <div className="about-capital-card1">
            <span>Population </span>
            <h2>33.33 crores</h2>
          </div>
          <div className="about-capital-card1">
            <span>Language </span>
            <h2>English</h2>
          </div>
          <div className="about-capital-card1">
            <span>Currency </span>
            <h2>United States Dollar</h2>
          </div>
        </div>
      </div>

      <div className="GDP-container">
        <div className="gdp-card">
          <span>GDP</span>
          <h3>$ 1.74 Trillion</h3>
          <div className="imageCardGdp">
            <img src="https://strapi.orientspectra.com/uploads/graph_ecd0e550a3.webp" alt="GDPgraph" />
          </div>
        </div>
        <div className="univercity-container">
          <div className="imageCardGdp2">
            <img src="https://strapi.orientspectra.com/uploads/Group_6_2_86fe43be2f.webp" alt="University" />
          </div>

          <div className="univercity-card2">
            <p>Universities</p>
            <h2>43</h2>
          </div>
        </div>
        <div className="International-conatiner">
          <p>Indian Students in US: </p>
          <h1>465,700</h1>
        </div>
      </div>
    </div>
  );
};

export default State;
