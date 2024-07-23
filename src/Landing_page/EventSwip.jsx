import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const EventDargCard = ({ Eventdata }) => {
  console.log("EventDAta", Eventdata);
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {Eventdata?.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide-conatiner">
            <h2 className="EventHeadine">{item?.attributes?.Headline}</h2>
            <span>{item?.attributes?.Date_of_the_event}</span>
            <div className="eventCard-image-containeer">
              <img
                src={` http://157.173.222.81:1337${item?.attributes?.Poster?.data?.attributes?.formats?.thumbnail?.url}`}
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
