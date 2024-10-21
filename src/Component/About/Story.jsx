import FormatQuoteSharpIcon from "@mui/icons-material/FormatQuoteSharp";
import BarLabel from "./Barchart";
import CircleArrow from "../Common/CircleArrow";
import "./about.css";

const Story = () => {
  return (
    <div className="story-containers section">
      <h1>This Is Us</h1>
      <div className="storytext-card">
        <p>
          Founded in 2005, Orient Spectra boasts 19 years of expertise in
          overseas education consultancy. As one of Hyderabad's leading firms,
          we partner with over 500+ universities globally, ensuring students
          access top-tier educational opportunities worldwide.
        </p>
        <h3>Our Story</h3>
      </div>
      <div className="story-spectra-card">
        <div className="stroy-left-card">
          <img src="https://strapi.orientspectra.com/uploads/images_2_f38130d7b2.webp" alt="Quotes" />
        </div>
        <div className="stroy-center-card">
          <div className="quoet-image">
            {/* <img src={Quote} alt="" /> */}
            <FormatQuoteSharpIcon className=" FormatQuoteSharpBlue" />
          </div>
          <p>
            Orient Spectra is committed to providing personalized guidance and
            support to each student, helping them find the perfect match for
            their academic and professional goals
          </p>
        </div>
        <div className="stroy-right-card">
          <CircleArrow />
        </div>
      </div>

      <h1>Until Now</h1>
      <div className="storytext-card">
        <p>
          At Orient Spectra, we are dedicated to transforming your dreams of
          studying abroad into a reality. As a premier overseas education
          consultancy in Hyderabad. <br /> <br />
          We provide personalized guidance and comprehensive support to students
          aspiring to pursue Overseas education in top-tier international
          universities. With our expert advisors, extensive network, and
          unwavering commitment to excellence, your journey to studying abroad
          begins here
        </p>
        <h3>Our progress</h3>
      </div>

      <div className="success-admit-container">
        <div className="success-card studentCradVuea">
          <h1>15000+ </h1>
          <p>Student Visas Processed </p>
        </div>
        <div className="Successful-Admits-card">
          <div className="grafimage-cards">
            <BarLabel />
          </div>
          <p>
            Successful <br />
            Admits
          </p>
        </div>
        <div className=" Expertise ">
          <h1>19+</h1>
          <p>Years of Expertise </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
