import CircleArrow from "../Common/CircleArrow";
import Skeleton from "@mui/material/Skeleton";
import { useState, useEffect } from "react";

import "./news.css";
const RecentNews = ({ NewsData }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.scroll(0, 0);
  });
  console.log("NEsDAAT", NewsData);
  return (
    <div className="Recent-newws-container section">
      {NewsData?.map((item) => (
        <div key={item.id} className="recent_news_section">
          <div className="Recentnews-card">
            <div className="recentnews-card-img">
              {isLoading && (
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={"100%"}
                  height={"100%"}
                  sx={{ bgcolor: "grey.500" }}
                />
              )}{" "}
              <img
                src={`https://strapi.orientspectra.com${item?.attributes?.Headline_image?.data[0]?.attributes?.formats?.large?.url}`}
                alt=""
              />
            </div>
            <div>
              <p>{item?.attributes.Title}</p>
              <CircleArrow className="CircleArrow" />
            </div>
          </div>
          <div className="recent-news-title-card">
            <h1>{item?.attributes.Title}</h1>
            <p>{item?.attributes?.Short_Description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentNews;
