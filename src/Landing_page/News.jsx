import axios from "axios";
import Play from "../assets/playIcon.png";
import "./index.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const News = () => {
  const [NewsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://strapi.orientspectra.com/api/news-and-prs?populate=*"
        );
        if (response?.status === 200) {
          setNewsData(response?.data?.data || []);
        }
      } catch (error) {
        console.error("ERROR OCCURRED WHILE FETCHING:", error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="section News-container">
        <h2>Glimpses of Our <span>Contribution</span></h2>
        <div className="media-container">
          {NewsData?.map((item) => (
            <div className="media-card" key={item?.id}>
              <div className="media-video">
                <img
                  src={`https://strapi.orientspectra.com${item?.attributes?.Headline_image?.data[0]?.attributes?.formats?.large?.url}`}
                  alt=""
                />
                {/* <img className="playIcon" src={Play} alt="" /> */}
              </div>
              <p>{item?.attributes?.Title}</p>
              <span>{item?.attributes?.Short_Description}</span>
            </div>
          ))}
        </div>
          <div className="findmoreButton Container">
            <Link to={"/news-&-pr"} className="Link_route findMore">
                Find More <ArrowForwardIcon className="blogarrrow" />
              </Link>
          </div>
      </div>
    </>
  );
};

export default News;
