import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Box } from "@mui/material";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import Aos from "aos";
import "./SelectedBlog.css";
import GetTuchWithUs from "../../Landing_page/GetTuchWithUs2";
import CircleArrow from "../Common/CircleArrow";
import Img1 from "../../assets/Property 1=Default (1).png";
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
  const handleNavigate = (post) => {
    navigate("/content", { state: { data: post } });
  };

  return (
    <div className="YouMightAlsoLike section">
      <h2>You Might Also Like</h2>
      <div className="Youmightlike-section">
        {RecentBlogs?.map((value, id) => (
          <div className="Youmightlike-container" key={id}>
            <div
              className="youmight-img-content"
              onClick={() => handleNavigate(value)}
            >
              <div className="youmight-img-card">
                {value.img && (
                  <img src={`http://157.173.222.81:1337${value?.img}`} alt="" />
                )}
              </div>
              <p>
                {value.date}
                <CircleArrow />
              </p>
            </div>
            <div className="youmightlikeblog-congtent-card">
              <h3>{value?.title}</h3>
              <p>{value?.description}</p>
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
          date: formatDate(blog?.attributes?.Date),
          title: blog.attributes?.Title,
          description: blog.attributes?.Short_Description,
          img: blog.attributes?.Headline_image?.data?.attributes?.formats?.large
            ?.url,
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

  let imgURL = `http://157.173.222.81:1337${attributes?.Headline_image.data.attributes.formats.large.url}`;

  return (
    <>
      <Navbar />

      <div className="singleblog-body section">
        <div className="hero-section-blog">
          <h1> {attributes?.Title}</h1>
          <div>
            <span>{formatDate(attributes.updatedAt)}</span>
            <p>{attributes?.Short_Description}</p>
          </div>
          <div className="singleBlogImgae-container">
            <img src={imgURL} alt="blog" />
          </div>
        </div>
        <div className="TexteditorBlock">
          <div
            className="Richtextcard"
            dangerouslySetInnerHTML={{ __html: attributes.text }}
          />
        </div>
      </div>

      <YouMightAlsoLike RecentBlogs={randomBlogs} />
      <GetTuchWithUs />
      <Footer />
    </>
  );
}
