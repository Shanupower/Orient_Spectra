import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import img1 from "../assets/pic-01.jpg";
import img2 from "../assets/4-01.jpg";
import img3 from "../assets/5-01.jpg"; 
import img4 from "../assets/2-01.jpg";
import img5 from "../assets/3-01.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import Arrowleft from "../assets/Line 21.png";
import Video1 from "../assets/Testimonials_01.mp4";
import Video2 from "../assets/Testimonial_02.mp4";
import Video3 from "../assets/Testimonial_03.mp4";
import Video4 from "../assets/Testimonial_04.mp4";
import Video5 from "../assets/Testimonial_05.mp4";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./index.css";


const TestimonialData = [
  {
    id: 1,
    videoLink: "https://www.instagram.com/reel/C37Bh3oso_1/",
    videoUrl: Video1,
    userName: "Sakshit",
    usrImg: img1,
    content:
      "✨ Join Orient Spectra on a journey to fulfill your academic dreams! At Orient Spectra, our dedicated team is committed to guiding students through the Complexities of higher education. Our experienced counsellors offer personalized assistance at every stage, ensuring you find the perfect fit for your academic journey. From initial inquiries to securing your place at the university, Orient Spectra provides unwavering support throughout the entire process.",
  },
  {
    id: 2,
    videoLink: "https://www.instagram.com/reel/C4F6nXLgW3J/",
    videoUrl: Video2,
    userName: "Madhu Kumar M",
    usrImg: img2,
    content:
      "Congratulating Mr. Madhu Kumar for flying to the USA✈️ and achieving his dream. Under our guidance, Madhu Kumar got all the information related to the university. We provide I20 guidance and visa mock interviews at no extra cost. Now he is ready to fly to the USA!",
  },
  {
    id: 3,
    videoLink: "https://www.instagram.com/orient.spectra.1/",
    videoUrl: Video3,
    userName: "Shashi Kumar",
    usrImg: img3,
    content:
      "Student mother extends her appreciation to Orient Spectra! Hear is her heartfelt thanks as we helped to achieve her son's dream of studying in Germany. Your success stories inspire us every day!",
  },
  {
    id: 4,
    videoLink: "https://www.instagram.com/reel/CsK6PekLpkp/",
    videoUrl: Video4,
    userName: "Ashritha",
    usrImg: img4,
    content:
      "Meet Ms. Arshita, from Hyderabad. With the guidance and support from our expert counsellors, she got her acceptance letter after which she applied for her US visa. Now she is ready to take the flight of her dreams!",
  },
  {
    id: 5,
    videoLink: "https://www.instagram.com/orient.spectra.1/",
    videoUrl: Video5,
    userName: "Jaya Sri",
    usrImg: img5,
    content:
      "Spectra! Students looking to study in Europe, had their doubts clarified by our amazing delegates: Yesoda Kamala (SRH University of Applied Sciences), Manisha Reddy (Macromedia University of Applied Sciences), Gopi Krishna (EU Business School), Preeti Sujith (Berlin School of Business & Innovation), and Pooja Lingampally (American Business School). Here’s to new academic journeys!",
  },
];

const Testimonial = () => {
  const isMd = useMediaQuery("(max-width:1024px)");
  const [isAnimatingLeft, setIsAnimatingLeft] = useState(false);
  const [isAnimatingRight, setIsAnimatingRight] = useState(false);
  const [testimonialNum, setTestimonialNum] = useState(1);
  useEffect(() => {
    let timeout;

    if (isAnimatingLeft || isAnimatingRight) {
      timeout = setTimeout(() => {
        setIsAnimatingLeft(false);
        setIsAnimatingRight(false);
      }, 1000); // Animation duration
    }

    return () => clearTimeout(timeout);
  }, [isAnimatingLeft, isAnimatingRight]);

  const handleClickLeft = () => {
    if (testimonialNum > 1) {
      setIsAnimatingLeft(true);
      setTestimonialNum(testimonialNum - 1);
    }
  };

  const handleClickRight = () => {
    if (testimonialNum < TestimonialData.length) {
      setIsAnimatingRight(true);
      setTestimonialNum(testimonialNum + 1);
    }
  };

  const currentTestimonial = TestimonialData[testimonialNum - 1];

  return (
    <div className="testimonial-wrapper">
      <div className={`section testimonials_Container `}>
        {isMd ? (
          <>
            <div className="testimonial_lftSide">
              <p>See what our</p>
              <h3>Students Have To say about us</h3>
              <div className="testimonial_rigtSide">
                <div
                  className={`testimonial_centerSide ${
                    isAnimatingLeft && "fade-left"
                  } ${isAnimatingRight && "fade-right"}`}
                >
                  <video
                    src={currentTestimonial.videoUrl}
                    className="VideoCard"
                    muted
                    controls
                  />
                </div>
              </div>
              <div className="left_rigtCard">
                <p className="leftArrow" onClick={handleClickLeft}>
                <ArrowForwardIcon className="leftarrowicon" />
                </p>
                <p className="studentCard studentename">
                  {currentTestimonial.userName}
                </p>
                <p className="RightArrow" onClick={handleClickRight}>
                <ArrowForwardIcon className="rightarrowicon" />
                </p>
              </div>
              <span className="testimonialtext">t
                {currentTestimonial.content}
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="testimonial_lftSide">
              <span>Testimonials</span>
              <p>See what our</p>
              <h3>Students Have To say about us</h3>
            </div>
            <Link
              className={`testimonial_centerSide `}
              to={currentTestimonial.videoLink}
              target="_blank"
            >
              <video
                src={currentTestimonial.videoUrl}
                className={`VideoCard ${isAnimatingLeft && "fade-left"} ${
                  isAnimatingRight && "fade-right"
                }`}
                muted
                controls
              />
              <div className="instagramIconCard">
                <InstagramIcon className="InstagramIcon" />
              </div>
            </Link>
            <div className="testimonial_rigtSide">
              <div className="studentcard">
                <div className="stuImage">
                  <img
                    src={currentTestimonial.usrImg}
                    alt={currentTestimonial.userName}
                  />
                </div>
                <p
                  className={`studentCard ${
                    isAnimatingLeft || (isAnimatingRight && "textFadeAnimation")
                  }`}
                >
                  {currentTestimonial.userName}
                </p>
              </div>
              <p>{currentTestimonial.content}</p>
              <div className="left_rigtCard">
                <p className="leftArrow" onClick={handleClickLeft}>
                  {/* <img src={Arrowleft} alt="Left Arrow" /> */}
                  <ArrowForwardIcon className="leftarrowicon" />
                </p>
                <p className="RightArrow" onClick={handleClickRight}>
                  {/* <img src={Arrowleft} alt="Right Arrow" /> */}
                  <ArrowForwardIcon className="rightarrowicon" />
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
