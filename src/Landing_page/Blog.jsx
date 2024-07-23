import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://157.173.222.81:1337/api/blogs?populate=*`
        );
        if (response?.status === 200) {
          const sortedData = response.data.data.sort(
            (a, b) => new Date(b.attributes.Date) - new Date(a.attributes.Date)
          );
          setBlogData(sortedData);
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
  console.log("blogssssssssss", blogData);
  return (
    <>
      <div className="section BlogContainer">
        <div className="leftBlogCard">
          <div className="leftBlogCard-image-card">
            <img
              src={`http://157.173.222.81:1337${blogData[0]?.attributes?.Headline_image?.data?.attributes?.formats?.thumbnail?.url}`}
              alt="Blog Image 1"
            />
          </div>
          <div className="titleblogContent">
            <span>New</span>
            <p>
              {blogData[0]?.attributes?.Title.split(" ").slice(0, 3).join(" ")}
            </p>
            <strong>
              {blogData[0]?.attributes?.Title.split(" ").slice(3).join(" ")}
            </strong>
          </div>
          <div className="blogContent">
            {" "}
            <p>{blogData[0]?.attributes?.Short_Description}</p>
            <ArrowForwardIcon
              className="rightArrowBlog"
              onClick={() => handleNavigate(blogData[0])}
            />
          </div>
        </div>
        <div className="rightBlogsCantainer">
          {blogData.slice(1, 5).map((item) => (
            <div
              className="rightcard1"
              key={item}
              onClick={() => handleNavigate(item)}
            >
              {item?.attributes?.Headline_image?.data && (
                <div className="leftBlogCard-image-card1">
                  <img
                    src={`http://157.173.222.81:1337${item?.attributes?.Headline_image?.data?.attributes.formats.small.url}`}
                    alt="Blog Image 1"
                  />
                </div>
              )}
              <div className="blog-content-section">
                <strong>{item?.attributes?.Title}</strong>
                <p>{item?.attributes?.Short_Description.slice(1, 100)}<b>...more</b></p>
              </div>
            </div>
          ))}
          <Link to={"/blogs"} className="Link_route findMore">
            Find More <ArrowForwardIcon className="blogarrrow" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Blog;
