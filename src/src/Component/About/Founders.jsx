import FormatQuoteSharpIcon from "@mui/icons-material/FormatQuoteSharp";
import Divider from "../Common/Divider";
import LandscapeIcon from "@mui/icons-material/Landscape";
import FounderImage from "../../assets/About/fk7shE2M.jpeg";

import "./about.css";
const Founders = () => {
  return (
    <div className="Founders-connatiner  section">
      <div className="founders-card">
        <h1>Founders</h1>
        <p>Orient Spectra Overseas Education empowers students globally </p>
      </div>
      <Divider />
      <div className="founder-container">
        <div className="founder-card">
          <div className="founderImage_card">
            <img src={FounderImage} alt="" />
          </div>
          <h1>Srinivas Goud Nandaram</h1>
          <span>Co-Founder</span>
        </div>
        <div className="Quotation-card">
          <FormatQuoteSharpIcon className="FormatQuoteSharpIcon" />
          <p>
            Orient Spectra Overseas Education empowers students globally,
            fostering transformative education experiences. We guide students to
            achieve their study abroad dreams, equipping them for success in our
            interconnected world.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founders;
