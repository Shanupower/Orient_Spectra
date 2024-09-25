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
        bgImage:
          "https://strapi.orientspectra.com/uploads/Banner_03_91ff06ff51.webp",
        alt:"Banner3",
        subtext:
          "We helped over 15000+ students in their journey to study abroad across USA, UK, Germany, Australia, and so on.",
        buttonText: "Get Dedicated Counsellor",
      },
      {
        id: 2,
        text: "Want To Know",
        heading: "How To Study Abroad?",
        bgImage:
          "https://strapi.orientspectra.com/uploads/Banner_02_ab30739bfe_f492f9774c.webp",
        alt:"Study Abroad",
        subtext:
          "Our expert counsellors will help you through the visa application process, and ensure you land in your dream course.",
        link: "event",
        buttonText: "Share Your Interest",
      },
      {
        id: 3,
        text: "Begin Your Journey",
        heading: " of MS in USA",
        bgImage:
          "https://strapi.orientspectra.com/uploads/USA_Banner_f047158782.webp",
        alt:"USA",
        subtext:
          "Get complete guidance on your visa application, university intakes, and scholarship opportunities. Talk to our counsellors.",
        link: "blog",
        buttonText: "Book A Guidance Call",
      },
      {
        id: 4,
        text: "",
        heading: "",
        bgImage: "https://strapi.orientspectra.com/uploads/EU_Website_Event_Banner_e1a4b40be6.webp",
        alt:"event",
        subtext: "",
        link: "event",
        buttonText: "Register Your Slot",
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
                  alt={data.alt}
                  onLoad={() => setIsLoading(false)}
                />
              </div>

              <div className="Hero_Content">
                <p className="hero_Heading">{data?.text}</p>
                <h1 className="hero_Heading BoldHeading">{data.heading}</h1>
                <p className="heroSubtext">{data.subtext}</p>
                <Button
                  text={data.buttonText}
                  arrow={true}
                  link="/start-your-journey"
                  className="StudyButtonCard"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
