import Footer from "../Component/Common/Footer";
import Navbar from "../Component/Common/Navbar";
import Acedemic from "./Acedemic";
import Blog from "./Blog";
import Counselors from "./Counselors";
import Course from "./Course";
import Discovery from "./Discovery";
import Events from "./Events";
import Explore from "./Explore";
import Faq from "./Faq";
import GetTuchWithUs from "./GetTuchWithUs";
import Hero from "./Hero";
import News from "./News";
import StudyAbroad from "./StudyAbroad";
import Testimonial from "./Testimonial";
import axios from "axios";
import { useEffect, useState } from "react";
const LandingPage = () => {
  const [blog, setBlog] = useState({});
  const [event, setEvent] = useState({});

  const fetchBlogData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/blogs?populate=*`
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
        "http://157.173.222.81:1337/api/events?sort[0]=Date_of_the_event&populate=*"
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

  console.log("blog", blog);
  console.log("event", event);

  return (
    <>
      <Hero blog={blog} event={event} />
      <Discovery />
      <Acedemic />
      <Events />
      <Explore />
      <StudyAbroad />
      <Course />
      <Counselors />
      <Testimonial />
      <Blog />
      <News />
      {/* <Faq /> */}
      <GetTuchWithUs />
    </>
  );
};

export default LandingPage;
