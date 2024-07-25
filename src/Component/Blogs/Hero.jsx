import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircleArrow from "../Common/CircleArrow";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import "./blog.css";

const Hero = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const handleNavigate = (post) => {
    navigate(`/content`, { state: { data: post } });
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);
  return (
    <div className="blog-hero-container section">
      <div className="blog-leftside-container">
        <div className="blog-image-section">
          {isLoading ? (
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"100%"}
              height={"100%"}
              sx={{ bgcolor: "grey.500" }}
            />
          ) : (
            <img
              src={`http://157.173.222.81:1337${data[0]?.attributes?.Headline_image?.data?.attributes?.formats?.large?.url}`}
              alt="Blog Image 1"
              onLoad={() => setIsLoading(false)}
              className="blog-image"
            />
          )}
        </div>
        <div className="blog-leftside-card1">
          <p>Best of the Week</p>
          <h1>{data[0]?.attributes?.Title}</h1>
        </div>
        <div className="blog-leftside-card2">
          <p>{data[0]?.attributes?.Short_Description}</p>
          <CircleArrow
            className={"CircleArrow"}
            onClick={() => handleNavigate(data[0])}
          />
        </div>
      </div>

      <div className="blog-rightside-container">
        <div className="blog-rightside-top-card">
          <div className="blog-image-section">
            {isLoading ? (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={"100%"}
                height={"100%"}
                sx={{ bgcolor: "grey.500" }}
              />
            ) : (
              <img
                src={`http://157.173.222.81:1337${data[1]?.attributes?.Headline_image?.data?.attributes?.formats?.large?.url}`}
                alt="Blog Image 1"
                className="blog-image"
                onLoad={() => setIsLoading(false)}
              />
            )}
          </div>
          <div className="blogtitlecard">
            <h1>{data[1]?.attributes?.Title}</h1>
            <CircleArrow
              className={"CircleArrow"}
              onClick={() => handleNavigate(data[1])}
            />
          </div>
          <p>{data[1]?.attributes?.Short_Description}</p>
        </div>
        <div className="blog-rightside-bottom-card">
          <div className="blog-image-section">
            {isLoading && (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={"100%"}
                height={"100%"}
                sx={{ bgcolor: "grey.500" }}
              />
            )}
            <img
              src={`http://157.173.222.81:1337${data[2]?.attributes?.Headline_image?.data?.attributes?.formats?.small?.url}`}
              alt=""
              className="blog-image"
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <div className="blogtitlecard">
            <h1>{data[2]?.attributes?.Title}</h1>
            <CircleArrow
              className={"CircleArrow"}
              onClick={() => handleNavigate(data[2])}
            />
          </div>
          <p>{data[2]?.attributes?.Short_Description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
