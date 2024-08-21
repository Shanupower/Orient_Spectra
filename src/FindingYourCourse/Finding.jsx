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
import CircleArrow from "../Component/Common/CircleArrow";
import { NavLink } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { useState, useMemo, useEffect } from "react";
import "./find.css";

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
        With access to a vast database of universities and courses worldwide, we provide comprehensive information 
        about various programs, including curriculum details, admission requirements, and career prospects.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: " Expert Advice",
    children: (
      <p className="textContent">
        Our counselors are seasoned professionals with years of experience in the field of overseas education. 
        They stay updated with the latest trends and developments in the education sector to offer you the most 
        relevant and up-to-date advice.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Streamlined Process",
    children: (
      <p className="textContent">
        Navigating the application process can be overwhelming, especially for international students. 
        Our counselors streamline the entire process, from shortlisting universities to preparing application 
        materials, to make it as smooth and hassle-free as possible
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
        Based on the information gathered during the consultation, our counselors conduct a thorough assessment of 
        your profile to identify suitable courses and universities that match your criteria.

      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "Guided Exploration",
    children: (
      <p className="textContent">
        We provide you with detailed insights into various courses, including information about the curriculum, 
        faculty, facilities, and campus life. Our counselors guide you through this exploration process to help 
        you make well-informed decisions.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Application Assistance",
    children: (
      <p className="textContent">
        Once you've identified your preferred courses and universities, we assist you in preparing your application materials, 
        including essays, resumes, and recommendation letters. We also provide guidance on standardized tests such as the GRE, 
        GMAT, TOEFL, and IELTS.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Post-Application Support",
    children: (
      <p className="textContent">
        Our support doesn't end with the submission of your applications. We continue to assist you throughout the admission 
        process, including interview preparation, scholarship applications, and visa guidance
      </p>
    ),
    style: panelStyle,
  },
];
const capName = "Finding Your";
const capSecondName = "Course";
const capDescription =
  " At Orient Spectra, we understand that choosing the right course for your academic and professional goals can be a daunting task. That's why we offer expert guidance and counseling services to help you navigate through the myriad of options available to you. With our experienced counselors by your side, you can make informed decisions that align with your interests, abilities, and aspirations.";

const Finding = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* FIND YOUR COURSE COMPONENT */}
      <FYC
        capName={capName}
        capDescription={capDescription}
        capSecondName={capSecondName}
      />

      <div className="find-cource-image-card section">
        <div className="image-card">
          {isLoading && (
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"100%"}
              height={"100%"}
              sx={{ bgcolor: "grey.500" }}
            />
          )}{" "}
          <img src="src\assets\Explore our Capabilities\Finding your course\Main Image.jpg" />
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
          {/* <LandscapeIcon className="LandscapeIconIcon2" /> */}
          <img src="src\assets\Explore our Capabilities\Finding your course\Our Approach.jpg" />
        </div>
      </div>

      {/* LAST ACCORDION */}
      <FindingAccordion getItems={getItems2} />

      <div className="other-capabilities-container section">
        <h1>Other Capabilities</h1>
        <div className="capabilities-section">
          <div className="capabilities-card">
            <div className="cap-image-card">
              <img
                style={{ objectFit: "cover" }}
                src="src\assets\Explore our Capabilities\Coaching\Services image.jpg"
                alt="Coaching"
              />
              <NavLink style={{ color: "black" }} to={"/Coaching"}>
                <CircleArrow className="CircleArrowButton" />
              </NavLink>
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
              <img
                style={{ objectFit: "cover" }}
                src="src\assets\Explore our Capabilities\Mentorship\How it works.jpg"
                alt="Mentorship"
              />
              <NavLink style={{ color: "black" }} to={"/Mentorship"}>
                <CircleArrow className="CircleArrowButton" />
              </NavLink>
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
