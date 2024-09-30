
import { useState } from "react";
import Button from "../../Component/Common/Button";
import { ImgGallery } from "../../Container/data/Universities";
import "./ADS.css";
import Marquee from "react-fast-marquee";
import HeroLeadFormPopUp from "../../Landing_page/HeroLeadFormPopUp";

const UniversityData =[
  {
    id: 1,
    img: "https://strapi.orientspectra.com/uploads/11918927_9fd732b089.webp",
    title: "Business Analyst"
  },
  {
    id: 2,
    img: "https://strapi.orientspectra.com/uploads/2640775_9037c2ed32.webp",
    title:"Finance"
  },
  {
    id: 3,
    img: "https://strapi.orientspectra.com/uploads/2749758_62e79a5c21.webp",
    title: "Hospitality"
  },
  {
    id: 4,
    img: "https://strapi.orientspectra.com/uploads/15260298_0ba6090c97.webp",
    title: "AI & ML"
  },  
  {
    id: 5,
    img: "https://strapi.orientspectra.com/uploads/5_1caadeebbe.webp",
    title: "Fashion Designing "
  },  
]
const Courses =()=>{
    return(
        <div className="Top-Universities section">
          <h1>Top Trending Courses in <span>Europe</span></h1>
          <p>We have quality partners in variety of destinations around the globe</p>
          <div className="Courses-container">
            {UniversityData.map((item)=> (
              <div className="Courses-Images" key={item.id}>
               <img src={item.img} alt="Imgaes" />
               <p>{item.title}</p>
              </div>
            ))}
          </div>
      </div>
 
    )
}

export default Courses;