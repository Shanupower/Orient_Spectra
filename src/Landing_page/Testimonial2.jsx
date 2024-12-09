import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Component/Blogs/blog.css"; // Create this CSS file based on your styles
import "./index.css";
import { useMediaQuery } from "@mui/material";

const Testimonial2 = () => {
    const isLg = useMediaQuery("(max-width:1024px)");
    const isMd = useMediaQuery("(max-width:986px)");
  const testimonials = [
    {
        name: "Sai Samarth",
        text: "I'm extremely grateful to Chandana Bommana Mam from Orient spectra for her outstanding support throughout my admission process journey and in securing my student visa for Heriot-Watt University in Dubai.",
    },
    {
        name: "Faraz Mohammad",
        text: "I am incredibly grateful to Orient Spectra for their exceptional support throughout my journey abroad. From the initial stages to the very end, Their professionalism & personalized approach made the entire process smooth and stress-free.",
    },
    {
        name: "Yaseen Mohammed",
        text: "I am glad to share that it was a wonderful experience with them towards my journey of pursuing a Masters in USA, especially, lalitha and swetha who were consistent, patient, persistent and helped me get through the process.",
    },
    {
      name: "Sravya Dupati",
      text: "I had a great experience with Orient Spectra in context to my UK visa. Initially, I was overwhelmed about the process but Kulsum ma’am has efficiently helped me throughout with each and everything without any issue. My process has been done in just 1 month",
    },
    {
        name: "Sandeep Reddy",
        text: "I sincerely appreciate Orient Spectra's invaluable advice me to pursue my masters in UK. I would like to express my sincere gratitude to Orient Spectra and especially to my counselor who guided me every step of process & selecting the best master's program.",
    },
    {
      name: "Roshni Chippe",
      text: "One big thanks to Lokesh garu and Orient spectra for the smooth processing of my application and getting me a seat in one of my desired colleges. It has been a great journey that I had with them, especially given that throughout the period of my application process.",
    },
    {
      name: "Vyshnavi Nalla",
      text: "I would like to express my deepest gratitude to Orient Spectra for their exceptional support and dedication throughout my journey to secure admission for my master's program in the USA. A special thanks to Anusha Mam for her unwavering assistance at every step.",
    },
  ];

  return (
    <div className="gtco-testimonial section">
      <h1>What Our <span>Students Say</span></h1>
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

export default Testimonial2;
