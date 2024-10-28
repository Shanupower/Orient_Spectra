import React, { useEffect, useState } from "react";
import "./news.css";
import axios from "axios";
import { useParams } from "react-router-dom";
const NewsDetails = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState(null);
  const fetchNewsData = async () => {
    try {
      const response = await axios.get(
        `https://strapi.orientspectra.com/api/news-and-prs/${id}/?populate=* `
      );
      if (response?.status === 200) {
        setNewsData(response?.data?.data);
      }
    } catch (error) {
      console.log("ERROR OCCURED WHILE FETCHING:", error);
    }
  };
  useEffect(() => {
    fetchNewsData();
  }, [id]);
  console.log(newsData);

  return (
    <div className="news-details-container section">
      <div className="news-heading-details">
        <h1>{newsData?.attributes?.Title}</h1>
        <div className="title-container-news">
          <h2>{newsData?.attributes?.Short_Description}</h2>
          <p>{newsData?.attributes?.Date}</p>
        </div>
      </div>
      <div className="banner-image-conatiner">
        <img
          src={`https://strapi.orientspectra.com${newsData?.attributes?.Thumbnail?.data?.attributes?.formats?.large?.url}`}
          alt=""
        />
      </div>
      <div className="TexteditorBlock">
        <div dangerouslySetInnerHTML={{ __html: newsData?.attributes?.Text }} />
      </div>
    </div>
  );
};

export default NewsDetails;
