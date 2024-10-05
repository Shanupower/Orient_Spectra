import LandscapeIcon from "@mui/icons-material/Landscape";
import "./event.css";
import CircleArrow from "../Common/CircleArrow";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const Hero = ({ eventData }) => {
  const [EventId, setEventId] = useState(0);

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

  return (
    <div className="Event-hero-container section2" onClick={handleSingleEvnet}>
      <div className="event-hero-section">
        <div className="Experience-rightcard">
          {isMd ? (
            <img
            src={`https://strapi.orientspectra.com${eventData[EventId]?.attributes?.Thumbnail?.data[0]?.attributes.url}`}
            alt=""
          />
          ):(
            <img
            src={`https://strapi.orientspectra.com${eventData[EventId]?.attributes?.Poster?.data?.attributes.url}`}
            alt=""
          />
          )}
         
        </div>

        <div className="bookPass-container">
          <div className="eventarrowcard">
            <CircleArrow
              className="eventLeftCircleArrow"
              onClick={(e) => handleEventdata("prev", e)}
            />
            <CircleArrow
              className="eventRightCircleArrow"
              onClick={(e) => handleEventdata("next", e)}
            />
          </div>
          <div className="bookPass-cardd" onClick={handleCardClick}>
            <div className="eventUpcomingcard">
              <span>Upcoming Event</span>
              <h1>Book Your Passes</h1>
            </div>

            <CircleArrow className="BookRightCircleArrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
