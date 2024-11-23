import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../Component/Blogs/blog.css"; // Create this CSS file based on your styles
import "./index.css";
import { useMediaQuery } from "@mui/material";

const TestimonialsCarousel = () => {
    const isLg = useMediaQuery("(max-width:1024px)");
    const isMd = useMediaQuery("(max-width:986px)");
  const testimonials = [
    {
        name: "JaiShree",
        text: "Orient spectra has been an incredible support throughout my master's application process. My university offer letter came within five days and I got my visa within 15 days",
    },
    {
        name: "Shashi Kumar",
        text: "Student mother extends her appreciation to Orient Spectra! Here is her heartfelt thanks as we helped to achieve her son's dream of studying in US.Your success stories inspire us every day!",
    },
    {
        name: "Swetha Sree",
        text: "I got admission at University of Europe in Berlin for an MBA International Business. Thanks for you providing me complete support since the beginning of the application process.",
    },
    {
        name: "Alekhya",
        text: "I've got to know about Orient Spectra from my brother who's doing his Master's in London, University of East London. They have helped me with the university listings and admission process.",
    },
  ];

  return (
    <div className="gtco-testimonials section">
      <h1>What Our Students Say's</h1>
      <p>Explore heartfelt testimonials from students who turned their aspirations into accomplishments with our guidance.</p>
      <OwlCarousel
        loop={true}
        margin={10}
        nav
        dots={isMd}
        // center={true}
        autoplay={true}
        items={isMd ? 1 : isLg ? 2 :  3}
        className="owl-theme"
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="Testimonial-container">
            <div className="testimonial-card-body">
              <h1>{testimonial.name}</h1>
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default TestimonialsCarousel;
