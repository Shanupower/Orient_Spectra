import { motion } from "framer-motion";
import axios from "axios";
import EventDargCard from "./EventSwip";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./index.css";
import Img1 from "../assets/Unvercity/Euschool-Poster.webp";
import Img2 from "../assets/Home_page/UK_Event.webp";
import Img3 from "../assets/Home_page/Event_03.webp";
import Img4 from "../assets/Home_page/Event_04.webp";
import CommonEvent  from "../assets/Home_page/Common_Event.webp";
import { Subtitles } from "@mui/icons-material";

const Events = () => {
  // const [upcomingEventdata, setUpcomingEventData] = useState([]);
  // const [completedEventdata, setCompletedEventData] = useState([]);
  // const formattedDate = new Date();
  // const currentDate = formattedDate.toISOString().split("T")[0];

  // const fetchUpcomingEventData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://strapi.orientspectra.com/api/events?filters[Date_of_the_event][$gt]=${currentDate}&sort[0]=Date_of_the_event&populate=*`
  //     );
  //     if (response?.status === 200) {
  //       const events = response.data.data;
  //       const newEvents = events.filter(
  //         (event) => event?.attributes?.Date_of_the_event > currentDate
  //       );
        
  //       setUpcomingEventData(newEvents.length > 0 ? newEvents : [defaultEvent]);
  //     }
  //   } catch (error) {
  //     console.log("ERROR OCCURRED WHILE FETCHING:", error.message);
  //   }
  // };

  // const fetchCompletedEventData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://strapi.orientspectra.com/api/events?filters[Date_of_the_event][$lt]=${currentDate}&sort[0]=Date_of_the_event&populate=*`
  //     );
  //     if (response?.status === 200) {
  //       setCompletedEventData(response.data.data);
  //     }
  //   } catch (error) {
  //     console.log("ERROR OCCURRED WHILE FETCHING:", error.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchUpcomingEventData();
  //   fetchCompletedEventData();
  // }, []);

  // // Default event data
  // const defaultEvent = {
  //   attributes: {
  //     // Date_of_the_event: "8 Nov 2024",
  //     Headline: "No - Cost IELTS/TOEFL Coaching",
  //     Subtitle: "Expert training upon refundable deposit payment",
  //     Thumbnail: { data: [{ attributes: { url: "/uploads/Frame_6_22ef29815f.webp" } }] },
  //   },
  // };

  const UpcomingData =[
    {
      id:1,
      Headline: "Study in Germany with 2 Lakhs Discount*",
      Subtitle: "Last Date to Apply for March Intake 21st December",
      img: Img1,
      Date_of_the_event: " 21st Dec 2024"
    }
  ]

  const CompletedData = [
    {
      id: 1,
      attributes: {
      Date_of_the_event: " 24th Nov 2024",
      Headline: "No - Cost IELTS/TOEFL Coaching",
      Subtitle: "Expert training upon refundable deposit payment",
      img: CommonEvent,
    },
    },
    {
      id: 2,
      attributes: {
        Date_of_the_event: " 9th Nov 2024",
        Headline: "UK & Europe Education Fair",
        Subtitle: "One-on-one session with expert counselors",
        img: Img2,
      },
    },
    {
      id: 3,
      attributes: {
        Date_of_the_event: " 14th October 2024",
        Headline: "Meet Middlesex University Delegates",
        Subtitle: "Step-by-step support for your university applications",
        img: Img3,
      },
    },
    {
      id: 4,
      attributes: {
        Date_of_the_event: " 5th October 2024",
        Headline: "Europe Education Fair",
        Subtitle: "Step-by-step support for your university applications",
        img: Img4,
      },
    },
  ];
  const [completedEventdata, setCompletedEventData] = useState([CompletedData]);

  return (
    // <div className="section Events__container">
    //   <Swiper
    //     cssMode={true}
    //     navigation={true}
    //     pagination={true}
    //     mousewheel={true}
    //     keyboard={true}
    //     modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    //     className="event_leftSide"
    //   >
    //     {upcomingEventdata.map((e, index) => (
    //       <SwiperSlide key={index}>
    //         <div className="swiperLeftSide">
    //           <div className="event_leftContent">
    //             <div className="textBox">
    //               <b className="upcomingText">Upcoming Events</b>
    //             </div>
    //             <div className="dateEvent">
    //               {/* <p>Date of the event</p> */}
    //               <span>{e?.attributes?.Date_of_the_event}</span>
    //             </div>
    //             <div className="event_bottomContent">
    //               <h4 className="explaintag">{e?.attributes?.Headline}</h4>
    //               <p>{e?.attributes?.Subtitle}</p>
    //             </div>
    //           </div>
    //           <div className="eventsRigtImage">
    //             <b className="upcomingEvents">Upcoming Events</b>
    //             <img
    //               src={`https://strapi.orientspectra.com${e?.attributes?.Thumbnail?.data[0]?.attributes.url}`}
    //               alt=""
    //               loading="lazy"
    //             />
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    //   <motion.div
    //     className="event_rightSide"
    //     initial="hidden"
    //     whileInView="visible"
    //     viewport={{ once: true, amount: 0.5 }}
    //     transition={{ duration: 0.8 }}
    //     variants={{
    //       hidden: { opacity: 0, y: -200 },
    //       visible: { opacity: 1, y: 0 },
    //     }}
    //   >
    //     <EventDargCard Eventdata={[...completedEventdata]?.reverse()} />
    //   </motion.div>
    // </div>

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
        {UpcomingData?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="swiperLeftSide">
              <div className="event_leftContent">
                <div className="textBox">
                  <b className="upcomingText">Upcoming Events</b>
                </div>
                <div className="dateEvent">
                  <p>Date of the event</p>
                  <span> {item?.Date_of_the_event}</span>
                </div>
                <div className="event_bottomContent">
                  <h4 className="explaintag">{item?.Headline}</h4>
                  <p>{item?.Subtitle}</p>
                </div>
              </div>
              <div className="eventsRigtImage">
                <b className="upcomingEvents">Upcoming Events</b>
                <img
                  src={item?.img}
                  alt=""
                  loading="lazy"
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
        <EventDargCard Eventdata={[...completedEventdata]?.reverse()} />
      </motion.div>
    </div>
  );
};

export default Events;
