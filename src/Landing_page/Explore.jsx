import "./index.css";
import Counselling from "../assets/Home_page/Icon1.webp";
import Selection from "../assets/Home_page/Icon2.webp";
import Processing from "../assets/Home_page/Icon3.webp";
import Assistance from "../assets/Home_page/Icon4.webp";
import Advice from "../assets/Home_page/Icon5.webp";
import Loan from "../assets/Home_page/Icon6.webp";
import Departure from "../assets/Home_page/Icon8.webp";
import Gudiance from "../assets/Home_page/Icon7.webp";

const Explore = () => {
  return (
    <>
    <div className="section Services-container">
      <p>Services <span>We Offer</span></p>
      <div className="services-card-container section">
        <div className="services-card">
          {/* <img src="https://strapi.orientspectra.com/uploads/8_77a900c582.webp" alt="Counselling" loading="lazy"/> */}
          <img src={Counselling} alt="Counselling" loading="lazy"/>
          <p>Free Expert Counselling</p>
        </div>
        <div className="services-card">
          {/* <img src="https://strapi.orientspectra.com/uploads/4_Country_nad_course_selection_y_9efd845f4c.webp" alt="Country" loading="lazy"/> */}
          <img src={Selection} alt="Country" loading="lazy"/>
          <p>Country & Course Selection</p>
        </div>
        <div className="services-card">
          {/* <img src="https://strapi.orientspectra.com/uploads/3_Application_4fa761f059.webp" alt="Application" loading="lazy"/> */}
          <img src={Processing} alt="Application" loading="lazy"/>
          <p>Application Processing</p>
        </div>
        <div className="services-card">
          {/* <img src="https://strapi.orientspectra.com/uploads/2_Admission_e4e2f5749b.webp" alt="Admission" loading="lazy"/>i */}
          <img src={Assistance} alt="Admission" loading="lazy"/>
          <p>Admission Assistance</p>
        </div>
        <div className="services-card">
          {/* <img src="https://strapi.orientspectra.com/uploads/7_m_Scholarshi_a05f01af4a.webp" alt="Scholarship" loading="lazy"/> */}
          <img src={Advice} alt="Scholarship" loading="lazy"/>
          <p>Scholarship Advice</p>
        </div>
        <div className="services-card">
          {/* <img src="https://strapi.orientspectra.com/uploads/1_removebg_1_65d45718a3.webp" alt="Education" loading="lazy"/> */}
          <img src={Loan} alt="Education" loading="lazy"/>
          <p>Education Loan Support</p>
        </div>
        <div className="services-card">
          {/* <img src="https://strapi.orientspectra.com/uploads/5_posspor_58d41bc193.webp" alt="Visa" loading="lazy"/> */}
          <img src={Gudiance} alt="Visa" loading="lazy"/>
          <p>Visa Process Guidance</p>
        </div>
        <div className="services-card">
          {/* <img src="https://strapi.orientspectra.com/uploads/6_pre_departur_aeabd5a6a1.webp" alt="Pre-departure" loading="lazy"/> */}
          <img src={Departure} alt="Pre-departure" loading="lazy"/>
          <p>Pre-Departure Prep</p>
        </div>
    </div>
    </div>
  
    </>
  );
};

export default Explore;
