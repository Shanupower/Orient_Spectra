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
import Play from "../assets/playIcon.png";


const TestimonialData = [ 
  {
    id: 1,
    videoLink: "https://www.instagram.com/orient.spectra.1/",
    videoUrl: Video5,
    userName: "Jaishree",
    universityName: "University of East London",
    usrImg: "https://strapi.orientspectra.com/uploads/10_b4ff89b5ac.jpg",
    usrImg2: "https://strapi.orientspectra.com/uploads/001_UK_512a971774.jpg",
    content:
      "Orient spectra has helped me a lot in my master's process. My university offer letter came within five days and I got my visa within 15 days.",
  },
  {
    id: 2,
    videoLink: "https://www.instagram.com/orient.spectra.1/",
    videoUrl: Video3,
    userName: "Shashi Kumar",
    universityName: "Franklin University",
    usrImg: "https://strapi.orientspectra.com/uploads/USA_97a14e4b74.jpg",
    usrImg2: "https://strapi.orientspectra.com/uploads/004_USA_6771f9d0ef.jpg",
    content:
      "Student mother extends her appreciation to Orient Spectra! Here is her heartfelt thanks as we helped to achieve her son's dream of studying in US. Your success stories inspire us every day!",
  },
  {
    id: 3,
    videoLink: "https://www.instagram.com/orient.spectra.1/",
    videoUrl: "https://strapi.orientspectra.com/uploads/swetha_sree_568cad99fc.mp4",
    userName: "Swetha Sree",
    universityName: "International University of Applied Sciences",
    usrImg: "https://strapi.orientspectra.com/uploads/3_GERMANY_aea2e1a5b1.jpg",
    usrImg2: "https://strapi.orientspectra.com/uploads/GERMANY_350_W_2fba8f5568.jpg",
    content:
      "I got admission at University of Europe in Berlin for an MBA International Business. I would like to thank Ramya and Nandini actually for providing me complete support since the beginning of the application process then getting to the visa documents.",
  },
  {
    id: 4,
    videoLink: "https://www.instagram.com/orient.spectra.1/",
    videoUrl: "https://strapi.orientspectra.com/uploads/alekhya_Review_54832075bb.mp4",
    userName: "Alekhya",
    universityName: "University of New Haven",
    usrImg: "https://strapi.orientspectra.com/uploads/4_USA_orange_a2f2a00f12.jpg",
    usrImg2: "https://strapi.orientspectra.com/uploads/003_USA_b554c163c4.jpg",
    content:
      "I've got to know about Orient Spectra from my brother who's doing his Master's in London, University of East London. They have helped me with the university listings and admission process.",
  },
 
];

const Testimonial = () => {
  const isMd = useMediaQuery("(max-width:1024px)");
  const [isAnimatingLeft, setIsAnimatingLeft] = useState(false);
  const [isAnimatingRight, setIsAnimatingRight] = useState(false);
  const [testimonialNum, setTestimonialNum] = useState(1);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
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
      setIsAnimatingRight(true);
      setIsVideoPlaying(false);
      setTestimonialNum(testimonialNum - 1);
    }
  };

  const handleClickRight = () => {
    if (testimonialNum < TestimonialData.length) {
      setIsAnimatingLeft(true);
      setTestimonialNum(testimonialNum + 1);
      setIsVideoPlaying(false);
    }
  };

  const handlePlay =() =>{
    setIsVideoPlaying(true);
  }
  
  const handlePause =() =>{
    setIsVideoPlaying(false);
  }
  
  const handleEnd =() =>{
    setIsVideoPlaying(false);
  }



  const currentTestimonial = TestimonialData[testimonialNum - 1];

  return (
    <div className="testimonial-wrapper">
      <div className={`section testimonials_Container `}>
        {isMd ? (
          <>
            <div className="testimonial_lftSide">
            <p>Here’s What</p>
            <h3>Our Students Have To Say</h3>
              <div className="testimonial_rigtSide">
                <div
                  className={`testimonial_centerSide ${
                    isAnimatingLeft && "fade-left"
                  } ${isAnimatingRight && "fade-right"}`}
                >
                  {!isVideoPlaying && (
                <img
                src={currentTestimonial.usrImg2}
                alt="Video thumbnail"
                className="video-thumbnail"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  objectFit: 'fill',
                  // zIndex: 1,
                }}
             />
              )}
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
                  {currentTestimonial.userName} <br/> <span>{currentTestimonial.universityName}</span>
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
              <p>Here’s What </p>
              <h3>Our Students Have To Say</h3>
            </div>
            <div className={`testimonial_centerSide `}>
             
              {!isVideoPlaying && (
                <img
                src={currentTestimonial.usrImg}
                alt="Video thumbnail"
                className="video-thumbnail"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  objectFit: 'contain',
                  // zIndex: 1,
                }}
             />
              )}
               
              <video
                src={currentTestimonial.videoUrl}
                className={`VideoCard ${isAnimatingLeft && "fade-left"} ${
                  isAnimatingRight && "fade-right"
                }`}
                muted
                controls
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handleEnd}
              />
              <div className="instagramIconCard">
                <InstagramIcon className="InstagramIcon" />
              </div>
            </div>
            <div className="testimonial_rigtSide">
              <div className="studentcard">
                <div
                  className={`studentCard ${
                    isAnimatingLeft || (isAnimatingRight && "textFadeAnimation")
                  }`}
                >
                  {currentTestimonial.userName}
                  <p>{currentTestimonial.universityName}</p>
                </div>
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
