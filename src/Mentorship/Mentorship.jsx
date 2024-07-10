// ALL THE COMPONENTS IN SIDE THIS PAGE ARE WITHIN SAME DIRECTORY
// IF YOU WANT TO MAKE CHANGES YOU CAN DO IT

import React from "react";
import Navbar from "../Component/Common/Navbar";
// import FYC from "./FYC";
import FYC from "../FindingYourCourse/FYC";

// import { Container, Typography, Box, Button } from "@mui/material";
import "../Component/About/about.css";
import FindingAccordion from "../FindingYourCourse/FindingAccordion";
// import FindingAccordion from "./FindingAccordion";
import GetStartedToday from "../FindingYourCourse/GetStartedToday";
// import GetStartedToday from "./GetStartedToday";
import LandscapeIcon from "@mui/icons-material/Landscape";
import "../FindingYourCourse/find.css";
// import "./find.css";
import CircleArrow from "../Component/Common/CircleArrow";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Footer from "../Component/Common/Footer";
// DATA FOR ACCORDION
const getItems = (panelStyle) => [
  {
    key: "1",
    label: "Personalized Approach",
    children: (
      <p className="textContent">
        We recognize that each student’s situation is unique. Our counselors
        provide personalized guidance tailored to your specific needs and
        circumstances. • From choosing the right course and institution to
        preparing your visa application, we are with you every step of the way.
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
        We understand that every student is unique, with their own aspirations,
        strengths, and challenges. That's why our mentors take the time to get
        to know you personally, tailoring their guidance to your specific needs
        and goals.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: " Expert Advice",
    children: (
      <p className="textContent">
        Our mentors are highly experienced professionals who have themselves
        studied abroad and navigated the complexities of the application
        process. They have firsthand knowledge of the challenges you may face
        and can offer valuable insights and advice to help you overcome them.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Comprehensive Support",
    children: (
      <p className="textContent">
        From choosing the right course and university to preparing your
        application materials and securing scholarships, our mentors are here to
        support you every step of the way. No question is too big or too small –
        we're here to help you succeed.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: "Continuous Assistance",
    children: (
      <p className="textContent">
        Our mentorship doesn't end once you've been accepted to a university. We
        continue to support you throughout your time abroad, offering guidance
        on academic and personal challenges and helping you make the most of
        your study abroad experience.{" "}
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
        We start by getting to know you and your goals through an initial
        consultation. This allows us to understand your academic background,
        interests, and aspirations, so we can tailor our guidance to your needs
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "Personalized Plan",
    children: (
      <p className="textContent">
        {" "}
        Based on our initial consultation, we create a personalized mentorship
        plan outlining the steps you need to take to achieve your goals. Whether
        you're in the early stages of planning or ready to submit your
        applications, we'll provide guidance and support every step of the way.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "Regular Check-Ins",
    children: (
      <p className="textContent">
        Throughout your journey, we'll schedule regular check-ins to review your
        progress, answer any questions you may have, and provide additional
        support as needed. We're always just a phone call or email away.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Ongoing Support",
    children: (
      <p className="textContent">
        Even after you've started your studies abroad, our mentors will continue
        to be available to offer guidance and support whenever you need it.
        Whether you're struggling with coursework, adjusting to life in a new
        country, or planning your next steps after graduation, we're here to
        help.
      </p>
    ),
    style: panelStyle,
  },
  // {
  //   key: "5",
  //   label: "Post-Application Support",
  //   children: (
  //     <p className="textContent">
  //       Most universities require international students to demonstrate English
  //       proficiency through tests such as TOEFL or IELTS. Minimum score
  //       requirements vary by institution.
  //     </p>
  //   ),
  //   style: panelStyle,
  // },
];
const capName = "Mentorship";

const capDescription =
  "At Orient Spectra, we believe in the power of mentorship to guide students towards their academic and professional goals. Our mentorship program is designed to provide personalized guidance and support to students at every step of their journey towards studying abroad. Whether you are just starting to explore your options or preparing to embark on your study abroad adventure, our team of experienced mentors is here to help you succeed";
const Finding = () => {
  return (
    <>
      <Navbar />
      {/* FIND YOUR COURSE COMPONENT */}
      <FYC capName={capName} capDescription={capDescription}/>

      <div className="find-cource-image-card section">
        <div className="image-card">
          {/* <LandscapeIcon className="LandscapeIconIcon2" /> */}
          <img src="src\assets\Explore our Capabilities\Mentorship\Main image.jpg"/>
        </div>
      </div>
      <div className="whywechoose-card section">
        <h1 className="whywechoose-card-title">What sets our</h1>
        <p>mentorship program apart?</p>
      </div>

      {/* FIRST ACCORDION */}
      <FindingAccordion getItems={getItems} />
      <div className="story-container section">
        <div className="story-leftcard">
          <p>The Plan</p>
          <div>
            <h2>How our</h2>
            <h1>mentorship program works</h1>
          </div>
        </div>
        <div className="story-rightcard">
          {/* <LandscapeIcon className="LandscapeIconIcon2" /> */}
          <img src="src\assets\Explore our Capabilities\Mentorship\How it works.jpg"/>
        </div>
      </div>

      {/* LAST ACCORDION */}
      <FindingAccordion getItems={getItems2} />

      <div className="other-capabilities-container section">
        <h1>Other Capabilities</h1>
        <div className="capabilities-section">
          <div className="capabilities-card">
            <div className="cap-image-card ">
            <img style={{objectFit:"cover"}} src="src\assets\Explore our Capabilities\Coaching\Services image.jpg" alt="Coaching"/> 
              <NavLink style={{color:"black"}} to={'/Coaching'}>
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
            <div className="cap-image-card ">
            <img style={{objectFit:"cover"}} src="src\assets\Explore our Capabilities\Finding your course\Our Approach.jpg" alt="Finding your course"/>

              <NavLink style={{color:"black"}} to={'/FindYourCourse'}>
              <CircleArrow className="CircleArrowButton" />
              </NavLink>
            </div>
            <h1>Find Your Course</h1>
            <p>
              At Orient Spectra Overseas Education Consultancy, your success is
              our priority. Trust us to guide you through the student visa
              process with expertise and care.
            </p>
          </div>
        </div>
      </div>
      <GetStartedToday />
      <Footer/>
      
    </>
  );
};

export default Finding;
