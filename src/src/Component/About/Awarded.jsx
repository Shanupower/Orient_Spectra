import Divider from "../Common/Divider";
import Img1 from "../../assets/About/bc-logo.png";
import Img2 from "../../assets/About/ICEF-agency-status-for-orient-spectra.jpg";
import Img3 from "../../assets/About/ielts-logo.png";
import Img4 from "../../assets/About/pte-logo-e1629138162444.jpg";
import "./about.css";

const AwardedData = [
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
];
const Awarded = () => {
  return (
    <div className="awarded-container section">
      <div className="founders-card">
        <h1>Awarded</h1>
        <p>Foreign Education Consultancy - Accreditations</p>
      </div>
      <Divider />
      <div className="awarded-section">
        {AwardedData.map((item,index) => (
          <div className="awarded-card" key={index}>
            <div className="awarded-image">
              <img src={item.img} alt="" />
            </div>
          </div>  
        ))}
      </div>
    </div>
  );
};

export default Awarded;
