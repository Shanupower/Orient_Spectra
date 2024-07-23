import AddIcon from "@mui/icons-material/Add";
import Whatsapp from "../assets/icons/Group 56.png";
import Window from "../assets/icons/Group (2).png";
import Mic from "../assets/icons/Group (3).png";
import Img from "../assets/Home page/Home Page_01.jpg";
import Img1 from "../assets/pretty-indian-college-girl-universit.jpg";
import Img2 from "../assets/pretty-indian-college-girl-university.jpg";
import Img3 from "../assets/young-adult-achievement-graduation-gown-toothy-smile-generated-by-ai.jpg";
import { Carousel } from "antd";
import "./index.css";
import Button from "../Component/Common/Button";
import { useState, useMemo } from "react";
import { useMediaQuery } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Hero = ({ blog, event }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMd = useMediaQuery("(max-width:986px)");
  const navigate = useNavigate();

  const HeroPagedata = useMemo(
    () => [
      {
        id: 1,
        text: "Your Pathway to",
        heading: "Global Education",
        bgImage: Img,
        subtext:
          "Empowering Students with Comprehensive, Personalized Study Abroad Guidance.",
      },
      {
        id: 2,
        text: "Want to know",
        heading: "how to study abroad?",
        bgImage: Img1,
        subtext:
          "Comprehensive and Personalized Study Abroad Planning, Dedicated to Ensuring Your Academic and Career Success.",
      },
      {
        id: 3,
        heading: blog?.attributes?.Title || "Rise of new education",
        bgImage: `http://157.173.222.81:1337${blog?.attributes?.Headline_image?.data?.attributes?.formats?.large?.url}`,
        subtext:
          blog?.attributes?.Short_Description ||
          "– US, UK, Australia and Canada – face headwinds",
        link: "blog",
      },
      {
        id: 4,
        heading: event?.attributes?.Headline || "Reasons to Study in Germany",
        bgImage: `http://157.173.222.81:1337${event?.attributes?.Poster?.data?.attributes.url}`,
        subtext: event?.attributes?.Shortdescription,
        link: "event",
      },
    ],
    [blog, event]
  );
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (data) => {
    if (data.link == "blog") {
      navigate("/content", { state: { data: blog } });
    } else if (data.link == "event") {
      navigate("/events", { state: { data: event } });
    }
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
                <p className="hero_Heading">{data?.text}</p>
                <h1 className="hero_Heading BoldHeading">{data.heading}</h1>
                <p className="heroSubtext">{data.subtext}</p>
                <div
                  className="StudyButtonCard"
                  onClick={() => handleNavigate(data)}
                >
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
