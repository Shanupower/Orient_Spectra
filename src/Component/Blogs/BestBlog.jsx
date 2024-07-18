import React from "react";
import CircleArrow from "../Common/CircleArrow";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { useLocation, useNavigate } from "react-router-dom";

import "./blog.css";
import { useMediaQuery } from "@mui/material";

const BestBlog = ({ data }) => {
  const isMd = useMediaQuery("(max-width:986px)");
  const navigate = useNavigate();
  const handleNavigate = (post) => {
    navigate("/content", { state: { data: post } });
  };

  return (
    <div className="bestblog-conntainer section">
      <div className="continue-reading-card">
        <p>Continue Reading</p>
      </div>

      <OwlCarousel
        loop={false}
        margin={10}
        nav
        center={true}
        autoplay={false}
        items={isMd ? 1 : 3}
        className="owl-theme"
      >
        {data.map((item) => (
          <div className="bestblog-leftside-container" key={item.id}>
            <div className="blog-image-section">
              <img
                src={`http://157.173.222.81:1337${item?.attributes?.Headline_image.data.attributes.formats.large.url}`}
                alt="Blog Image 1"
                className="blog-image"
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
              <CircleArrow
                className="rightCircleArrow"
                onClick={() => handleNavigate(item)}
              />
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default BestBlog;
