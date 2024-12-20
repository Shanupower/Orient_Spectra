import { useState, useEffect } from "react";
import GetTuchWithUs from "../../Landing_page/GetTuchWithUs2";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import SuccessStory from "./SuccessStory";
import axios from "axios";
import Benifits from "../../Ads landing page/Europe-Education-Fair/UK_Benifits";
import WhyOs from "../../Ads landing page/OfflineMarketingClub/WhyOS";
import EventDetails from "./EventDetail";
import Universities from "../../Ads landing page/Europe-Education-Fair/UK_Universities";
import { Helmet } from "react-helmet-async";
import WhyWe_Attend from "../../Ads landing page/EUBussiness_SchoolEvent/WhyWe_Attend";
import WhyChoose from "../../Ads landing page/Training_Program/WhyChoose";
import TestimonialsCarousel from "../../Ads landing page/SrhUniversityEvent/TestimonialCarousal";
import Accredations from "../../Ads landing page/Training_Program/Accredations";

const Event = () => {
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>All Abroad Education Fairs & Events of Orient Spectra</title>
        <meta 
          name="description" 
          content="Read latest news about Orient Spectra's overseas education fairs, and other updates like student visa approvals and so on." />
      </Helmet>
      <Hero eventData={upcomingEventdata} />
      <WhyChoose />
      <WhyWe_Attend />
      <TestimonialsCarousel />
      <Accredations />
      {/* <SuccessStory CompletedEventdata={CompletedEventdata} /> */}
      {/* <GetTuchWithUs /> */}
    </>
  );
};

export default Event;
