import CircleArrow from "../Common/CircleArrow";
import Divider from "../Common/Divider";
import "./event.css";

const SuccessStory = ({ eventData }) => {
  return (
    <div className="success-story-container section">
      <div className="event-datecard">
        <b>{eventData[0]?.attributes.Date_of_the_event}</b>
        <p>{eventData[0]?.attributes.Shortdescription}</p>
      </div>
      <div className="success-stroy-section">
        <h1>Sucess Stories</h1>
        <h2>Title Text</h2>
      </div>
      <div className="envet-date-coontainer">
        <div className="event-leftdate-section">
          <div>
            <h1>2024</h1>
            <b>2023</b>
            <b>2022</b>
            <b>2021</b>
          </div>
          <div>
            <CircleArrow className="enevtdateArrowUp" />
            <CircleArrow className="enevtdateArrowdown" />
          </div>
        </div>
        <div className="event-rightdate-section">
          <div className="success-storytitle-container">
            <div className="success-titleleft-card">
              <h3>Event Title Text</h3>
              <span>19 JUN 2024</span>
            </div>
            <div className="success-titleRight-card">
              <h2>For the event title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh malutpat.
              </p>
            </div>
          </div>
          <div className="event-list-card">
            {[...Array(4)].map((item) => (
              <div key={item}>
                <p>Event Title Text</p>
                <span>19 JUN 2024</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
