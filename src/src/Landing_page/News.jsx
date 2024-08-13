import Img1 from "../assets/WhatsApp Image 2024-05-31 at 2.22.46 PM.jpeg";
import Img2 from "../assets/WhatsApp Image 2024-05-31 at 2.05.55 PM.jpeg";
import Img3 from "../assets/DSC02094.jpeg";
import axios from "axios";

import Play from "../assets/playIcon.png";
import "./index.css";
import { useState, useEffect } from "react";
const News = () => {
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
  return (
    <>
      <div className="section News-container">
        <h2>News & Media</h2>
        <div className="media-container">
          {NewsData?.map((item) => (
            <div className="media-card" key={item?.id}>
              <div className="media-video">
                <img
                  src={`https://strapi.orientspectra.com${item?.attributes?.Headline_image?.data[0]?.attributes?.formats?.large?.url}`}
                  alt=""
                />
                {/* <img className="playIcon" src={Play} alt="" /> */}
              </div>
              <p>{item?.attributes?.Title}</p>
              <span>{item?.attributes?.Short_Description}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
