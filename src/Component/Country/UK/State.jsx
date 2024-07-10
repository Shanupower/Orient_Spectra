import "./Country.css";
import Img1 from "../../../assets/Country/Group 6.png";
import Img2 from "../../../assets/Country/graph.png";

const State = () => {
  return (
    <div className="section">
      <div className="state-container ">
        <h1>United Kindom</h1>
        <p>
          A Quotation from lorium ipusum Lorem ipsum dolor sit amet,
          consectetuer adipiscing{" "}
        </p>
        <div>
          Dive into a world of diverse destina - tions, prestigious
          universities, and exciting courses.
        </div>
      </div>
      <div className="capital-container">
        <div className="capital-card">
          <span>Capital</span>
          <h3>Washington DC</h3>
        </div>
        <div className="about-copital-container">
          <div className="about-capital-card">
            <span>Population </span>
            <h2>333 Million</h2>
          </div>
          <div className="about-capital-card">
            <span>Language </span>
            <h2>English</h2>
          </div>
          <div className="about-capital-card">
            <span>Currency </span>
            <h2>US Dollar</h2>
          </div>
        </div>
      </div>

      <div className="GDP-container">
        <div className="gdp-card">
          <span>GDP</span>
          <h3>$22.675 Trillon</h3>
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
            <h2>3982</h2>
          </div>
        </div>
        <div className="International-conatiner">
          <p>International Students</p>
          <h1>1.1 Mn</h1>
        </div>
      </div>
    </div>
  );
};

export default State;
