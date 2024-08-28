import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import "./index.css";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://strapi.orientspectra.com/api/blogs?populate=*`
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

  return (
    <>
    <div className="Blog-section">
        <p>Latest from Our <span>Knowledge Base</span></p>
        </div>
      <div className="section BlogContainer">
        <div className="leftBlogCard">
          <div className="leftBlogCard-image-card">
            <img
              src={`https://strapi.orientspectra.com${blogData[0]?.attributes?.Headline_image?.data?.attributes?.formats?.thumbnail?.url}`}
              alt="Blog Image 1"
            />
          </div>
          <div className="titleblogContent">
            {/* <span>New</span> */}
            {/* <p>
              {blogData[0]?.attributes?.Title.split(" ").slice(0, 3).join(" ")}
            </p>
            <strong>
              {blogData[0]?.attributes?.Title.split(" ").slice(3).join(" ")}
            </strong> */}
          </div>
          <div className="blogContent">
            {" "}
            <p>{/* {blogData[0]?.attributes?.Short_Description} */}</p>
            <Link to={`blog-content/${blogData[0]?.id}`}>
              <ArrowForwardIcon className="rightArrowBlog" />
            </Link>
          </div>
        </div>
        <div className="rightBlogsCantainer">
          {blogData.slice(1, 4).map((item) => (
            <Link
              to={`blog-content/${item?.id}`}
              className="rightcard1 Link_route"
              key={item?.id}
            >
              {item?.attributes?.Headline_image?.data && (
                <div className="leftBlogCard-image-card1">
                  <img
                    src={`https://strapi.orientspectra.com${item?.attributes?.Headline_image?.data?.attributes.formats.small.url}`}
                    alt="Blog Image 1"
                  />
                </div>
              )}
              <div className="blog-content-section">
                <strong>{item?.attributes?.Title}</strong>
                <p>
                  {item?.attributes?.Short_Description.slice(1, 100)}
                  <b>...more</b>
                </p>
              </div>
            </Link>
          ))}
          <div className="findmoreButton2 Container">
            <Link to={"/news-&-pr"} className="Link_route findMore">
                Find More <ArrowForwardIcon className="blogarrrow" />
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
