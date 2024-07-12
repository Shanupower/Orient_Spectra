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
          "http://157.173.222.81:1337/api/news-and-prs?populate=*"
        );
        if (response?.status === 200) {
          setNewsData(response?.data.data);
        }
      } catch (error) {
        console.log("ERROR OCCURED WHILE FETCHING:", error.message);
      }
    };

    fetchData();
  }, []);
  console.log("response", NewsData);

  return (
    <>
      <Navbar />
      <Hero NewsData={NewsData[0]} />
      <LatestNews NewsData={NewsData[0]} />
      <RecentNews />
      <MoreBlog data={NewsData} />
      <GetTuchWithUs />
      <Footer />
    </>
  );
};

export default NewsPR;
