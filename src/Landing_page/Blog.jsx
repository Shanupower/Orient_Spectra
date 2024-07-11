import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

const Blog = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/blogs?populate=*`
        );
        if (response?.status === 200) {
          // console.log("status is:", response);
          setData(response?.data.data);
        }
      } catch (error) {
        console.log("status is:", response?.status);
        console.log("ERROR OCCURED WHILE FETCHING:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleNavigate = (post) => {
    navigate(`/content`, { state: { data: post } });
  };

  return (
    <>
      <div className="section BlogContainer">
        <div className="leftBlogCard">
          <div className="leftBlogCard-image-card">
            <img
              src={`http://157.173.222.81:1337${data[0]?.attributes?.Headline_image.data.attributes.formats.large.url}`}
              alt="Blog Image 1"
            />
          </div>
          <div className="titleblogContent">
            <span>New</span>
            <p>{data[0]?.attributes?.Title.split(" ").slice(0, 3).join(" ")}</p>
            <strong>
              {data[0]?.attributes?.Title.split(" ").slice(3).join(" ")}
            </strong>
          </div>
          <div className="blogContent">
            {" "}
            <p>{data[0]?.attributes?.Short_Description}</p>
            <ArrowForwardIcon
              className="rightArrowBlog"
              onClick={() => handleNavigate(data[0])}
            />
          </div>
        </div>
        <div className="rightBlogsCantainer">
          {data.splice(0, 4).map((item) => (
            <div
              className="rightcard"
              key={item}
              onClick={() => handleNavigate(item)}
            >
              <div className="leftBlogCard-image-card">
                <img
                  src={`http://157.173.222.81:1337${item?.attributes?.Headline_image.data.attributes.formats.large.url}`}
                  alt="Blog Image 1"
                />
              </div>
              <strong>{item?.attributes?.Title}</strong>
              <p>{item?.attributes?.Short_Description}</p>
            </div>
          ))}
          <Link to={"/blogs"} className="Link_route findMore">
            Find More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Blog;
