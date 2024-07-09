import AddIcon from "@mui/icons-material/Add";
import Whatsapp from "../assets/icons/Group 56.png";
import Window from "../assets/icons/Group (2).png";
import Mic from "../assets/icons/Group (3).png";

import { Carousel } from "antd";
import "./index.css";
import { HeroPagedata } from "../Container/data/Hero";
import Button from "../Component/Common/Button";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMd = useMediaQuery("(max-width:986px)");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="HeroBlock">
      <div className="HeroContainer">
        <Carousel autoplay autoplaySpeed={5000} effect="scroll">
          {HeroPagedata.map((data) => (
            <div key={data.id} className="Hero_container">
              <div className="Hero--images">
                <img src={data.bgImage} alt="" />
              </div>
              <div className="Hero_Content">
                <p className="hero_Heading">{data.text}</p>
                <h1 className="hero_Heading BoldHeading">{data.heading}</h1>
                <p className="heroSubtext">{data.subtext}</p>
                <div className="StudyButtonCard">
                  <Button text="Study Abroad" arrow={true} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      {/* Pop up Button */}
      <div className="popUpBotton">
        <div className="menu-container">
          <div className="menu-button" onClick={toggleMenu}>
            <AddIcon
              sx={{ fontSize: isMd ? "20px" : "34px" }}
              className={isOpen ? "buttonnRotate" : "reverceRotete"}
            />
          </div>
          <div className={`menu-items ${isOpen ? "open" : ""}`}>
            <a href="#" className="menu-item call">
              <img src={Whatsapp} alt="" />
            </a>
            <a href="#" className="menu-item window">
              <img src={Window} alt="" />
            </a>
            <a href="#" className="menu-item whatsapp">
              <img src={Mic} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
