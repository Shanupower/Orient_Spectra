import React from "react";
import CircleArrow from "../Common/CircleArrow";
import "./BlogDetails.css";
import { NavLink } from "react-router-dom";

const blogs = [
  { id: 1, title: "Blog Title", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malut." },
  { id: 2, title: "Blog Title", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malut." },
  { id: 3, title: "Blog Title", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malut." },
  { id: 4, title: "Blog Title", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malut." },
  { id: 5, title: "Blog Title", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malut." },
  { id: 6, title: "Blog Title", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malut." },
  { id: 7, title: "Blog Title", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malut." },
  { id: 8, title: "Blog Title", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malut." },
  { id: 9, title: "Blog Title", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malut." }
];

const BlogsDetails = () => {
  return (
    <div className="blogs-container">
      {blogs.map(blog => (
        <div key={blog.id} className="blogs-list">
          <h3>{blog.title}</h3>
          <div className="blogs-description">
            <p>{blog.description}</p>
            <NavLink style={{color:"black"}} to={`/blogs/${blog.id}`}>
            <CircleArrow className={"CircleArrow"} />
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

// export default BlogsDetails;
