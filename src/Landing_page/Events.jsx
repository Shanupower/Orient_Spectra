import { motion } from "framer-motion";
import axios from "axios";
import EventDargCard from "./EventSwip";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./index.css";

const Events = () => {
  const [upcomingEventdata, setUpcominngEventData] = useState([]);
  const [CompletedEventdata, setCompletedEventData] = useState([]);
  const formattedDate = new Date();
  const currentDate = formattedDate.toISOString().split("T")[0];

  const fetchUpcomingEventData = async () => {
    try {
      const response = await axios.get(
        `https://strapi.orientspectra.com/api/events?filters[Date_of_the_event][$gt]=${currentDate}?sort[0]=Date_of_the_event&populate=*`
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
        `https://strapi.orientspectra.com/api/events?filters[Date_of_the_event][$lt]=${currentDate}?sort[0]=Date_of_the_event&populate=*`
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
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="event_leftSide"
      >
        {upcomingEventdata?.map((e, index) => (
          <SwiperSlide key={index}>
            <div className="swiperLeftSide">
              <div className="event_leftContent">
                <div className="textBox">
                  <b className="upcomingText">Upcoming Events</b>
                </div>
                <div className="dateEvent">
                  <p>Date of the event</p>
                  <span>{e?.attributes?.Date_of_the_event}</span>
                </div>
                <div className="event_bottomContent">
                  <h4 className="explaintag">{e?.attributes?.Headline}</h4>
                  {/* <span>{e?.attributes?.Shortdescription}</span> */}
                </div>
              </div>
              <div className="eventsRigtImage">
                <b className="upcomingEvents">Upcoming Events</b>
                <img
                  src={`https://strapi.orientspectra.com${e?.attributes?.Thumbnail?.data[0]?.attributes.url}`}
                  alt="" loading="lazy"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
        <EventDargCard Eventdata={[...CompletedEventdata]?.reverse()} />
      </motion.div>
    </div>
  );
};

export default Events;
