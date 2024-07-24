import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import EventDargCard from "./EventSwip";

const Events = () => {
  const [Eventdata, setEventData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://157.173.222.81:1337/api/events?sort[0]=Date_of_the_event&populate=*"
        );
        if (response?.status === 200) {
          console.log("status is:", response);
          setEventData(response?.data.data);
        }
      } catch (error) {
        console.log("ERROR OCCURED WHILE FETCHING:", error.message);
      }
    };

    fetchData();
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
            <span>{Eventdata[0]?.attributes?.Date_of_the_event}</span>
          </div>
          <div className="event_bottomContent">
            <h4 className="explaintag">{Eventdata[0]?.attributes?.Headline}</h4>
            <span>{Eventdata[0]?.attributes?.Shortdescription}</span>
          </div>
        </div>
        <div className="eventsRigtImage">
          <b className="upcomingEvents">Upcoming Events</b>
          <img
            src={`http://157.173.222.81:1337${Eventdata[0]?.attributes?.Poster?.data?.attributes.url}`}
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
        <EventDargCard Eventdata={Eventdata} />
      </motion.div>
    </div>
  );
};

export default Events;
