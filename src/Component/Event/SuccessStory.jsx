import { useMemo, useState } from "react";
import CircleArrow from "../Common/CircleArrow";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import "./event.css";

const SuccessStory = ({ CompletedEventdata }) => {
  const currentYear = new Date().getFullYear();
  const [Year, setYear] = useState(currentYear);
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
              <div className="success-titleleft-card">
                {activeYearData.length > 0 ? (
                  activeYearData.map((data, index) => (
                    <Accordion
                      {...(index === 0 && { defaultExpanded: true })}
                      key={index}
                    >
                      <AccordionSummary
                        expandIcon={data?.attributes?.Date_of_the_event}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                      >
                        {data?.attributes?.Headline}
                      </AccordionSummary>
                      <AccordionDetails>
                        {data?.attributes?.Shortdescription}
                      </AccordionDetails>
                    </Accordion>
                  ))
                ) : (
                  <div className="no-data-container">
                    <p>No Data Found</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
