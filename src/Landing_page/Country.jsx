import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";



const CountryImages =[
    {
        id: 1,
        img: "https://strapi.orientspectra.com/uploads/Canada_6b2e90734d.jpg",
        name: "Study In Canada",
        link: "/country/Canada"
    },
    {
        id: 2,
        img: "https://strapi.orientspectra.com/uploads/USA_3242ce66ba.jpg",
        name:"Study In USA",
        link: "/country/Usa",
    },
    {
        id: 3,
        img: "https://strapi.orientspectra.com/uploads/Germany_6c951c7a97.jpg",
        name: "Study In Germany",
        link: "/country/Germany",
    },
    {
        id: 4,
        img: "https://strapi.orientspectra.com/uploads/UK_7f308498f1.jpg",
        name:"Study In UK",
        link: "/country/UK",
    },
    {
        id: 5,
        img: "https://strapi.orientspectra.com/uploads/Singapore_dda3600af6.jpg",
        name:"Study In Singapore",
        link: "/country/Singapore",
    },
    {
        id: 6,
        img: "https://strapi.orientspectra.com/uploads/Australia_19dfdcdabd.jpg",
        name:"Study In Australia",
        link: "/country/Australia",
    },
    {
        id: 7,
        img: "https://strapi.orientspectra.com/uploads/France_c4dd7afc72.jpg",
        name:"Study In France",
        link: "/country/France",
    },
    {
        id: 8,
        img: "https://strapi.orientspectra.com/uploads/Swizterland_a26126d9ad.jpg",
        name:"Study In Switzerland",
        link: "/country/Switzerland",
    },
    {
        id: 9,
        img: "https://strapi.orientspectra.com/uploads/Malta_4ed05e85ec.jpg",
        name:"Study In Malta",
        link: "/country/Malta",
    },
    {
        id: 10,
        img: "https://strapi.orientspectra.com/uploads/Dubai_03df400689.jpg",
        name:"Study In Dubai",
        link: "/country/Dubai",
    },
    {
        id: 11,
        img: "https://strapi.orientspectra.com/uploads/Poland_ff7ddfde1f.jpg",
        name:"Study In Poland",
        link: "/country/Poland",
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
               modules={[Navigation, Scrollbar]}
               autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
            //   speed={1000}
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