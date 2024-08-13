import CircleArrow from "../Common/CircleArrow";
import Skeleton from "@mui/material/Skeleton";
import { useState, useEffect } from "react";

import "./news.css";
const LatestNews = ({ NewsData }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="latest-newws-container section">
      <div className="latestnews-card">
        <div className="latest-image-card">
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
            src={`https://strapi.orientspectra.com${NewsData?.attributes?.Headline_image?.data[0]?.attributes?.formats?.large?.url}`}
            alt=""
          />
        </div>
        <div>
          <h1>{NewsData?.attributes?.Title}</h1>
          <CircleArrow className="CircleArrow" />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
