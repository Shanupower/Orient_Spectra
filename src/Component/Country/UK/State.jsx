import "./Country.css";
import Img1 from "../../../assets/Country/Clip path group.png";
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
      <div className="capital-container1">
        <div className="leftcapital-container">
          <span>Capital</span>
          <h3>London</h3>
        </div>
        <div className="Rightcapital-container">
          <div className="about-capital-card1">
            <span>Population </span>
            <h2>68 Million</h2>
          </div>
          <div className="about-capital-card1">
            <span>Language </span>
            <h2>English</h2>
          </div>
          <div className="about-capital-card1">
            <span>Currency </span>
            <h2>Pound Sterling</h2>
          </div>
        </div>
      </div>

      <div className="GDP-container">
        <div className="gdp-card">
          <span>GDP</span>
          <h3>$ 3.12 Trillon</h3>
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
            <h2>359</h2>
          </div>
        </div>
        <div className="International-conatiner">
          <p>International Students</p>
          <h1>485,645</h1>
        </div>
      </div>
    </div>
  );
};

export default State;
