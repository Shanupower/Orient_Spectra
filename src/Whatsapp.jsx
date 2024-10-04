import { useEffect, useState } from "react";
import"./index.css";

const WhatsApp =() =>{
    const phoneNumber = "+919052891111";


    // const handleClick = () => {
    //   const url = `https://wa.me/${phoneNumber}`;
    //   window.open(url, "_blank");
    // };

    return(
        <a href="https://wa.me/+919052891111?text" target="_blank">
        <div className="WhatsApp section">
            <img src="https://strapi.orientspectra.com/uploads/whatsapp_9450bbb097.webp" alt="WhatsApp" loading="lazy"/>
        </div>
        </a>

    )
}

export default WhatsApp;