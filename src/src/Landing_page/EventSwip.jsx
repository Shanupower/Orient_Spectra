import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const EventDargCard = ({ Eventdata }) => {
  const navigate = useNavigate();

  const handleNavigate = (post) => () => {
    navigate(`/events`, { state: { data: post } });
  };
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {Eventdata?.map((item, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide-conatiner"
            onClick={handleNavigate(item)}
          >
            <h2 className="EventHeadine">{item?.attributes?.Headline}</h2>
            <span>{item?.attributes?.Date_of_the_event}</span>
            <div className="eventCard-image-containeer">
              <img
                src={` https://strapi.orientspectra.com${item?.attributes?.Poster?.data?.attributes?.formats?.thumbnail?.url}`}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default EventDargCard;
