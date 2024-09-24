import Img1 from "../../../assets/Country/conc.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import { Univercitydata } from "../../../Container/data/Universities";
const Univercity = () => {
  return (
    <div className="section univercity-card">
      <h1>Find Your Dream University to Study<span> in Switzerland</span></h1>
      <div className="univercity-section-card">
        {Univercitydata.map((item) => (
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
    </div>
  );
};

export default Univercity;
