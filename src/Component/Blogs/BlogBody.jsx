import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Aos from "aos";
import "./SelectedBlog.css";
import GetTuchWithUs from "../../Landing_page/GetTuchWithUs2";
import Skeleton from "@mui/material/Skeleton";

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
  const [isLoading, setIsLoading] = useState(true);
  console.log("VVVRecentBlogs", RecentBlogs);
  return (
    <div className="YouMightAlsoLike section">
      <h2>You Might Also Like</h2>
      <div className="Youmightlike-section">
        {RecentBlogs?.map((value, id) => (
          <Link
            to={`/blog-content/${value?.data?.id}`}
            className="Youmightlike-container Link_route "
            key={id}
            style={{ cursor: "pointer", color: "black" }}
          >
            <div className="youmight-img-content">
              <div className="youmight-img-card">
                {isLoading && (
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={"100%"}
                    height={"100%"}
                    sx={{ bgcolor: "grey.500" }}
                  />
                )}{" "}
                <img
                  src={`http://157.173.222.81:1337${value?.data?.attributes?.Headline_image?.data?.attributes?.formats?.thumbnail?.url}`}
                  alt="alty"
                  onLoad={() => setIsLoading(false)}
                />
              </div>
              <p>{value?.data?.attributes?.Date}</p>
            </div>
            <div className="youmightlikeblog-congtent-card">
              <h3>{value?.data?.attributes?.Title}</h3>
              <p>{value?.data?.attributes?.Short_Description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function BlogBody() {
  const [blogContent, setBlogContent] = useState();
  const [postData, setPostData] = useState([]);
  const [randomBlogs, setRandomBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogContent]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://157.173.222.81:1337/api/blogs/${id}/?populate=*  `
        );
        if (response?.status === 200) {
          setBlogContent(response?.data.data);
        }
      } catch (error) {
        console.log("ERROR OCCURED WHILE FETCHING:", error.message);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://157.173.222.81:1337/api/blogs/?populate=*&fields[0]=Title&fields[1]=Date&fields[2]=Short_Description `
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
          data: blog,
        }));
      };

      setRandomBlogs(getRandomBlogs());
    }
  }, [postData]);

  return (
    <>
      <div className="singleblog-body section">
        <div className="hero-section-blog">
          <h1> {blogContent?.attributes?.Title}</h1>
          <div>
            <span> {blogContent?.attributes?.Date}</span>
            <p>{blogContent?.attributes?.Short_Description}</p>
          </div>
          <div className="singleBlogImgae-container">
            {isLoading && (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={"100%"}
                height={"100%"}
                sx={{ bgcolor: "grey.500" }}
              />
            )}{" "}
            <img
              src={`http://157.173.222.81:1337${blogContent?.attributes?.Headline_image?.data?.attributes?.formats?.large?.url}`}
              alt="blog"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
        <div className="TexteditorBlock">
          <div
            dangerouslySetInnerHTML={{ __html: blogContent?.attributes?.text }}
          />
        </div>
      </div>

      <YouMightAlsoLike RecentBlogs={randomBlogs} />
      <GetTuchWithUs />
    </>
  );
}
