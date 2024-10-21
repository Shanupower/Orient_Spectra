import { useEffect, useState } from "react";
import"./index.css";

const WhatsApp =() =>{
    const phoneNumber = "+919000456765";
    return(
        <div className="ActionIcons">
        <div className="Phone">
        <a href="tel:919000456765">
                <img src="https://strapi.orientspectra.com/uploads/phone_call_1_d5d085a484.webp" alt="Phone" loading="lazy" />
            </a>
        </div>
        <div className="WhatsApp section">
            <a href="https://wa.me/+919000456765?text" target="_blank">
            <img src="https://strapi.orientspectra.com/uploads/whatsapp_9450bbb097.webp" alt="WhatsApp" loading="lazy"/>
            </a>

           
        </div>
        </div>
    )
}

export default WhatsApp;