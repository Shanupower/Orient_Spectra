import React, { useEffect, useState } from "react";
import Navbar from "../Common/Navbar";
import LandscapeIcon from "@mui/icons-material/Landscape";
import "./SelectedBlog.css";
import "../../FindingYourCourse/find.css";
import { Divider } from "antd";
import CircleArrow from "../Common/CircleArrow";
import Footer from "../Common/Footer";
import GetTuchWithUs from "../../Landing_page/GetTuchWithUs2";
import axios from "axios"
import { useParams } from "react-router-dom";


const BlogTitle = () => {
  return (
    <div className="blog-title-p">
      <div></div>
      <div>
        <h2>H2 Title Lorem ipsum dolor sit amet, consectetuer adipi</h2>
        <p>
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

const RecentBlogs = [
  {
    id: 1,
    date: "19 JUN2024",
    title: "Recent Blog Title",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malutpat.",
      img:""
  },
  {
    id: 1,
    date: "19 JUN2024",
    title: "Recent Blog Title",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malutpat.",
       img:""
  },
  {
    id: 2,
    date: "19 JUN2024",
    title: "Recent Blog Title",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malutpat.",
       img:""
  },
  {
    id: 3,
    date: "19 JUN2024",
    title: "Recent Blog Title",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malutpat.",
       img:""
  },
  {
    id: 3,
    date: "19 JUN2024",
    title: "Recent Blog Title",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malutpat.",
       img:""
  },
 
];


const YouMightAlsoLike = () => {
  return (
    <>
      <div>
        <div>
          <h4>You Might Also Like</h4>
        </div>
        <div className="YouMightAlsoLike-blog-main-div">
            {RecentBlogs.map((value, id)=><>
            <div className="YouMightAlsoLike-blog-div">
                <div></div>
                <div className="YouMightAlsoLike-blog-date">
                    <p>{value.date}</p>
                    <CircleArrow 
                        className={"CircleArrow"} />
                </div>



            </div>
               
            </>)}
        </div>
      </div>
    </>
  );
};



const SelectedBlog = () => {
  return (
    <>
      <div className="selected-blog-hero">
        <div className="selected-blog-div">
          <Navbar />
        </div>
        <div className="selected-blog-title">
          <h1>Title of The Blog</h1>
          <div className="selected-description-div">
            <p>19 JUN 2024</p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh malutpat.
            </p>
          </div>
          {/* <LandscapeIcon className="LandscapeIconIcon2" /> */}
          <img
            height={180}
            width={300}
            style={{ backgroundColor: "red" }}
            alt="Blog Image"
          />
          <div>
            <p></p>
            </div>
          <hr />
          <div className="remaing-blogs">
            <h3>H3 Title</h3>
            <p>19 JUN 2024</p>
          </div>
          <hr />
          <div className="remaing-blogs">
            <h3>H3 Title</h3>
            <p>19 JUN 2024</p>
          </div>
          <YouMightAlsoLike />
        </div>
      </div>
      <GetTuchWithUs/>
      <Footer/>
    </>
  );
};

export default SelectedBlog;
