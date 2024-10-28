import CircleArrow from "../Common/CircleArrow";
import Skeleton from "@mui/material/Skeleton";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useMediaQuery } from "@mui/material";

import "./news.css";
import { Link } from "react-router-dom";
const RecentNews = ({ NewsData }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.scroll(0, 0);
  });
  const isMd = useMediaQuery("(max-width:1024px)");
  const isSm = useMediaQuery("(max-width:986px)");
  return (
    <div className="Recent-newws-container section">
      <Swiper
        spaceBetween={30}
        slidesPerView={isSm ? 1 : isMd ? 2 : 3}
        className="country_Container"
        modules={[Navigation, Scrollbar, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        speed={1000}
        navigation
        loop={true}
      >
        <div>
          {NewsData?.map((item) => (
            <SwiperSlide className="recent_news_section" key={item.id}>
              <div className="Recentnews-card">
                <div className="recentnews-card-img">
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
                    src={`https://strapi.orientspectra.com${item?.attributes?.Headline_image?.data[0]?.attributes?.formats?.large?.url}`}
                    alt=""
                  />
                </div>

                <Link to={`/news-and-pr-detail/${item?.id}`}>
                  <CircleArrow className="CircleArrow" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default RecentNews;
