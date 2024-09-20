import"./index.css";

const WhatsApp =() =>{

    const phoneNumber = "+919052891111";
  
    const handleClick = () => {
      const url = `https://wa.me/${phoneNumber}`;
      window.open(url, "_blank");
    };

    return(
        <div className="WhatsApp section" onClick={handleClick}>
            <img src="https://strapi.orientspectra.com/uploads/whatsapp_9450bbb097.webp" alt="WhatsApp" loading="lazy"/>
        </div>
    )
}

export default WhatsApp;