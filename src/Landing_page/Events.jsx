import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";
import EventDargCard from "./EventSwip";
import "./index.css";

const Events = () => {
  const [upcomingEventdata, setUpcominngEventData] = useState([]);
  const [CompletedEventdata, setCompletedEventData] = useState([]);
  const formattedDate = new Date();
  const currentDate = formattedDate.toISOString().split("T")[0];

  const fetchUpcomingEventData = async () => {
    try {
      const response = await axios.get(
        `http://157.173.222.81:1337/api/events?filters[Date_of_the_event][$gt]=${currentDate}?sort[0]=Date_of_the_event&populate=*`
      );
      if (response?.status === 200) {
        setUpcominngEventData(response?.data.data);
      }
    } catch (error) {   
      console.log("ERROR OCCURED WHILE FETCHING:", error.message);
    }
  };
  const fetchCompletedEventdata = async () => {
    try {
      const response = await axios.get(
        `http://157.173.222.81:1337/api/events?filters[Date_of_the_event][$lt]=${currentDate}?sort[0]=Date_of_the_event&populate=*`
      );
      if (response?.status === 200) {
      
        setCompletedEventData(response?.data.data);
      }
    } catch (error) {
      console.log("ERROR OCCURED WHILE FETCHING:", error.message);
    }
  };

  useEffect(() => {
    fetchUpcomingEventData();
    fetchCompletedEventdata();
  }, []);

  return (
    <div className="section Events__container">
      <motion.div
        className="event_leftSide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: -200 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="event_leftContent">
          <b className="upcomingText">Upcoming Events</b>
          <div className="dateEvent">
            <p>Date of the event</p>
            <span>{upcomingEventdata[0]?.attributes?.Date_of_the_event}</span>
          </div>
          <div className="event_bottomContent">
            <h4 className="explaintag">
              {upcomingEventdata[0]?.attributes?.Headline}
            </h4>
            <span>{upcomingEventdata[0]?.attributes?.Shortdescription}</span>
          </div>
        </div>
        <div className="eventsRigtImage">
          <b className="upcomingEvents">Upcoming Events</b>
          <img
            src={`http://157.173.222.81:1337${upcomingEventdata[0]?.attributes?.Poster?.data?.attributes.url}`}
            alt=""
          />
        </div>
      </motion.div>
      <motion.div
        className="event_rightSide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: -200 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <EventDargCard Eventdata={CompletedEventdata} />
      </motion.div>
    </div>
  );
};

export default Events;
