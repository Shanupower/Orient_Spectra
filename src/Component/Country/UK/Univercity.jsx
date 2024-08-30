import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Img1 from "../../../assets/University Images/UK/1.png";
import Img2 from "../../../assets/University Images/UK/2.png";
import Img3 from "../../../assets/University Images/UK/3.jpg";
import Img4 from "../../../assets/University Images/UK/4.png";
import Img5 from "../../../assets/University Images/UK/5.png";
import Img6 from "../../../assets/University Images/UK/6.png";
import Img7 from "../../../assets/University Images/UK/7.png";
import Img8 from "../../../assets/University Images/UK/8.png";
import Img9 from "../../../assets/University Images/UK/9.png";
import Img10 from "../../../assets/University Images/UK/10.png";
import Img11 from "../../../assets/University Images/UK/11.png";
import Img12 from "../../../assets/University Images/UK/12.png";
import Img13 from "../../../assets/University Images/UK/13.png";
import Img14 from "../../../assets/University Images/UK/14.png";
import Img15 from "../../../assets/University Images/UK/15.jpg";
import Img16 from "../../../assets/University Images/UK/16.jpg";
import Img17 from "../../../assets/University Images/UK/17.jpg";
import Img18 from "../../../assets/University Images/UK/18.png";
import Img19 from "../../../assets/University Images/UK/19.jpg";
import Img20 from "../../../assets/University Images/UK/20.jpg";
import Img21 from "../../../assets/University Images/UK/21.png";
import Img22 from "../../../assets/University Images/UK/22.jpg";
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
  {
    img: Img8,
  },
  {
    img: Img9,
  },
  {
    img: Img10,
  },
  {
    img: Img11,
  },
  {
    img: Img12,
  },
  {
    img: Img13,
  },
  {
    img: Img14,
  },
  {
    img: Img15,
  },
  {
    img: Img16,
  },
  {
    img: Img17,
  },
  {
    img: Img18,
  },
  {
    img: Img19,
  },
  {
    img: Img20,
  },
  {
    img: Img21,
  },
  {
    img: Img22,
  },
];

const Univercity = () => {
  return (
    <div className="section univercity-card">
      <h1>Find Your Dream University to study in UK</h1>
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
