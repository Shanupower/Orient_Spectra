import LandscapeIcon from "@mui/icons-material/Landscape";
import "./event.css";
import CircleArrow from "../Common/CircleArrow";
const Hero = () => {
  return (
    <div className="Event-hero-container section2">
      <div className="event-hero-section">
        <div className="event-hero-leftcard">
          <div className="Experience-leftcard">
            <h1>Experience The Future Of Overseas Study</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh malutpat
            </p>
          </div>
          <div className="Experience-rightcard">
            <LandscapeIcon className="eventLandscapeIcon" />
          </div>
        </div>
        <div className="bookPass-container">
          <div className="eventarrowcard">
            <CircleArrow className="eventLEftCircleAroow" />
            <CircleArrow className="eventRightCircleAroow" />
          </div>
          <div className="bookPass-cardd">
            <div className="eventUpcomingcard">
              <span>Upcoming Event</span>
              <h1>Book Your Passes</h1>
            </div>
            <CircleArrow className="BookRightCircleAroow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
