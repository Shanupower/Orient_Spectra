
import { useState } from "react";
import Button from "../../Component/Common/Button";
import { ImgGallery } from "../../Container/data/Universities";
import "./ADS.css";
import Marquee from "react-fast-marquee";
import HeroLeadFormPopUp from "../../Landing_page/HeroLeadFormPopUp";

const UniversityData =[
  {
    id: 1,
    img: "https://strapi.orientspectra.com/uploads/11_76e57375f8.webp",
  },
  {
    id: 2,
    img: "https://strapi.orientspectra.com/uploads/6_67f8497b5d.webp",
  },
  {
    id: 3,
    img: "https://strapi.orientspectra.com/uploads/5_e70654ef5b.webp",
  },
  {
    id: 4,
    img: "https://strapi.orientspectra.com/uploads/1_61d4a89cef.webp",
  }, 
  {
    id: 5,
    img: "https://strapi.orientspectra.com/uploads/16_327f848301.webp",
  }, 
  {
    id: 6,
    img: "https://strapi.orientspectra.com/uploads/15_02e8ce5c4d.webp",
  }, 
  {
    id: 7,
    img: "https://strapi.orientspectra.com/uploads/14_d712099774.webp",
  }, 
  {
    id: 8,
    img: "https://strapi.orientspectra.com/uploads/13_1_420208047d.webp",
  },
  {
    id: 9,
    img: "https://strapi.orientspectra.com/uploads/10_ee15e54a4a.webp",
  }, 
  {
    id: 10,
    img: "https://strapi.orientspectra.com/uploads/3_35008e0c54.webp",
  },
]
const Universities =()=>{
  const [open, setOpen] = useState(false);

  const handleClick =()=>{
    setOpen(true);
  }
    return(
        <div className="Top-Universities section">
          <h1>Universities That Our Students Are <span>Studying In Europe</span></h1>
          <div className="University-container">
            {UniversityData.map((item)=> (
              <div className="University-Images" key={item.id}>
               <img src={item.img} alt="Imgaes" />
              </div>
            ))}
          </div>
          <button className="University-button" onClick={handleClick}>Explore More Universities</button>

       {/* <div className="Acedemic_cantainer__header">
        <p>Fastrack your Admission to Leading <br/>Global Universities</p>
        <div className="discovermoreButton">
          <Button text="Schedule A Call" arrow={true} />
        </div>
        </div> */}
        {open &&  
        <div role="dialog" aria-hidden={!open}>
          <HeroLeadFormPopUp />
          </div> 
          }
      </div>
 
    )
}

export default Universities;