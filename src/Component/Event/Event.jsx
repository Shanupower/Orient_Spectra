import { useState, useEffect } from "react";
import GetTuchWithUs from "../../Landing_page/GetTuchWithUs2";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import SuccessStory from "./SuccessStory";
import axios from "axios";

const Event = () => {
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero eventData={upcomingEventdata} />
      <SuccessStory CompletedEventdata={CompletedEventdata} />
      <GetTuchWithUs />
    </>
  );
};

export default Event;
