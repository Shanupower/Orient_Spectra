import { useState, useEffect } from "react";
import GetTuchWithUs from "../../Landing_page/GetTuchWithUs2";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import SuccessStory from "./SuccessStory";
import axios from "axios";

const Event = () => {
  const [Eventdata, setEventData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://157.173.222.81:1337/api/events?sort[0]=Date_of_the_event&populate=*"
        );
        if (response?.status === 200) {
          // console.log("status is:", response);
          setEventData(response?.data.data);
        }
      } catch (error) {
        console.log("ERROR OCCURED WHILE FETCHING:", error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <Hero eventData={Eventdata} />
      <SuccessStory eventData={Eventdata} />
      <GetTuchWithUs />
      <Footer />
    </>
  );
};

export default Event;
