import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import "./index.css";
import Button from "../Component/Common/Button";
import { useMediaQuery } from "@mui/material";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const isMd = useMediaQuery("(max-width:986px)");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://strapi.orientspectra.com/api/blogs?sort[0]=Date:desc&populate=*`
        );

        if (response?.status === 200) {
          // const sortedData = response.data.data.sort(
          //   (a, b) => new Date(b.attributes.Date) - new Date(a.attributes.Date)
          // );
          setBlogData(response.data.data);
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
        <p>
          Latest from Our <span>Knowledge Base</span>
        </p>
      </div>
      <div className="section BlogContainer">
        <div className="leftBlogCard">
          <div className="leftBlogCard-image-card">
            <img
              src={`https://strapi.orientspectra.com${blogData[0]?.attributes?.Headline_image?.data?.attributes?.formats?.small?.url}`}
              alt="Blog Image 1" loading="lazy"
            />
          </div>

          {!isMd && (
            <div className="blogContent">
              {" "}
              <p></p>
              <Button
                arrow={true}
                link={`blog-content/${blogData[0]?.id}`}
                className="blogCOntentArrow"
              />
            </div>
          )}
        </div>
        <div className="rightBlogsCantainer">
          {blogData.slice(1, 5).map((item) => (
            <Link
              to={`blog-content/${item?.id}`}
              className="rightcard1 Link_route"
              key={item?.id}
            >
              {item?.attributes?.Headline_image?.data && (
                <div className="leftBlogCard-image-card1">
                  <img
                    src={`https://strapi.orientspectra.com${item?.attributes?.Headline_image?.data?.attributes.formats.small.url}`}
                    alt="Blog Image 1" loading="lazy"
                  />
                </div>
              )}
              <div className="blog-content-section">
                <strong>{item?.attributes?.Title}</strong>
                <p>
                  {item?.attributes?.Short_Description.slice(0, 100)}
                  <b>...more</b>
                </p>
              </div>
            </Link>
          ))}
          <div className="findmoreButton2 Container">
            <Link to={"/blogs"} className="Link_route findMore">
              Find More <ArrowForwardIcon className="blogarrrow" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
