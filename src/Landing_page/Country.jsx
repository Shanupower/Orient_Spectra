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
        name: "Canada",
        link: "/country/Canada"
    },
    {
        id: 2,
        img: "https://strapi.orientspectra.com/uploads/USA_3242ce66ba.jpg",
        name:"USA",
        link: "/country/Usa",
    },
    {
        id: 3,
        img: "https://strapi.orientspectra.com/uploads/Germany_6c951c7a97.jpg",
        name: "Germany",
        link: "/country/Germany",
    },
    {
        id: 4,
        img: "https://strapi.orientspectra.com/uploads/UK_7f308498f1.jpg",
        name:"UK",
        link: "/country/UK",
    },
    {
        id: 5,
        img: "https://strapi.orientspectra.com/uploads/Singapore_dda3600af6.jpg",
        name:"Singapore",
        link: "/country/Singapore",
    },
    {
        id: 6,
        img: "https://strapi.orientspectra.com/uploads/Australia_19dfdcdabd.jpg",
        name:"Australia",
        link: "/country/Australia",
    },
    {
        id: 7,
        img: "https://strapi.orientspectra.com/uploads/France_c4dd7afc72.jpg",
        name:"France",
        link: "/country/France",
    },
    {
        id: 8,
        img: "https://strapi.orientspectra.com/uploads/Swizterland_a26126d9ad.jpg",
        name:"Switzerland",
        link: "/country/Switzerland",
    },
    {
        id: 9,
        img: "https://strapi.orientspectra.com/uploads/Malta_4ed05e85ec.jpg",
        name:"Malta",
        link: "/country/Malta",
    },
    {
        id: 10,
        img: "https://strapi.orientspectra.com/uploads/Dubai_03df400689.jpg",
        name:"Dubai",
        link: "/country/Dubai",
    },
    {
        id: 11,
        img: "https://strapi.orientspectra.com/uploads/Poland_ff7ddfde1f.jpg",
        name:"Poland",
        link: "/country/Poland",
    },
]

const Country = () =>{
  const isMd = useMediaQuery("(max-width:1024px)");

    return(
        <div className="country-section">
            <strong>Countries </strong>
            <p> We Are in</p>
            <Swiper 
            spaceBetween={30}
               slidesPerView={isMd ? 1 : 3}
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
                    <div className="image-text-overlay">
                  {item.name}
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