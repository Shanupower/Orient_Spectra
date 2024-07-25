import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Box } from "@mui/material";

import Aos from "aos";
import "./SelectedBlog.css";
import GetTuchWithUs from "../../Landing_page/GetTuchWithUs2";
import Skeleton from "@mui/material/Skeleton";

const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

const YouMightAlsoLike = ({ RecentBlogs }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleNavigate2 = (post) => {
    navigate("/content", { state: { data: post } });
  };

  return (
    <div className="YouMightAlsoLike section">
      <h2>You Might Also Like</h2>
      <div className="Youmightlike-section">
        {RecentBlogs?.map((value, id) => (
          <div
            className="Youmightlike-container"
            key={id}
            onClick={() => handleNavigate2(value?.data)}
            style={{ cursor: "pointer" }}
          >
            <div className="youmight-img-content">
              <div className="youmight-img-card">
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
                  src={`http://157.173.222.81:1337${value?.data?.attributes?.Headline_image?.data?.attributes?.formats?.thumbnail?.url}`}
                  alt="alty"
                  onLoad={() => setIsLoading(false)}
                />
              </div>
              <p>{value?.data?.attributes?.Date}</p>
            </div>
            <div className="youmightlikeblog-congtent-card">
              <h3>{value?.data?.attributes?.Title}</h3>
              <p>{value?.data?.attributes?.Short_Description}</p>
              {/* <div onClick={() => handleNavigate2(value?.data)} style={{marginTop:".4rem", textAlign:"right"}}>
                <CircleArrow />
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function BlogBody() {
  const location = useLocation();
  const { data } = location?.state || {};
  const [postData, setPostData] = useState([]);
  const [randomBlogs, setRandomBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://157.173.222.81:1337/api/blogs?populate=*"
        );
        if (response?.status === 200) {
          setPostData(response?.data.data);
        }
      } catch (error) {
        console.log("ERROR OCCURED WHILE FETCHING:", error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (postData.length > 0) {
      const getRandomBlogs = () => {
        let shuffled = postData?.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 10).map((blog) => ({
          data: blog,
        }));
      };

      setRandomBlogs(getRandomBlogs());
    }
  }, [postData]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return (
      date.getDate() +
      " " +
      months[date.getMonth() + 1] +
      " " +
      date.getFullYear()
    );
  };

  const { attributes } = data;

  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
  }, []);

  let date = formatDate(attributes?.Date);

  return (
    <>
      <div className="singleblog-body section">
        <div className="hero-section-blog">
          <h1> {attributes?.Title}</h1>
          <div>
            <span>{formatDate(attributes?.updatedAt)}</span>
            <p>{attributes?.Short_Description}</p>
          </div>
          <div className="singleBlogImgae-container">
            {isLoading && (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={"100%"}
                height={"100%"}
                sx={{ bgcolor: "grey.500" }}
              />
            )}{" "}
            {!isLoading && (
              <img
                src={`http://157.173.222.81:1337${attributes?.Headline_image?.data?.attributes?.formats?.large?.url}`}
                alt="blog"
                onLoad={() => setIsLoading(false)}
              />
            )}
          </div>
        </div>
        <div className="TexteditorBlock">
          <div dangerouslySetInnerHTML={{ __html: attributes?.text }} />
        </div>
      </div>

      <YouMightAlsoLike RecentBlogs={randomBlogs} />
      <GetTuchWithUs />
    </>
  );
}
