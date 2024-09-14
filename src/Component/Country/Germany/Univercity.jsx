import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Img1 from "../../../assets/University Images/Germany/1.png";
import Img2 from "../../../assets/University Images/Germany/2.png";
import Img3 from "../../../assets/University Images/Germany/3.png";
import Img4 from "../../../assets/University Images/Germany/4.png";
import Img5 from "../../../assets/University Images/Germany/5.png";
import Img6 from "../../../assets/University Images/Germany/6.png";
import Img7 from "../../../assets/University Images/Germany/7.png";
import "./Country.css";
import Marquee from "react-fast-marquee";

const universityData = [
  {
    img: Img1,
  },
  {
    img: Img2,
  },
  {
    img: Img3,
  },
  {
    img: Img4,
  },
  {
    img: Img5,
  },
  {
    img: Img6,
  },
  {
    img: Img7,
  },
];

const Univercity = () => {
  return (
    <div className="section univercity-card">
      <h1>Top Private Universities to <span>Study in Germany </span></h1>
      <Marquee speed={200} pauseOnHover>
        <div className="univercity-section-card">
          {universityData.map((item) => (
            <div className="univercityList" key={item}>
              <div className="univercityList-Img">
                <img src={item.img} alt="" />
              </div>
              <div className="Concordia-container">
                <div className="ConcordiaCard">
                  <p>Concordia University Chicago</p>
                  <ArrowForwardIcon className="rightArrowB" />
                </div>
                <div className="ConcordiaCard Ietes">
                  <div>
                    <h2>7</h2>
                    <p>Minimum IELTS Required</p>
                  </div>
                  <div>
                    <h2>16</h2>
                    <p>Global Ranking</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Univercity;
