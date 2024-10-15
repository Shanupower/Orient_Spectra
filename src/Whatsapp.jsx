import { useEffect, useState } from "react";
import"./index.css";

const WhatsApp =() =>{
    const phoneNumber = "+919000456765";
    return(
        
        <div className="WhatsApp section">
            <a href="https://wa.me/+919000456765?text" target="_blank">
            <img src="https://strapi.orientspectra.com/uploads/whatsapp_9450bbb097.webp" alt="WhatsApp" loading="lazy"/>
            </a>
        </div>

    )
}

export default WhatsApp;