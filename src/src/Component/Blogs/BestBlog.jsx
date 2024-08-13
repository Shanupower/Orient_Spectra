import React, { useEffect, useMemo, useState } from "react";
import CircleArrow from "../Common/CircleArrow";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

import { useMediaQuery } from "@mui/material";
import "./blog.css";

const BestBlog = ({ data }) => {
  const isMd = useMediaQuery("(max-width:986px)");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bestblog-conntainer section">
      <div className="continue-reading-card">
        <p>Continue Reading</p>
      </div>

      <OwlCarousel
        loop={true}
        margin={10}
        nav
        center={true}
        autoplay={true}
        items={isMd ? 1 : 3}
        className="owl-theme"
      >
        {data.map((item) => (
          <div className="bestblog-leftside-container" key={item.id}>
            <div className="blog-image-section">
              {!isLoading && (
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={"100%"}
                  height={"100%"}
                  sx={{ bgcolor: "grey.500" }}
                />
              )}
              <img
                src={`https://strapi.orientspectra.com${item?.attributes?.Headline_image?.data?.attributes?.formats?.thumbnail?.url}`}
                alt="Blog Image 1"
                className="blog-image"
                onLoad={() => setIsLoading(false)}
              />
            </div>
            <div className="bestblog-leftside-card1">
              <p>Best of the Week</p>
              <h1>
                <h1>{item?.attributes?.Title}</h1>
                <br />
              </h1>
            </div>
            <div className="bestblog-leftside-card2">
              <p>{item?.attributes.Short_Description}</p>

              <Link to={`/blog-content/${item?.id}`} className="Link_route">
                <CircleArrow className={"CircleArrow "} />
              </Link>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default BestBlog;
