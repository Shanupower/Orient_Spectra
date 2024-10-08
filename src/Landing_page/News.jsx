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
  const [isPlaying, setIsPlaying] = useState(null); // Store video ID instead of boolean
  const isMd = useMediaQuery("(max-width:1024px)");
  const isSm = useMediaQuery("(max-width:986px)");
  const videoRefs = useRef({}); // Use refs for multiple videos

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

  const handleVideoPlay = (id) => {
    const currentVideo = videoRefs.current[id];

    // If video reference exists
    if (currentVideo) {
      if (isPlaying === id) {
        currentVideo.pause();
        setIsPlaying(null); // Reset state when video is paused
      } else {
        // Pause the currently playing video (if any)
        if (isPlaying !== null && videoRefs.current[isPlaying]) {
          videoRefs.current[isPlaying].pause();
        }
        currentVideo.play(); // Play the clicked video
        setIsPlaying(id); // Set the currently playing video ID
      }
    }
  };


  const NewsPrData = [...NewsData].reverse();

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
          navigation
        >
          <div className="media-container">
            {NewsPrData?.map((item, index) => (
              <SwiperSlide className="media-card" key={item?.id}>
                <div className="media-video">
                  {item?.attributes?.Headline_image?.data[0]?.attributes?.mime === 'video/mp4' ? (
                    <>
                      {isPlaying !== item.id && (
                    <>
                      <img
                        src={`https://strapi.orientspectra.com${item?.attributes?.Thumbnail?.data?.attributes?.formats?.large?.url}`}
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
                        }}
                        onClick={() => handleVideoPlay(item.id)}
                      />
                      <img className="playIcon" src={Play} alt="Play Icon" onClick={() => handleVideoPlay(item.id)}/>
                    </>
                  )}

                  <video
                    className="NewsVideo"
                    muted
                    controls
                    ref={(el) => (videoRefs.current[item.id] = el)} // Store reference to each video
                    onPause={() => {
                      setIsPlaying(null); // Reset playing state on pause
                    }}
                    onPlay={() => {
                      handleVideoPlay(item.id); // Call play handler
                    }}
                  >
                    <source
                      src={`https://strapi.orientspectra.com${item?.attributes?.Headline_image?.data[0]?.attributes?.url}`}
                      type="video/mp4"
                    />
                  </video>
                    </>
                  ) : (
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
