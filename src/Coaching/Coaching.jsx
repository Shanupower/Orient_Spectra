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
import { useState, useEffect } from "react";

import Skeleton from "@mui/material/Skeleton";

// DATA FOR ACCORDION
const getItems = (panelStyle) => [
  {
    key: "1",
    label: "Expert Guidance",
    children: (
      <p className="text-content">
      <ul>
        <li> Our team consists of highly qualified professionals with extensive
        knowledge of visa procedures for various countries. </li>
        
        <li> We stay updatedwith the latest changes in visa policies and requirements, ensuring that
        you receive accurate and timely advice.</li>
      </ul>
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: " Personalized Counseling",
    children: (
      <p className="text-content">
        <ul>
        {" "}
        <li> We recognize that each student’s situation is unique. Our counselors
        provide personalized guidance tailored to your specific needs and
        circumstances. </li> 
        <li> From choosing the right course and institution to
        preparing your visa application, we are with you every step of the way.</li>
        </ul>
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: " Comprehensive Support:",
    children: (
      <p className="text-content">
        <ul>
        <li>Document Preparation: Assistance with gathering and organizing all
        necessary documents to ensure your application is complete and meets all
        requirements. </li>
        <li> Application Assistance: Step-by-step support in filling
        out visa application forms correctly to avoid any errors or omissions.</li> 
        <li>Interview Preparation: Coaching to prepare you for visa interviews,
        including mock interviews to build your confidence and improve your
        chances of success.</li>
        </ul>
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: " Experienced Counselors",
    children: (
      <p className="text-content">
        <ul>
       <li> Our counselors have years of experience in the field of overseas
        education and student visa applications.</li>
        <li> They have successfully helped
        numerous students achieve their dreams of studying abroad.</li></ul>
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: " Proven Track Record",
    children: (
      <p className="text-content">
        <ul>
        <li>We pride ourselves on our high success rate in securing student visas
        for our clients.</li> 
        <li> Testimonials from our satisfied students attest to
        our commitment and effectiveness.</li>
        </ul>
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
      <p className="text-content">
        <ul>
        <li>Detailed guidance on the entire visa application process.</li>
        <li>Assistance
        with understanding and fulfilling visa requirements for various
        countries.</li>
        </ul>
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "Financial Guidance",
    children: (
      <p className="text-content">
        {" "}
        <ul>
        <li>Advice on financial documentation and proof of funds required for the
        visa application.</li> 
        <li>Information on scholarships and financial aid
        opportunities.</li>
        </ul>
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "Pre-Departure Orientation",
    children: (
      <p className="textContent">
        Sessions to prepare you for life abroad, covering cultural adaptation,
        accommodation, travel arrangements, and more.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Post-Visa Services",
    children: (
      <p className="textContent">
        Continued support even after you receive your visa, including assistance
        with accommodation and settling into your new environment.
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
const capName = "Coaching ";
// const capSecondName="for Student Visas"
const capDescription =
  "At Orient Spectra Overseas Education Consultancy, we understand that obtaining a student visa can be a challenging and intricate process. Our mission is to make this journey as smooth and stress-free as possible for you. With our expert guidance and experienced counselors, we offer comprehensive support to help you secure your student visa and embark on your educational journey abroad.";
const Coaching = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {/* FIND YOUR COURSE COMPONENT */}
      <FYC capDescription={capDescription} capName={capName} />

      <div className="find-cource-image-card section">
        <div className="image-card">
          {/* <LandscapeIcon className="LandscapeIconIcon2" /> */}
          {isLoading && (
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"100%"}
              height={"100%"}
              sx={{ bgcolor: "grey.500" }}
            />
          )}{" "}
          <img src="src\assets\Explore our Capabilities\Coaching\Main Image.jpg" />
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
          <img src="src\assets\Explore our Capabilities\Coaching\Services image.jpg" />
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
              <img
                style={{ objectFit: "cover" }}
                src="src\assets\Explore our Capabilities\Finding your course\Our Approach.jpg"
                alt="Finding your course"
              />
              <NavLink style={{ color: "black" }} to={"/FindYourCourse"}>
                <CircleArrow className="CircleArrowButton" />
              </NavLink>
            </div>
            <h1>Find Your Course</h1>
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

export default Coaching;
