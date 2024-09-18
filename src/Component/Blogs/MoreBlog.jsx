import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CircleArrow from "../Common/CircleArrow";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./blog.css";
import axios from "axios";

const MoreBlog = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);
  const itemsPerPage = 6;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [blogDatas, setBlogData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        // `https://strapi.orientspectra.com/api/blogs?sort[0]=Date:desc&populate=*&fields[0]=Title&fields[1]=Short_Description `
        `https://strapi.orientspectra.com/api/blogs?populate=*&fields[0]=Title&fields[1]=Short_Description&pagination[page]=${currentPage}&pagination[pageSize]=6`
      );
      console.log(response.data.meta.pagination.pageCount);

      if (response?.status === 200) {
        setBlogData(response.data.data);
        setPageCount(response.data.meta.pagination.pageCount);
      }
    } catch (error) {
      console.log("ERROR OCCURED WHILE FETCHING:", error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [currentPage]);

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
        {blogDatas.map((item) => (
          <div className="blogcontainer1" key={item?.id}>
            <div className="blogcard1">
              <h3>{item?.attributes.Title}</h3>
              <p>{item?.attributes.Short_Description}</p>
            </div>

            <Link to={`/blog-content/${item?.id}`} className="Link_route">
              <CircleArrow className={"CircleArrow "} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreBlog;
