import Img6 from "../assets/Asset 4@2x (5).png";
import Img7 from "../assets/Asset 2@2x.png";
import Img8 from "../assets/Asset 5@2x.png";
import Img9 from "../assets/Asset 3@2x.png";
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
            <img src="https://strapi.orientspectra.com/uploads/Asset_4_2x_5_89df66b2f3.webp" alt="Asset 24" />
          </div>
          <div className="foreignAcedemic_image_container">
            <img src="https://strapi.orientspectra.com/uploads/Asset_2_2x_34ea0388b6.webp" alt="IELTS" />
          </div>
          <div className="foreignAcedemic_image_container">
            <img
              src="https://strapi.orientspectra.com/uploads/British_Council_full_85e3019ee3.webp"
              alt="British Council"
            />
          </div>
          <div className="foreignAcedemic_image_container">
            <img src="https://strapi.orientspectra.com/uploads/Asset_3_2x_36f8d34b7c.webp" alt="PTE" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetTuchWithUs;
