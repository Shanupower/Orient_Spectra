import AddIcon from "@mui/icons-material/Add";
import Whatsapp from "../assets/icons/Group 56.png";
import Window from "../assets/icons/Group (2).png";
import Mic from "../assets/icons/Group (3).png";
import Img1 from "../assets/Home_page/Home Page_04.jpg";
import Img2 from "../assets/pretty-indian-college-girl-university.jpg";
import Img3 from "../assets/young-adult-achievement-graduation-gown-toothy-smile-generated-by-ai.jpg";
import { Carousel } from "antd";
import Button from "../Component/Common/Button";
import { useState, useMemo, useEffect } from "react";
import { fabClasses, useMediaQuery } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import Skeleton from "@mui/material/Skeleton";

const Hero = ({ blog, event }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMd = useMediaQuery("(max-width:986px)");
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const HeroPagedata = useMemo(
    () => [   
      {
        id: 1,
        text: "Make Your Study Abroad ",
        heading: "Dream A Reality",
        bgImage: "https://strapi.orientspectra.com/uploads/Banner_03_07b8ebd9f0.jpg",
        subtext:
          "We helped over 15000+ students in their journey to study abroad across USA, UK, Germany, Australia, and so on.",
        buttonText: "Get Dedicated Counsellor",
      },
      {
        id: 2,
        text: "Want To Know",
        heading: "How To Study Abroad?",
        bgImage: "https://strapi.orientspectra.com/uploads/USA_Banner_5a5338b6e3.jpg",
        subtext:
          "Our expert counsellors will help you through the visa application process, and ensure you land in your dream course.",
        buttonText: "Talk To Our Expert",
      },
      {
        id: 3,
        // heading: blog?.attributes?.Title || "Rise of new education",
        heading: "Masters in UK",
        bgImage: `https://strapi.orientspectra.com/uploads/UK_Banner_9a54aba2cf.jpg`,
        subtext:
          blog?.attributes?.Short_Description ||
          "– US, UK, Australia and Canada – face headwinds",
        link: "blog",
        buttonText:"Book A Guidance Call",
      },
      {
        id: 4,
        heading: "Masters in USA",
        bgImage: "https://strapi.orientspectra.com/uploads/Banner_02_e1eeeb63a7.jpg",
        subtext: "Our expert counsellors will help you through the visa application process, and ensure you land in your dream course.",
        link: "event",
        buttonText:"Share Your Interest",
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
                {isLoading && (
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={"100%"}
                    height={"100%"}
                    sx={{ bgcolor: "grey.500" }}
                  />
                )}
                <img
                  src={data.bgImage}
                  alt=""
                  onLoad={() => setIsLoading(false)}
                />
              </div>

              <div className="Hero_Content">
                <p className="hero_Heading">{data?.text}</p>
                <h1 className="hero_Heading BoldHeading">{data.heading}</h1>
                <p className="heroSubtext">{data.subtext}</p>
                <div
                  className="StudyButtonCard"
                  onClick={() => handleNavigate(data)}
                >
                  <Button text={data.buttonText} arrow={true} />
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
