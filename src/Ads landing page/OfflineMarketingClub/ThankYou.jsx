import { Link } from "react-router-dom";
import "./ADS.css"

const ThankYou = ()=>{
    return(
        <div className="Thank_you_container">
            <img src="https://strapi.orientspectra.com/uploads/success_email_removebg_preview_80e6571194.png" alt="" />
            <h1>Thank you !</h1>
            <p>for contacting Orient Spectra. Our representative will contact you shortly</p>
            <Link to="/" className="Thank_you_link">
            <h3>Back to Home</h3>
            </Link>
        </div>
    )
}

export default ThankYou;