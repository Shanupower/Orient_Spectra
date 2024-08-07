import "./Country.css";
import Img1 from "../../../assets/Country/Clip path group-2.png";
import Img2 from "../../../assets/Country/graph.png";

const State = () => {
  return (
    <div className="section">
      <div className="state-container ">
        <h1>Germany</h1>
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
          <h3>Berlin</h3>
        </div>
        <div className="Rightcapital-container">
          <div className="about-capital-card1">
            <span>Population </span>
            <h2>83 Million</h2>
          </div>
          <div className="about-capital-card1">
            <span>Language </span>
            <h2>German</h2>
          </div>
          <div className="about-capital-card1">
            <span>Currency </span>
            <h2>Euro</h2>
          </div>
        </div>
      </div>

      <div className="GDP-container">
        <div className="gdp-card">
          <span>GDP</span>
          <h3>$ 4.5 Trillon</h3>
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
            <h2>400+</h2>
          </div>
        </div>
        <div className="International-conatiner">
          <p>International Students</p>
          <h1>458,210</h1>
        </div>
      </div>
    </div>
  );
};

export default State;
