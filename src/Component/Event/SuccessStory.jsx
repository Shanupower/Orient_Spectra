import { useMemo, useState } from "react";
import CircleArrow from "../Common/CircleArrow";
import Divider from "../Common/Divider";
import "./event.css";

const SuccessStory = ({ CompletedEventdata }) => {
  const currentYear = new Date().getFullYear();
  const [Year, setYear] = useState(currentYear);
  console.log("CompletedEventdata", CompletedEventdata);
  const handleYeardata = (status) => {
    if (status == "next" && Year < currentYear) {
      setYear(Year + 1);
    } else if (status == "prev" && Year > 2000) {
      setYear(Year - 1);
    }
  };

  const activeYearData = useMemo(() => {
    return CompletedEventdata.filter(
      (data) =>
        new Date(data.attributes.Date_of_the_event).getFullYear() === Year
    );
  }, [Year, CompletedEventdata]);
  console.log("activeYearData", activeYearData);
  return (
    <div className="success-story-container section">
      <div className="event-datecard">
        <b>{CompletedEventdata?.[1]?.attributes.Date_of_the_event}</b>
        <p>{CompletedEventdata?.[1]?.attributes.Shortdescription}</p>
      </div>
      <div className="success-stroy-section">
        <h1>Sucess Stories</h1>
      </div>
      <div className="envet-date-coontainer">
        <div className="event-leftdate-section">
          <div>
            <h1>{Year}</h1>
            <b>{Year - 1}</b>
            <b>{Year - 2}</b>
            <b>{Year - 3}</b>
          </div>
          <div>
            <CircleArrow
              className="enevtdateArrowUp"
              onClick={() => handleYeardata("next")}
            />
            <CircleArrow
              className="enevtdateArrowdown"
              onClick={() => handleYeardata("prev")}
            />
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
            {activeYearData.map((data, index) => (
              <div key={index}>
                <p>{data?.attributes?.Shortdescription}</p>
                <span>{data?.attributes?.Date_of_the_event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
