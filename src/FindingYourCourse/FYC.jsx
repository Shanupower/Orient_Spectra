import Button from "../Component/Common/Button";
import { motion } from "framer-motion";

import useInViewport from "../Component/Hooks/useInViewport";
import "../index.css";
import "./find.css";
const FYC = ({ capName, capDescription, capSecondName }) => {
  const isAnimated = useInViewport();
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}>
        <div className="section StudyAbroad" style={{ marginBlock: "12rem 0" }}>
          <div className="studySection useInViewcard findHearing">
            {capName && capSecondName ? (<>
              <p>{capName}</p>{" "}
              <p>{capSecondName}</p>
              <p className={`Getcontent ${isAnimated ? "animated" : ""}`}></p>
              </>
              
            ) : (
              <>
                <p>{capName}</p>
                <p style={{marginLeft:100}} className={`Getcontent ${isAnimated ? "animated" : ""}`}>
                  
                </p>
              </>
            )}
          </div>
          <Button
            arrow={true}
            className={`GetTuchArrow ${isAnimated ? "buttonfadeIn" : ""}`}
          />
        </div>
        <div className="story-container findCOntent">
          <div className="storytext-card">
            {capName && capDescription ? (
              <p>{capDescription}</p>
            ) : (
              <p>
                {/* At Orient Spectra, we understand that choosing the right course
                for your academic and professional goals can be a daunting task.
                That's why we offer expert guidance and counseling services to
                help you navigate through the myriad of options available to
                you. With our experienced counselors by your side, you can make
                informed decisions that align with your interests, abilities,
                and aspirations. */}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FYC;
