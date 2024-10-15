import "./ADS.css";

const EventDetails =()=>{
    return(
        <div className="Event_container">
            <div className="Event_content">
                <div className="Event_details">
                <h1>UK Education Fair <span> - 2024</span></h1>
                <p>Orient Spectra provides end-to-end guidance with your study abroad goal across university connects, visa application, 
                and loan assistance. Our student-focussed offerings and expert counselling has made us the top overseas education consultants 
                in Hyderabad.</p>
                <p><b>Date :</b> <span>9th November 2024</span></p>
                <p><b>Time :</b>  <span>10 AM – 4 PM</span></p>
                <p><b>Venue :</b> <span>Hyatt Place, Banjara Hills, Hyderabad</span></p>
                </div>
                <div className="Image_container">
                <img src="https://strapi.orientspectra.com/uploads/388_X_516_uk_eu_58507af29d.webp" alt=""/>
                </div>
            </div>
            
        </div>
    )
}

export default EventDetails;