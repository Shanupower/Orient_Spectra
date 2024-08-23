import React, { useState, useEffect } from "react";
import "./index.css";
import Banner1 from "../assets/Frame 6.png";
import Banner2 from "../assets/Property 1=Default.png";
import Banner3 from "../assets/Property 1=Default (1).png";

import { Tabs } from "antd";
import Button from "../Component/Common/Button";
const { TabPane } = Tabs;
const items = [
  {
    key: "1",
    label: "Diverse Courses",
    children: (
      <div className="course_container_innerDiv">
        <div className="course_container_inner_left">
          <h1>Reputed Overseas Education Consultancy in Hyderabad</h1>
          <p>
          Orient Spectra has a strong market reputation as overseas education consultants with over 20 years of experience. 
          We represent over 400 universities globally, including institutions in the UK, USA, Germany, France, Ireland and 
          Australia. We are known for our individualized approach, providing detailed attention and tailored advice to each 
          student, leveraging the extensive experience of our counsellors.
          </p>
          <Button text=" Find Your Course" arrow={true} />
        </div>
        <div className="course_container_inner_right">
          <img src={Banner1} alt="" />
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: "Global Perspective",
    children: (
      <div className="course_container_innerDiv">
        <div className="course_container_inner_left">
          <h1>Recognized by Global Universities</h1>
          <p>
          Orient Spectra is recognized by various international educational organizations, including The British 
          Council, IDP, and PTE, underscoring our credibility and adherence to high standards in overseas education 
          consulting. We have an in-house R&D center dedicated to exploring new educational opportunities and ensuring 
          that students have access to the latest information. We also facilitate direct interactions between students 
          and university representatives.
          </p>
          <Button text=" Find Your Course" arrow={true} />
        </div>
        <div className="course_container_inner_right">
          <img src={Banner2} alt="" />
        </div>
      </div>
    ),
  },
  {
    key: "3",
    label: "Seamless Experience",
    children: (
      <div className="course_container_innerDiv">
        <div className="course_container_inner_left">
          <h1>Offers an experience of a lifetime</h1>
          <p>
          Orient Spectra understands that studying abroad is more than just an academic pursuit—it's a transformative journey. 
          Our counsellors help you better immerse yourself in a new cultural and academic environment through access to a diverse 
          array of courses. With our expert guidance, your dream of pursuing international education becomes a well-crafted reality, 
          designed to elevate your academic and professional aspirations.
          </p>
          <Button text=" Find Your Course" arrow={true} />
        </div>
        <div className="course_container_inner_right">
          <img src={Banner3} alt="" />
        </div>
      </div>
    ),
  },
];

const Course = () => {
  const [activeKey, setActiveKey] = useState("1");

  useEffect(() => {
    const interval = setInterval(() => {
      const nextKey = (parseInt(activeKey) % items.length) + 1;
      setActiveKey(nextKey.toString());
    }, 10000);

    return () => clearInterval(interval);
  }, [activeKey]);

  return (
    <>
      <div className="section course_container">
        <p>Why Choose <span>Orient Spectra ?</span></p>
        <div className=" course_container_inner">
          <Tabs activeKey={activeKey} onChange={setActiveKey} items={items}>
            
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Course;
