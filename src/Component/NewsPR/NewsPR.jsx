import { useState, useEffect } from "react";
import GetTuchWithUs from "../../Landing_page/GetTuchWithUs2";
import MoreBlog from "../Blogs/MoreBlog";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import LatestNews from "./LatestNews";
import RecentNews from "./RecentNews";
import axios from "axios";

const NewsPR = () => {
  const [NewsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://strapi.orientspectra.com/api/news-and-prs?populate=*"
        );
        if (response?.status === 200) {
          setNewsData(response?.data?.data || []);
        }
      } catch (error) {
        console.error("ERROR OCCURRED WHILE FETCHING:", error.message);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {NewsData.length > 0 && <Hero NewsData={NewsData[0]} />}
      {NewsData.length > 0 && <LatestNews NewsData={NewsData[0]} />}
      {NewsData.length > 0 && <RecentNews NewsData={NewsData.slice(1, 5)} />}
      {NewsData.length > 5 && <MoreBlog data={NewsData.slice(5)} />}
      <GetTuchWithUs />
    </>
  );
};

export default NewsPR;
