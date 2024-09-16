import"./index.css";

const WhatsApp =() =>{

    const phoneNumber = "+916305077358";
  
    const handleClick = () => {
      const url = `https://wa.me/${phoneNumber}`;
      window.open(url, "_blank");
    };

    return(
        <div className="WhatsApp section" onClick={handleClick}>
            <img src="https://strapi.orientspectra.com/uploads/whatsapp_b7b1c39362.png" alt="WhatsApp" />
        </div>
    )
}

export default WhatsApp;