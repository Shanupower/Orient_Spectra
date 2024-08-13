import { useState, useEffect } from "react";
import GetTuchWithUs from "../../Landing_page/GetTuchWithUs2";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import SuccessStory from "./SuccessStory";
import axios from "axios";

const Event = () => {
  const [Eventdata, setEventData] = useState([]);
  const [CompletedEventdata, setCompletedEventdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://strapi.orientspectra.com/api/events?sort[0]=Date_of_the_event&populate=*"
        );
        if (response?.status === 200) {
          setEventData(response?.data.data);
        }
      } catch (error) {
        console.log("ERROR OCCURED WHILE FETCHING:", error.message);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchCompletedData = async () => {
      try {
        const response = await axios.get(
          "https://strapi.orientspectra.com/api/completed-events&populate=*"
        );
        if (response?.status === 200) {
          setCompletedEventdata(response?.data.data);
        }
      } catch (error) {
        console.log("ERROR OCCURED WHILE FETCHING:", error.message);
      }
    };

    // fetchCompletedData();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero eventData={Eventdata} />
      <SuccessStory CompletedEventdata={Eventdata} />
      <GetTuchWithUs />
    </>
  );
};

export default Event;
