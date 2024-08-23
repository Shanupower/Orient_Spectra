import React, { useEffect, useRef } from "react";
import { create } from "@lottiefiles/lottie-interactivity";
import lottie from "lottie-web";
import Step1Lottie from "../../../assets/study-overseas/StudyOverseas_Responsive_02.json";

import ".././StudyOverseas.css";
const Step2 = () => {
  const lottieContainer = useRef(null);

  useEffect(() => {
    if (lottieContainer.current) {
      const lottieInstance = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: Step1Lottie,
      });

      create({
        mode: "scroll",
        player: lottieInstance,
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 42],
          },
        ],
      });

      lottieInstance.addEventListener("complete", () => {
        // Removed pause() to keep animation visible after completion
      });

      return () => {
        lottieInstance.removeEventListener("complete", () => {});
        lottieInstance.destroy();
      };
    }
  }, []);

  return (
    <div className="step1-lottie-container">
      <div className="step1-card">
        <div className="step1-lottieContainer-card" ref={lottieContainer}></div>
      </div>
      <div className="step1-lottiie-content">
        <p>Counselling</p>
        <h1>Get Expert Advice from our Counsellors</h1>
        <span>
          Take the pivotal first step and engage in a personalized conversation
          with our expert mentors
        </span>
      </div>
    </div>
  );
};

export default Step2;
