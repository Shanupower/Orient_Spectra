import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import USA from "../assets/Home_page/usa.webp";
import UK from "../assets/Home_page/uk.webp";
import GERMANY from "../assets/Home_page/Germany.webp";
import FRANCE from "../assets/Home_page/france.webp";
import AUSTRALIA from "../assets/Home_page/australia.webp";
import CANADA from "../assets/Home_page/canada.webp";
import DUBAI from "../assets/Home_page/dubai.webp";
import SWITZERLAND from "../assets/Home_page/switzerland.webp";

const CountryImages =[
    {
        id: 1,
        // img: "https://strapi.orientspectra.com/uploads/usa_ba89cca6d8.webp",
        img: USA,
        name:"Study In USA",
        link: "/country/study-in-usa",
    },
    {
        id: 2,
        img: UK,
        // img: "https://strapi.orientspectra.com/uploads/uk_b3ddd955fe.webp",r
        name:"Study In UK",
        link: "/country/study-in-uk",
    }, 
    {
        id: 3,
        // img: "https://strapi.orientspectra.com/uploads/Germany_cac7828935.webp",
        img: GERMANY,
        name: "Study In Germany",
        link: "/country/study-in-germany",
    },
    {
        id: 4,
        // img: "https://strapi.orientspectra.com/uploads/canada_57b8479e02.webp",
        img: CANADA,
        name: "Study In Canada",
        link: "/country/study-in-canada"
    },
    {
        id: 5,
        // img: "https://strapi.orientspectra.com/uploads/australia_f0cf3b4792.webp",
        img: AUSTRALIA,
        name:"Study In Australia",
        link: "/country/study-in-australia",
    },
    {
        id: 6,
        // img: "https://strapi.orientspectra.com/uploads/france_21a7087df4.webp",
        img: FRANCE,
        name:"Study In France",
        link: "/country/study-in-france",
    },
    {
        id: 7,
        // img: "https://strapi.orientspectra.com/uploads/switzerland_bf137606b5.webp",
        img: SWITZERLAND,
        name:"Study In Switzerland",
        link: "/country/study-in-switzerland",
    },  
    {
        id: 8,
        // img: "https://strapi.orientspectra.com/uploads/dubai_9fc9d7ca5d.webp",
        img: DUBAI,
        name:"Study In Dubai",
        link: "/country/study-in-dubai",
    },
]

const Country = () =>{
  const isMd = useMediaQuery("(max-width:1024px)");
  const isSm = useMediaQuery("(max-width:986px)");
    return(
        <div className="country-section">
            <p>Pick Your Dream <span>Study Destination</span></p>
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
                {CountryImages.map((item)=>(
                    <SwiperSlide className="country-Card" key={item.id}>
                    <div  className="counrtyImage-card" >
                    <Link to={item.link}>
                    <img src={item.img} alt="Country" loading="lazy" />
                    <div className="image-text-card">
                        <div className="image-text-overlay">
                            {item.name}
                  </div>
                </div>
                </Link>
                </div>
                </SwiperSlide>
                ))}
                </div>
                </Swiper>
        </div>

    )
}


export default Country;