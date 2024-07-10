import "./Country.css";
import Img1 from "../../../assets/Country/Clip path group-3.png";
import Img2 from "../../../assets/Country/graph.png";

const State = () => {
  return (
    <div className="section">
      <div className="state-container ">
        <h1>France</h1>
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
          <h3>Paris</h3>
        </div>
        <div className="about-copital-container">
          <div className="about-capital-card">
            <span>Population </span>
            <h2>64.88 Million</h2>
          </div>
          <div className="about-capital-card">
            <span>Language </span>
            <h2>French</h2>
          </div>
          <div className="about-capital-card">
            <span>Currency </span>
            <h2>Franc</h2>
          </div>
        </div>
      </div>

      <div className="GDP-container">
        <div className="gdp-card">
          <span>GDP</span>
          <h3>$ 2.95 Trillon</h3>
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
          <p>International Students</p>
          <h1>412,000</h1>
        </div>
      </div>
    </div>
  );
};

export default State;