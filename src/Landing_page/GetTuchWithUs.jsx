import Img6 from "../assets/Home_page/Assets_4.webp";
import Img7 from "../assets/Home_page/Assets_3.webp";
import Img8 from "../assets/Home_page/Assets_2.webp";
import Img9 from "../assets/Home_page/Assets_1.webp";
import Button from "../Component/Common/Button";
import { motion } from "framer-motion";

import useInViewport from "../Component/Hooks/useInViewport";
import "./index.css";

const GetTuchWithUs = () => {
  const isAnimated = useInViewport();
  return (
    <>
      <motion.div
        className="GetContterCard"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="section GetInTouch">
          <div className="studySection useInViewcard">
            <p>
              We’re Recognized Overseas <br />
              Education Consultants
            </p>
          </div>
          <Button
            arrow={true}
            className={`GetTuchArrow ${isAnimated ? "buttonfadeIn" : ""}`}
            link="/start-your-journey"
          />
        </div>
      </motion.div>
      <div className="foreignAcedemic section">
        <p>
          Foreign Education Consultancy - <span>Accreditations</span>
        </p>
        <div className="foreignAcedemic_marquee">
          <div className="foreignAcedemic_image_container">
            {/* <img src="https://strapi.orientspectra.com/uploads/Asset_4_2x_5_89df66b2f3.webp"  */}
            <img src={Img6} alt="Asset 24" loading="lazy"/>
          </div>
          <div className="foreignAcedemic_image_container">
            {/* <img src="https://strapi.orientspectra.com/uploads/Asset_2_2x_34ea0388b6.webp" alt="IELTS" loading="lazy" /> */}
            <img src={Img7} alt="IELTS" loading="lazy" />
          </div>
          <div className="foreignAcedemic_image_container">
            {/* <img
              src="https://strapi.orientspectra.com/uploads/British_Council_full_85e3019ee3.webp"
              alt="British Council" loading="lazy"
            /> */}
            <img src={Img8} alt="British Council" loading="lazy"
            />
          </div>
          <div className="foreignAcedemic_image_container">
            {/* <img src="https://strapi.orientspectra.com/uploads/Asset_3_2x_36f8d34b7c.webp" alt="PTE" loading="lazy"/> */}
            <img src={Img9} alt="PTE" loading="lazy"/>

          </div>
        </div>
      </div>
    </>
  );
};

export default GetTuchWithUs;
