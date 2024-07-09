import { useEffect } from "react";
import "./index.css";
import Banner1 from "../assets/Vector (2).png";
import Banner2 from "../assets/Vector (3).png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const Events = () => {
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
        topCard.classList.add("top-card");
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
            <span>2024</span>
          </div>
          <div className="event_bottomContent">
            <h4 className="explaintag">
              Explore Study Abroad options in Germany
            </h4>
            <span>EU Business School Fair in Hyderabad</span>
          </div>
        </div>
        <div className="eventsRigtImage">
          <b className="upcomingEvents">Upcoming Events</b>

          <img src={Banner1} alt="Event Banner" />
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
        <div className="stack">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div className="card cardEvent" key={index}>
              <div className="card_content">
                <div>
                  <p>Title of</p>
                  <b>The Event</b>
                </div>
                <ArrowForwardIcon
                  sx={{ fontSize: "40px", fontWeight: "300" }}
                  className="eventarrow"
                />
              </div>
              <p>2023</p>
              <img src={Banner2} alt="Event" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Events;
