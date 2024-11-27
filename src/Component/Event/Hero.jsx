import LandscapeIcon from "@mui/icons-material/Landscape";
import "./event.css";
import CircleArrow from "../Common/CircleArrow";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import LeadFormPopUp from "../../Landing_page/HeroLeadFormPopUp";
import Event from "../../assets/Home_page/Banner4.webp";
import Event2 from "../../assets/Unvercity/Euschool-Poster.webp";
import CommonEvent_Banner from "../../assets/Home_page/Homepage_Banner5.webp"; // Common Event(if there is no new events this image will display)
import CommonEvent  from "../../assets/Home_page/Common_Event.webp";

const Hero = ({ eventData}) => {
  const [EventId, setEventId] = useState(0);
  const [isOpen, setIsOpen] =useState(false);

  const handleEventdata = (status, e) => {
    e.stopPropagation();

    e.stopPropagation();
    if (status === "next") {
      if (EventId < eventData.length - 1) {
        setEventId(EventId + 1);
      }
    } else if (status === "prev") {
      if (EventId > 0) {
        setEventId(EventId - 1);
      }
    }
  };

  const handleSingleEvnet = () => {
    window.location.href = `event-details/${eventData[EventId]?.id}`;
  };
  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  const isMd = useMediaQuery("(max-width:1024px)");

  const handlePopUpOpen =(e)=>{
    e.stopPropagation();
    setIsOpen(!isOpen);
  }

  const closePopup = () => {
    setIsOpen(false); 
  };
  return (
    <div className="Event-hero-container section2" >
      <div className="event-hero-section" onClick={handleSingleEvnet}>
        <div className="Experience-rightcard" >
          {isMd ? (
            <img
            // src={`https://strapi.orientspectra.com${eventData[EventId]?.attributes?.Thumbnail?.data[0]?.attributes.url}`}
            src={Event2}
            alt=""
          />
          ):(
            <img
            src={Event}
            // src={`https://strapi.orientspectra.com${eventData[EventId]?.attributes?.Poster?.data?.attributes.url}`}
            alt=""
          />
          )}
         
        </div>

        <div className="bookPass-container">
          <div className="eventarrowcard">
            {/* <CircleArrow
              className="eventLeftCircleArrow"
              onClick={(e) => handleEventdata("prev", e)}
            />
            <CircleArrow
              className="eventRightCircleArrow"
              onClick={(e) => handleEventdata("next", e)}
            /> */}
          </div>
          <div className="bookPass-cardd" >
            <div className="eventUpcomingcard">
              <span>Upcoming Event</span>
              <h1>Book Your Passes</h1>
            </div>

            <CircleArrow className="BookRightCircleArrow" onClick={handlePopUpOpen}/>
          </div>
        </div>
      </div>
      {isOpen && 
      <LeadFormPopUp closePopup={closePopup}/>}
    </div>
  );
};

export default Hero;
