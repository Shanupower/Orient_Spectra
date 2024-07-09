// ALL THE COMPONENTS IN SIDE THIS PAGE ARE WITHIN SAME DIRECTORY
// IF YOU WANT TO MAKE CHANGES YOU CAN DO IT

import React from "react";
import Navbar from "../Component/Common/Navbar";
import FYC from "../FindingYourCourse/FYC";
import { Container, Typography, Box, Button } from "@mui/material";
import "../Component/About/about.css";
// import FindingAccordion from "./FindingAccordion";
import FindingAccordion from "../FindingYourCourse/FindingAccordion";
import GetStartedToday from "../FindingYourCourse/GetStartedToday";
// import GetStartedToday from "../GetStartedToday";
import LandscapeIcon from "@mui/icons-material/Landscape";
import "../FindingYourCourse/find.css";
import CircleArrow from "../Component/Common/CircleArrow";
import { NavLink } from "react-router-dom";

// DATA FOR ACCORDION
const getItems = (panelStyle) => [
  {
    key: "1",
    label: "Coaching and Guidance for Student Visas",
    children: (
      <p className="textContent">
        At Orient Spectra Overseas Education Consultancy, we understand that
        obtaining a student visa can be a challenging and intricate process. Our
        mission is to make this journey as smooth and stress-free as possible
        for you. With our expert guidance and experienced counselors, we offer
        comprehensive support to help you secure your student visa and embark on
        your educational journey abroad.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "Comprehensive Support",
    children: (
      <p className="textContent">
        {" "}
        • Document Preparation: Assistance with gathering and organizing all
        necessary documents to ensure your application is complete and meets all
        requirements.
        • Application Assistance: Step-by-step support in filling
        out visa application forms correctly to avoid any errors or omissions. 
        • Interview Preparation: Coaching to prepare you for visa interviews,
        including mock interviews to build your confidence and improve your
        chances of success.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: " Experienced Counselors",
    children: (
      <p className="textContent">
        • Our counselors have years of experience in the field of overseas education and student visa applications.
        • They have successfully helped numerous students achieve their dreams of studying abroad.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: " Proven Track Record:",
    children: (
      <p className="textContent">
       • We pride ourselves on our high success rate in securing student visas for our clients.
       • Testimonials from our satisfied students attest to our commitment and effectiveness.
      </p>
    ),
    style: panelStyle,
  },
];

const getItems2 = (panelStyle) => [
  {
    key: "1",
    label: "Visa Application Process",
    children: (
      <p className="textContent">
      Detailed guidance on the entire visa application process.
      Assistance with understanding and fulfilling visa requirements for various countries.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "Financial Guidance",
    children: (
      <p className="textContent">
        {" "}
        Advice on financial documentation and proof of funds required for the visa application.
        Information on scholarships and financial aid opportunities.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "Pre-Departure Orientation",
    children: (
      <p className="textContent">
       Sessions to prepare you for life abroad, covering cultural adaptation, accommodation, travel arrangements, and 
       more.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Post-Visa Services",
    children: (
      <p className="textContent">
      Continued support even after you receive your visa, including assistance with accommodation and settling into 
      your new environment.
      </p>
    ),
    style: panelStyle,
  },
  // {
  //   key: "4",
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
const capName = "Coaching and Guidance ";
const capSecondName="for Student Visas"
const capDescription ="At Orient Spectra Overseas Education Consultancy, we understand that obtaining a student visa can be a challenging and intricate process. Our mission is to make this journey as smooth and stress-free as possible for you. With our expert guidance and experienced counselors, we offer comprehensive support to help you secure your student visa and embark on your educational journey abroad."
const Coaching = () => {
  return (
    <>
      <Navbar />
      {/* FIND YOUR COURSE COMPONENT */}
      <FYC capDescription={capDescription} capName={capName} capSecondName={capSecondName} />

      <div className="find-cource-image-card section">
        <div className="image-card">
          {/* <LandscapeIcon className="LandscapeIconIcon2" /> */}
          <img src="src\assets\Explore our Capabilities\Coaching\Main Image.jpg"/>
        </div>
      </div>
      <div className="whywechoose-card section">
        <h1 className="whywechoose-card-title">Why Choose </h1>
        <p>Orient Spectra?</p>
      </div>

      {/* FIRST ACCORDION */}
      <FindingAccordion getItems={getItems} />
      <div className="story-container section">
        <div className="story-leftcard">
          <p>The Plan</p>
          <div>
            <h2>Our </h2>
            <h1> Services</h1>
          </div>
        </div>
        <div className="story-rightcard">
          <img src="src\assets\Explore our Capabilities\Coaching\Services image.jpg"/>
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
            <div className="cap-image-card">
              <NavLink style={{color:"black"}} to={'/Mentorship'}>
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

export default Coaching;
