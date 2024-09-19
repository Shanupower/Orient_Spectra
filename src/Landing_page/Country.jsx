import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";



const CountryImages =[
    {
        id: 1,
        img: "https://strapi.orientspectra.com/uploads/usa_ba89cca6d8.webp",
        name:"Study In USA",
        link: "/country/Usa",
    },
    {
        id: 2,
        img: "https://strapi.orientspectra.com/uploads/uk_b3ddd955fe.webp",
        name:"Study In UK",
        link: "/country/UK",
    }, 
    {
        id: 3,
        img: "https://strapi.orientspectra.com/uploads/Germany_cac7828935.webp",
        name: "Study In Germany",
        link: "/country/Germany",
    },
    {
        id: 4,
        img: "https://strapi.orientspectra.com/uploads/canada_57b8479e02.webp",
        name: "Study In Canada",
        link: "/country/Canada"
    },
    {
        id: 5,
        img: "https://strapi.orientspectra.com/uploads/singapore_9302d691ec.webp",
        name:"Study In Singapore",
        link: "/country/Singapore",
    },
    {
        id: 6,
        img: "https://strapi.orientspectra.com/uploads/australia_f0cf3b4792.webp",
        name:"Study In Australia",
        link: "/country/Australia",
    },
    {
        id: 7,
        img: "https://strapi.orientspectra.com/uploads/france_21a7087df4.webp",
        name:"Study In France",
        link: "/country/France",
    },
    {
        id: 8,
        img: "https://strapi.orientspectra.com/uploads/switzerland_bf137606b5.webp",
        name:"Study In Switzerland",
        link: "/country/Switzerland",
    },  
    {
        id: 9,
        img: "https://strapi.orientspectra.com/uploads/dubai_9fc9d7ca5d.webp",
        name:"Study In Dubai",
        link: "/country/Dubai",
    },
    {
        id: 10,
        img: "https://strapi.orientspectra.com/uploads/poland_b781e4dec6.webp",
        name:"Study In Poland",
        link: "/country/Poland",
    },
    {
        id: 11,
        img: "https://strapi.orientspectra.com/uploads/malta_587ed83c6a.webp",
        name:"Study In Malta",
        link: "/country/Malta",
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
               navigation>
            <div>
                {CountryImages.map((item)=>(
                    <SwiperSlide className="country-Card" key={item.id}>
                    <div  className="counrtyImage-card" >
                    <Link to={item.link}>
                    <img src={item.img} alt="Country"  />
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