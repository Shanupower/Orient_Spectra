import CircleArrow from "../Common/CircleArrow";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./blog.css";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const MoreBlog = ({data}) => {
  const navigate = useNavigate();
  
  const handleNavigate = (post) => {
    navigate(`/content`, { state: { data: post } });
  };

  return (
    <div className="section moreBlog-ccontainer">
      <div className="moreblog-card">
        <h2>More Blogs</h2>
        <Stack spacing={2}>
          <Pagination count={5} size="small" />
        </Stack>
      </div>
      <div className="blog-section-card">
        {data.map((item) => (
          <div className="blogcontainer1" key={item?.id}>
            <div className="blogcard1">
              <h3>{item?.attributes.Title}</h3>
              <p>
                {item?.attributes.Short_Description}
              </p>
            </div>
            <CircleArrow 
              className={"CircleArrow"} 
              onClick={() => handleNavigate(item)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreBlog;
