import FormatQuoteSharpIcon from "@mui/icons-material/FormatQuoteSharp";
import Divider from "../Common/Divider";
import LandscapeIcon from "@mui/icons-material/Landscape";
import FounderImage from "../../assets/About/fk7shE2M.jpeg";

import "./about.css";
const Founders = () => {
  return (
    <div className="Founders-connatiner  section">
      <div className="founders-card">
        <h1>Leadership</h1>
      </div>
      <div className="founder-container1">
      <div className="founder-container-section">
        <div className="founder-card">
          <div className="founderImage_card">
            <img src="https://strapi.orientspectra.com/uploads/fk7sh_E2_M_f57122c778.webp" alt="Founder Image" />
          </div>
        </div>
        <div className="Quotation-card">
          <span>Founder</span>
          <h1>Srinivas Goud Nandaram</h1>
          <p>
          Motivated by a deep faith in education's
          transformational potential, Mr. N. Srinivas Goud
          has dedicated nearly twenty years of his life to
          transforming dreams into reality. As the founder
          and Managing Director of Orient Spectra
          Consulting Pvt Ltd, which was founded in 2005, he
          has led an organization that has not only created
          opportunities but also grown to be a ray of hope
          for students who aspire to study overseas.{" "}
          <br/>
          <br/>
          Mr. Goud embarked on his journey with a
          powerful vision: to democratize access to quality
          education for every student, regardless of their
          background.His mission to create one million
          success stories through counseling is not just an
          ambitious goal but a deeply personal
          commitment.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Founders;
