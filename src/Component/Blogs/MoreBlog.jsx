import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircleArrow from "../Common/CircleArrow";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./blog.css";

const MoreBlog = ({ data }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handleNavigate = (post) => {
    navigate(`/content`, { state: { data: post } });
  };

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="section moreBlog-ccontainer">
      <div className="moreblog-card">
        <h2>More Blogs</h2>
        <Stack spacing={2}>
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handleChangePage}
            size="small"
          />
        </Stack>
      </div>
      <div className="blog-section-card">
        {currentData.map((item) => (
          <div className="blogcontainer1" key={item?.id}>
            <div className="blogcard1">
              <h3>{item?.attributes.Title}</h3>
              <p>{item?.attributes.Short_Description}</p>
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
