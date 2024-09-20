import axios from "axios";
import Play from "../assets/playIcon.png";
import "./index.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { useMediaQuery } from "@mui/material";

const News = () => {
  const [NewsData, setNewsData] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isshowCover, setShowCover] = useState(false);
  const isMd = useMediaQuery("(max-width:1024px)");
  const isSm = useMediaQuery("(max-width:986px)");
  const videoRef = useRef(null);
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

  const handleVideoPlay =()=>{
      if(isPlaying && isshowCover) {
        videoRef.current.pause();
        setShowControls(false);
      } else {
        videoRef.current.play();
      }
    setIsPlaying(false);
    setShowCover(false);
  }

  const handlePlay = () => {
    setIsPlaying(true);
    setShowCover(true); // Hide cover when video starts playing
  };

  const handlePause = () => {
    setIsPlaying(false);

  };
  return (
    <>
      <div className="section News-container">
        <h2>Glimpses of Our <span>Contribution</span></h2>
        <Swiper 
            spaceBetween={30}
               slidesPerView={isSm ? 1 : isMd ? 2 : 3}
               className="country_Container"
               modules={[Navigation, Scrollbar]}
               autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              //  speed={1000}
               navigation>
        <div className="media-container">
          {NewsData?.map((item) => (
            <SwiperSlide className="media-card" key={item?.id}>
              <div className="media-video" onClick={handleVideoPlay}>
                {item?.attributes?.Headline_image?.data[0]?.attributes?.mime === 'video/mp4'? (
                  <>
                  {!isshowCover ? (
                    <img
                    src="https://strapi.orientspectra.com/uploads/australia_d22eb37527.jpg"
                    alt="Video thumbnail"
                    loading="lazy"
                    className="video-thumbnail"
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      objectFit: 'cover',
                      // zIndex: 1,
                    }} 
                    />
                  ) :''}

                    {!isPlaying ? (
                    <img className="playIcon" src={Play} alt="" loading="lazy"/>
                    ): ''}
                  <video className="NewsVideo" muted controls onPause={handlePause} onPlay={handlePlay}>
                  <source src={`https://strapi.orientspectra.com${item?.attributes?.Headline_image?.data[0]?.attributes?.url}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                </>
                ):(
                  <img
                    src={`https://strapi.orientspectra.com${item?.attributes?.Headline_image?.data[0]?.attributes?.formats?.large?.url}`}
                    alt=""
                    loading="lazy"
                  />
                )}
                
              </div>
              <p>{item?.attributes?.Title}</p>
              <span>{item?.attributes?.Short_Description}</span>
            </SwiperSlide>
          ))}
        </div>
        </Swiper>
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
