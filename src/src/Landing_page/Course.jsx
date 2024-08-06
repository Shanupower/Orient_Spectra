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
          <h1>Well Established Overseas Education Consultancy in Hyderabad</h1>
          <p>
          The consultancy has built a strong reputation over the years and represents over 400 universities globally, including institutions in the UK, USA, Germany, France, Ireland.
The consultancy is known for its individualized approach, providing detailed attention and tailored advice to each student, leveraging the extensive experience of our counsellors.
The consultancy's commitment to quality service has been recognized widely, including by the Times Business Award 2023, which acknowledged it as one of the top 50 overseas education consultants in hyderabad. Students have praised Orient Spectra for their thorough and supportive approach, making it a recommended choice for those seeking to pursue higher education overseas.

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
          <h1>You Gain A Global Perspective </h1>
          <p>
          We are recognized by various international educational organizations, including The British Council, IDP, and PTE, which underscores their credibility and adherence to high standards in education consulting. 

The consultancy has an in-house R&D center dedicated to exploring new educational opportunities and ensuring that students have access to the latest information.
They facilitate direct interactions between students and university representatives, offering valuable insights and helping students make more informed decisions.

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
    label: "Lifetime Experience",
    children: (
      <div className="course_container_innerDiv">
        <div className="course_container_inner_left">
          <h1>An experience of a lifetime</h1>
          <p>
          Studying abroad is more than just an academic pursuit—it's a transformative journey that broadens your educational horizons and enhances your future. By immersing yourself in a new cultural and academic environment, you'll gain access to a diverse array of courses, cutting-edge research opportunities, and hands-on skill development.

Embrace the chance to expand your global perspective, build a professional network, and acquire valuable international experience. By studying abroad, you'll engage with diverse perspectives and gain insights that are crucial for success in the global job market. With our expert guidance, your dream of pursuing international education becomes a well-crafted reality, designed to elevate your academic and professional aspirations.
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
        <div className=" course_container_inner">
          <Tabs activeKey={activeKey} onChange={setActiveKey} items={items}>
            
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Course;
