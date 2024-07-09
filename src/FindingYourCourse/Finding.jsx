// ALL THE COMPONENTS IN SIDE THIS PAGE ARE WITHIN SAME DIRECTORY
// IF YOU WANT TO MAKE CHANGES YOU CAN DO IT

import React from "react";
import Navbar from "../Component/Common/Navbar";
import FYC from "./FYC";
import { Container, Typography, Box, Button } from "@mui/material";
import "../Component/About/about.css";
import FindingAccordion from "./FindingAccordion";
import GetStartedToday from "./GetStartedToday";
import LandscapeIcon from "@mui/icons-material/Landscape";
import "./find.css";
import CircleArrow from "../Component/Common/CircleArrow";
// DATA FOR ACCORDION
const getItems = (panelStyle) => [
  {
    key: "1",
    label: "Personalized Approach",
    children: (
      <p className="textContent">
        Our counselors take the time to understand your unique strengths,
        interests, and career goals. We tailor our guidance to ensure that you
        find a course that not only matches your academic preferences but also
        sets you on the path to success.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "Comprehensive Information",
    children: (
      <p className="textContent">
        {" "}
        The most common student visas are the F-1 visa for academic studies and
        the J-1 visa for exchange programs. The M-1 visa is for vocational or
        non-academic programs.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: " Expert Advice",
    children: (
      <p className="textContent">
        : Standardized tests like the SAT, ACT, GRE, and GMAT are important as
        they are often required by universities as part of the admissions
        process. However, their importance can vary by institution and program
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Streamlined Process",
    children: (
      <p className="textContent">
        Most universities require international students to demonstrate English
        proficiency through tests such as TOEFL or IELTS. Minimum score
        requirements vary by institution.
      </p>
    ),
    style: panelStyle,
  },
];

const getItems2 = (panelStyle) => [
  {
    key: "1",
    label: "Initial Consultation",
    children: (
      <p className="textContent">
        We begin by scheduling an initial consultation session where you can
        discuss your academic background, career aspirations, and preferences
        with one of our counselors.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "Assessment and Analysis",
    children: (
      <p className="textContent">
        {" "}
        The most common student visas are the F-1 visa for academic studies and
        the J-1 visa for exchange programs. The M-1 visa is for vocational or
        non-academic programs.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "Guided Exploration",
    children: (
      <p className="textContent">
        : Standardized tests like the SAT, ACT, GRE, and GMAT are important as
        they are often required by universities as part of the admissions
        process. However, their importance can vary by institution and program
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Application Assistance",
    children: (
      <p className="textContent">
        Most universities require international students to demonstrate English
        proficiency through tests such as TOEFL or IELTS. Minimum score
        requirements vary by institution.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Post-Application Support",
    children: (
      <p className="textContent">
        Most universities require international students to demonstrate English
        proficiency through tests such as TOEFL or IELTS. Minimum score
        requirements vary by institution.
      </p>
    ),
    style: panelStyle,
  },
];

const Finding = () => {
  return (
    <>
      <Navbar />
      {/* FIND YOUR COURSE COMPONENT */}
      <FYC />

      <div className="find-cource-image-card section">
        <div className="image-card">
          <LandscapeIcon className="LandscapeIconIcon2" />
        </div>
      </div>
      <div className="whywechoose-card section">
        <h1 className="whywechoose-card-title">Why Choose Orient Spectra</h1>
        <p>for Course Selection?</p>
      </div>

      {/* FIRST ACCORDION */}
      <FindingAccordion getItems={getItems} />
      <div className="story-container section">
        <div className="story-leftcard">
          <p>The Plan</p>
          <div>
            <h2>Our Approach to</h2>
            <h1>Course Selection</h1>
          </div>
        </div>
        <div className="story-rightcard">
          <LandscapeIcon className="LandscapeIconIcon2" />
        </div>
      </div>

      {/* LAST ACCORDION */}
      <FindingAccordion getItems={getItems2} />

      <div className="other-capabilities-container section">
        <h1>Other Capabilities</h1>
        <div className="capabilities-section">
          <div className="capabilities-card">
            <div className="cap-image-card">
              <CircleArrow className="CircleArrowButton" />
            </div>
            <h1>Coaching</h1>
            <p>
              Obtaining a student visa can be challenging, but our mission is to
              make it smooth and stress-free. With expert guidance and
              experienced counselors, we provide comprehensive support to help
              you secure your visa and begin your educational journey abroad.
            </p>
          </div>
          <div className="capabilities-card">
            <div className="cap-image-card">
              <CircleArrow className="CircleArrowButton" />
            </div>
            <h1>Mentorship</h1>
            <p>
              At Orient Spectra Overseas Education Consultancy, your success is
              our priority. Trust us to guide you through the student visa
              process with expertise and care.
            </p>
          </div>
        </div>
      </div>
      <GetStartedToday />
    </>
  );
};

export default Finding;