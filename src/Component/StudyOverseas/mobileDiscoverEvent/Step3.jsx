import React, { useEffect, useRef, useState } from "react";
import { create } from "@lottiefiles/lottie-interactivity";
import lottie from "lottie-web";

import ".././StudyOverseas.css";

const Step3 = () => {
  const lottieContainer = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the JSON data for the animation
    fetch(
      "https://strapi.orientspectra.com/uploads/Study_Overseas_Responsive_03_dbef2dae14.json"
    )
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation data:", error));
  }, []);

  useEffect(() => {
    if (lottieContainer.current && animationData) {
      const lottieInstance = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: animationData,
      });

      create({
        mode: "scroll",
        player: lottieInstance,
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 40],
          },
        ],
      });

      lottieInstance.addEventListener("complete", () => {
        lottieInstance.pause();
      });

      return () => {
        lottieInstance.removeEventListener("complete", () => {
          lottieInstance.pause();
        });
        lottieInstance.destroy();
      };
    }
  }, [animationData]); // Adding animationData as a dependency

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

export default Step3;
