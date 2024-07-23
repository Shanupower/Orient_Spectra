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

  useEffect(() => {
    const stack = document.querySelector(".stack");
    if (stack) {
      [...stack.children].reverse().forEach((i) => stack.append(i));

      const updateTopCard = () => {
        const cards = stack.querySelectorAll(".card");
        cards.forEach((card) => {
          card.classList.remove("top-card");
        });
        const topCard = stack.querySelector(".card:last-child");
        if (topCard) {
          topCard.classList.add("top-card");
        }
      };

      const swap = (e) => {
        const card = stack.querySelector(".card:last-child");
        if (e.target !== card) return;
        card.style.animation = "swap 700ms forwards";

        setTimeout(() => {
          card.style.animation = "";
          stack.prepend(card);
          updateTopCard();
        }, 700);
      };

      stack.addEventListener("click", swap);

      // Initialize top card border
      updateTopCard();

      return () => {
        stack.removeEventListener("click", swap);
      };
    }
  }, [Eventdata]);

  const handleNavigate = (post) => {
    navigate(`/events`, { state: { data: post } });
  };

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
