import LandscapeIcon from "@mui/icons-material/Landscape";
import "./event.css";
import CircleArrow from "../Common/CircleArrow";
import { useState } from "react";

const Hero = ({ eventData }) => {
  const [EventId, setEventId] = useState(0);


  const handleEventdata = (status) => {
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

  return (
    <div className="Event-hero-container section2">
      <div className="event-hero-section">
        <div className="event-hero-leftcard">
          <div className="Experience-leftcard">
            <h1>{eventData[EventId]?.attributes?.Headline}</h1>
            <p>{eventData[EventId]?.attributes?.Shortdescription}</p>
          </div>
          <div className="Experience-rightcard">
            {/* <LandscapeIcon className="eventLandscapeIcon" /> */}

            <img
              src={`http://157.173.222.81:1337${eventData[EventId]?.attributes?.Poster?.data?.attributes.url}`}
              alt=""
            />
          </div>
        </div>
        <div className="bookPass-container">
          <div className="eventarrowcard">
            <CircleArrow
              className="eventLeftCircleArrow"
              onClick={() => handleEventdata("prev")}
            />
            <CircleArrow
              className="eventRightCircleArrow"
              onClick={() => handleEventdata("next")}
            />
          </div>
          <div className="bookPass-cardd">
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
