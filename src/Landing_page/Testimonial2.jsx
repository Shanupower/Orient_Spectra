import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Component/Blogs/blog.css"; // Create this CSS file based on your styles
import "./index.css";
import { useMediaQuery } from "@mui/material";
import { Star } from "@mui/icons-material";

const Testimonial2 = () => {
    const isLg = useMediaQuery("(max-width:1024px)");
    const isMd = useMediaQuery("(max-width:986px)");
  const testimonials = [
    {
        name: "Sai Samarth",
        sub: "Heriot-Watt University, Dubai",
        text: "I'm extremely grateful to Chandana Bommana Mam from Orient spectra for her outstanding support throughout my admission process journey and in securing my student visa for Heriot-Watt University in Dubai. She guided me step by step throughout my applicaion process.",
    },
    {
        name: "Lisa Christina",
        sub: "Purdue University, USA",
        text: "I've been admitted to Purdue University and my visa is approved! Thanks to Orient Spectra  for my US application process. They were highly knowledgeable, approachable, and patient, answering all my queries and providing timely updates at every step.",
    },
    {
        name: "Yaseen Mohammed",
        sub: "Wichita State University, USA",
        text: "I am glad to share that it was a wonderful experience with Orient Spectra towards my journey of pursuing a Masters in USA, especially, lalitha and swetha who were consistent, patient, persistent and helped me get through the process.",
    },
    {
      name: "Srinivasa Phani Siddharth Vaka",
      sub: "SRH Berlin University, Germany",
      text: "I recently had the pleasure of working with Orient Spectra Hyderabad for my master's admission to SRH Berlin University. They guided me through every step, from the application to securing my residence visa, and even helped with accommodation arrangements",
    },
    {
        name: "Lahereesh",
        sub: "UMBC, USA",
        text: "I want to express my heartfelt gratitude to Ramya Madam and Varun Sir for being exceptional mentors throughout my journey. Their unwavering support, insightful guidance, and genuine care have made a significant difference in my academic and personal growth.",
    },
    {
      name: "Pulla Prakash",
      sub: "EU-Business School, Germany",
      text: "I had an excellent experience with Orient Spectra Consultancy about my Germany visa application. Special thanks to Ramya Krishna Ma'am for her invaluable help throughout the process. Her experience, kindness, and clear directions helped things go smoothly.",
    },
    {
      name: "Praneeth Jillkapalli",
      sub: "University of Central Missouri, USA",
      text: "I am incredibly grateful to Lalitha at Orient Spectra for her exceptional support throughout my admission to the University of Central Missouri and the visa process. The visa mock sessions she conducted were incredibly helpful in boosting my confidence and preparing me thoroughly.",
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
            <div className="testimonials-card-body">
              <h1>{testimonial.name}</h1>
              <h4>{testimonial.sub}</h4>
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} style={{ color: "#FFD700" }}/>
                ))}
              </div>
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Testimonial2;
