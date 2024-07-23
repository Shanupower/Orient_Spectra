import { Swiper, SwiperSlide } from "swiper/react";
import AUS from "../../assets/About2/Australia.jpg";
import Dubai from "../../assets/About2/Dubai.jpg";
import France from "../../assets/About2/France.jpg";
import Germany from "../../assets/About2/Germany.jpg";
import Ireland from "../../assets/About2/Ireland.jpg";
import Singapore from "../../assets/About2/Singapore.jpg";
import USA from "../../assets/About2/USA.jpg";
import Uk from "../../assets/About2/UK.jpg";
import "./about.css";
import "swiper/swiper-bundle.css";
import { useMediaQuery } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/pagination";
const CountriesData = [
  {
    img: AUS,
    name: "Australia",
  },
  {
    img: Dubai,
    name: "Dubai",
  },
  {
    img: France,
    name: "France",
  },
  {
    img: Germany,
    name: "Germany",
  },
  {
    img: Ireland,
    name: "Ireland",
  },
  {
    img: USA,
    name: "United State Of America",
  },
  {
    img: Uk,
    name: "United Kingdom",
  },
  {
    img: Singapore,
    name: "Singapore",
  },
];
const AboutCountry = () => {
  const isMd = useMediaQuery("(max-width:986px)");

  return (
    <div className="AboutCountry-container section">
      <h1>Countries We Are in</h1>
      <div className="">
        <Swiper
          spaceBetween={50}
          slidesPerView={isMd ? 1 : 3}
          className="AboutCountry-section"
          modules={[Navigation, Pagination, Scrollbar]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {CountriesData?.map((item, index) => (
            <SwiperSlide className="AboutCountry-card" key={index}>
              <div className="counrtyImage-card">
                <img src={item?.img} alt="" />
              </div>
              <div className="counttry-name-card">
                <p>{item?.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutCountry;
