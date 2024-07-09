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
          <h1>Diverse Course Options To Choose From</h1>
          <p>
            Established in 2005, Orient Spectra guides students towards top
            universities globally (USA, UK, Canada, etc.) through personalized
            counseling and comprehensive support services. From program
            selection to visa applications and airport pickups, their
            experienced team ensures a smooth transition for students pursuing
            international education. Key Highlights:
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
            Established consultancy (2005) guides students to top universities
            (UK, USA, Canada, etc.) through personalized counseling and
            comprehensive services:
            <ul style={{ marginTop: "1rem" }}>
              <li>
                Course & Admission Support: Expert guidance for choosing the
                right program and university.
              </li>
              <li>
                Standardized Test Prep: Experienced faculty and resources for
                GRE, TOEFL, IELTS, PTE.
              </li>
              <li>
                Visa Assistance: Specialized counseling for a high success rate.
              </li>
              <li>
                Career Guidance: Shaping students' academic and professional
                paths.
              </li>
            </ul>
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
            Studying abroad broadens your educational options with diverse
            courses, research opportunities, and skill-based training. You can
            explore multiple interests simultaneously, like literature and
            mathematics. Orient Spectra collaborates with 500+ top universities
            worldwide, ensuring a tailored fit for your academic journey.
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
          <Tabs activeKey={activeKey} onChange={setActiveKey}>
            {items.map((item) => (
              <TabPane
                key={item.key}
                tab={item.label}
                className="eventDivCaard"
              >
                {item.children}
              </TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Course;
