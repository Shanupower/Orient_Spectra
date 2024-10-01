import { useEffect, useState } from "react";
import"./index.css";

const WhatsApp =() =>{
    const [clickCounts, setClickCounts] = useState(0);
    const phoneNumber = "+919052891111";
  
    // useEffect(() => {
    //     const storedCounts = localStorage.getItem('whatsappClickCounts'); // Get counts from localStorage
    //     if (storedCounts) {
    //         setClickCounts(JSON.parse(storedCounts)); // Parse and set state
    //     }
    // }, []);


    const handleClick = () => {
      const url = `https://wa.me/${phoneNumber}`;
      window.open(url, "_blank");
    //   const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    //   const newCounts = { ...clickCounts }; // Copy current counts

    //   // Increment today's count or initialize it
    //   newCounts[today] = (newCounts[today] || 0) + 1; 
      
    //   setClickCounts(newCounts); // Update state
    //   localStorage.setItem('whatsappClickCounts', JSON.stringify(newCounts));
    };

    return(
        <div className="WhatsApp section" onClick={handleClick}>
            <img src="https://strapi.orientspectra.com/uploads/whatsapp_9450bbb097.webp" alt="WhatsApp" loading="lazy"/>
        </div>
    )
}

export default WhatsApp;