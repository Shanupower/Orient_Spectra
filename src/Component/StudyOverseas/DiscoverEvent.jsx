import { Chrono } from "react-chrono";
import React, { useEffect, useState, useRef } from "react";
import Video from "../../assets/About/LineAnim_startYourJourney.mp4";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";
import LineAnimation from "../../assets/Country/LineAnim_StartYourJourney (1).json";
import "./StudyOverseas.css";
import { height } from "@mui/system";
const DiscoverEvent = () => {
  const lottiee = React.useRef(null);
  React.useEffect(() => {
    lottiee.current.addEventListener("load", function (e) {
      create({
        mode: "scroll",
        player: "#firstLottie",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 181],
          },
        ],
      });
    });
  }, [lottiee]);
  console.log("LineAnimation", LineAnimation);
  return (
    <div className="Discover-container section">
      <div className="discover-left-card">
        {/* <video src={Video} className="VideoCard" muted autoplay loop controls /> */}
        <lottie-player
          ref={lottiee}
          id="firstLottie"
          controls
          mode="scroll"
          // src={"https://assets3.lottiefiles.com/packages/lf20_XZ3pkn.json"}
          src={LineAnimation}
          style={{ width: "100%", height: "100%" }}
        ></lottie-player>
      </div>
      <div className="discoverRight-card">
        <Chrono
          disableToolbar="true"
          theme={{
            primary: "#1f7aff",
            titleColor: "black",
          }}
          mode="VERTICAL"
          borderLessCards={false}
          cardHeight={210}
        >
          <div className="research-card">
            <span>Counselling </span>
            <h2>Get Expert Advice from our Counsellors</h2>
            <p>
              Take the pivotal first step and engage in a personalized
              conversation with our expert mentors
            </p>
          </div>
          <div className="research-card">
            <span>Shortlisting</span>
            <h2>Find your Right-Fit Universities and Courses</h2>
            <p>
              Share your profile, and let our tools recommend the best-matched
              universities and courses for you
            </p>
          </div>

          <div className="research-card">
            <span>Test Prep</span>
            <h2>Ace IELTS, TOEFL and other standardized tests</h2>
            <p>
              Get comprehensive test preparation with live classes and free
              demos from our certified teachers at Lever - age Live for IELTS,
              TOEFL, PTE, GMAT, GRE and SAT
            </p>
          </div>
          <div className="research-card">
            <span>Visa & Travel Guidance</span>
            <h2>Prepare for a smooth journey</h2>
            <p>
              Secure your visa with VFS OneVasco’s world-re - nowned service and
              enjoy exclusive benefits from our international travel partners
            </p>
          </div>
          <div className="research-card">
            <span>Soar into the skies</span>
            <h2>Pre Departure Briefing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod
            </p>
          </div>
        </Chrono>
      </div>
    </div>
  );
};

export default DiscoverEvent;
