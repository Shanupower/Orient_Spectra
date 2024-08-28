import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";



const CountryImages =[
    {
        id: 1,
        img: "https://strapi.orientspectra.com/uploads/usa_77c7453180.jpg",
        name:"Study In USA",
        link: "/country/Usa",
    },
    {
        id: 2,
        img: "https://strapi.orientspectra.com/uploads/uk_c662bda403.jpg",
        name:"Study In UK",
        link: "/country/UK",
    }, 
    {
        id: 3,
        img: "https://strapi.orientspectra.com/uploads/Germany_43e3a4167c.jpg",
        name: "Study In Germany",
        link: "/country/Germany",
    },
    {
        id: 4,
        img: "https://strapi.orientspectra.com/uploads/canada_400_14f22221e0.jpg",
        name: "Study In Canada",
        link: "/country/Canada"
    },
    {
        id: 5,
        img: "https://strapi.orientspectra.com/uploads/singapore_46e5082b2e.jpg",
        name:"Study In Singapore",
        link: "/country/Singapore",
    },
    {
        id: 6,
        img: "https://strapi.orientspectra.com/uploads/australia_93c150352c.jpg",
        name:"Study In Australia",
        link: "/country/Australia",
    },
    {
        id: 7,
        img: "https://strapi.orientspectra.com/uploads/france_ac43543a72.jpg",
        name:"Study In France",
        link: "/country/France",
    },
    {
        id: 8,
        img: "https://strapi.orientspectra.com/uploads/switzerland_a4b6b430a3.jpg",
        name:"Study In Switzerland",
        link: "/country/Switzerland",
    },  
    {
        id: 9,
        img: "https://strapi.orientspectra.com/uploads/dubai_e759968474.jpg",
        name:"Study In Dubai",
        link: "/country/Dubai",
    },
    {
        id: 10,
        img: "https://strapi.orientspectra.com/uploads/poland_34b13cd814.jpg",
        name:"Study In Poland",
        link: "/country/Poland",
    },
    {
        id: 11,
        img: "https://strapi.orientspectra.com/uploads/malta_fb20ccd378.jpg",
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
                    <img src={item.img} alt=""  />
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