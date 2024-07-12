import React from "react";
import CircleArrow from "../Common/CircleArrow";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { useLocation, useNavigate } from "react-router-dom";

import "./blog.css";

const options = {
  autoplay: false,
  center: true,
  loop: true,
  nav: true,
  items: 3,
};

const BestBlog = ({ data }) => {
  const navigate = useNavigate();
  const handleNavigate = (post) => {
    navigate("/content", { state: { data: post } });
  };

  return (
    <div className="bestblog-conntainer section">
      <div className="continue-reading-card">
        <p>Continue Reading</p>
      </div>

      <OwlCarousel className="owl-theme" {...options}>
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
                Title Of the <br />
                Blog
              </h1>
            </div>
            <div className="bestblog-leftside-card2">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                non earum numquam error illo?
              </p>
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
