import Button from "../Component/Common/Button";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./index.css";
import useInViewport from "../Component/Hooks/useInViewport";

const StudyAbroad = () => {
  const isAnimated = useInViewport();

  return (
    <>
      <motion.div
        id="study"
        initial="hidden"
        className="section StudyAbroad"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="studySection useInViewcard">
          <p>Get Expert Advice – <br/> Schedule Your Virtual Appointment</p>
          {/* <p className={`content ${isAnimated ? "animated" : ""}`}> With Us</p> */}
        </div>

        <Button
          text="Book An Appointment"
          className={`exploreButton ${isAnimated ? "buttonfadeIn" : ""}`}
          link="/start-your-journey"
        />
      </motion.div>
    </>
  );
};

export default StudyAbroad;
