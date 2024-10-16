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
        link: "/country/study-in-usa",
    },
    {
        id: 2,
        img: "https://strapi.orientspectra.com/uploads/uk_b3ddd955fe.webp",
        name:"Study In UK",
        link: "/country/study-in-uk",
    }, 
    {
        id: 3,
        img: "https://strapi.orientspectra.com/uploads/Germany_cac7828935.webp",
        name: "Study In Germany",
        link: "/country/study-in-germany",
    },
    {
        id: 4,
        img: "https://strapi.orientspectra.com/uploads/canada_57b8479e02.webp",
        name: "Study In Canada",
        link: "/country/study-in-canada"
    },
    // {
    //     id: 5,
    //     img: "https://strapi.orientspectra.com/uploads/singapore_9302d691ec.webp",
    //     name:"Study In Singapore",
    //     link: "/country/study-in-singapore",
    // },
    {
        id: 6,
        img: "https://strapi.orientspectra.com/uploads/australia_f0cf3b4792.webp",
        name:"Study In Australia",
        link: "/country/study-in-australia",
    },
    {
        id: 7,
        img: "https://strapi.orientspectra.com/uploads/france_21a7087df4.webp",
        name:"Study In France",
        link: "/country/study-in-france",
    },
    {
        id: 8,
        img: "https://strapi.orientspectra.com/uploads/switzerland_bf137606b5.webp",
        name:"Study In Switzerland",
        link: "/country/study-in-switzerland",
    },  
    {
        id: 9,
        img: "https://strapi.orientspectra.com/uploads/dubai_9fc9d7ca5d.webp",
        name:"Study In Dubai",
        link: "/country/study-in-dubai",
    },
    // {
    //     id: 10,
    //     img: "https://strapi.orientspectra.com/uploads/poland_b781e4dec6.webp",
    //     name:"Study In Poland",
    //     link: "/country/study-in-poland",
    // },
    // {
    //     id: 11,
    //     img: "https://strapi.orientspectra.com/uploads/malta_587ed83c6a.webp",
    //     name:"Study In Malta",
    //     link: "/country/study-in-malta",
    // },
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