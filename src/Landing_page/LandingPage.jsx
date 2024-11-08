// import { Helmet } from "react-helmet-async";
import { Helmet } from "react-helmet-async";
import Footer from "../Component/Common/Footer";
import Navbar from "../Component/Common/Navbar";
import Acedemic from "./Acedemic";
import Blog from "./Blog";
// import Counselors from "./Counselors";
import Country from "./Country";
import Course from "./Course";
import Discovery from "./Discovery";
import Events from "./Events";
import Explore from "./Explore";
import Faq from "./Faq";
import GetTuchWithUs from "./GetTuchWithUs";
import Hero from "./Hero";
import Mission_Vision from "./Mission_Vision";
import News from "./News";
import StudyAbroad from "./StudyAbroad";
import Testimonial from "./Testimonial";
import axios from "axios";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [blog, setBlog] = useState({});
  const [event, setEvent] = useState({});
  const formattedDate = new Date();
  const currentDate = formattedDate.toISOString().split("T")[0];
  const fetchBlogData = async () => {
    try {
      const response = await axios.get(
        `https://strapi.orientspectra.com/api/blogs?populate=*`
      );
      if (response?.status === 200) {
        setBlog(response?.data.data[0]);
      }
    } catch (error) {
      console.log("status is:", response?.status);
      console.log("ERROR OCCURED WHILE FETCHING:", error.message);
    }
  };

  const fetchEventData = async () => {
    try {
      const response = await axios.get(
        `https://strapi.orientspectra.com/api/events?sort[0]=Date_of_the_event&populate=*`
      );
      if (response?.status === 200) {
        setEvent(response?.data.data[0]);
      }
    } catch (error) {
      console.log("ERROR OCCURED WHILE FETCHING:", error.message);
    }
  };
  useEffect(() => {
    fetchBlogData();
    fetchEventData();
  }, []);


  return (
    <>
      <Helmet>
          <title>Orient Spectra | #1 Overseas Education Consultancy</title>
          <meta 
            name="description" 
            content="Orient Spectra is the top overseas education consultancy in Hyderabad with 3 branches in Himanaytnagar, Kothapet and Kukatpally. Orient Spectra helps students with their study abroad dream with right guidance." />
      </Helmet>
      <Hero blog={blog} event={event} />
      <Discovery />
      {/* <Acedemic /> */}
      <Events />
      <Country/>
      <Explore />
      <StudyAbroad />
      <Mission_Vision />
      <Course />
      {/* <Counselors /> */}
      <Testimonial />
      <Blog />
      <News />
      <GetTuchWithUs />
    </>
  );
};

export default LandingPage;
