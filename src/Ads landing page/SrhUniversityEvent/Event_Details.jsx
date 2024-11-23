import Img2 from "../../assets/Unvercity/Event-Poster.webp";
import { useMediaQuery } from "@mui/material";

const Event_Details =()=>{
    const isMd = useMediaQuery("(max-width:986px)");
    return(
        <div className="Event_Details-container">
            <div className="Event_Details-section">
            {isMd ? (
                    <>
                    <div className="Event_Details-right">
                        <h1>Mark Your Calendar</h1>
                        <img src={Img2} alt="preparation" />
                    </div>
                    <div className="Event_Details-left">
                        <p>Orient Spectra provides end-to-end guidance with your study abroad goal 
                            across university connects, visa application, and loan assistance. Our 
                            student-focussed offerings and expert counselling has made us the top 
                            overseas education consultants in Hyderabad.
                        </p>
                            <p><b>Date :</b> <span>14th December 2024</span></p>
                            <p><b>Time :</b>  <span>11 AM – 3 PM</span></p>
                            <p><b>Venue :</b> <span>Himayatnagar, Hyderabad</span></p>
                    </div>
                
                </>
                ):(
                    <>
                        <div className="Event_Details-left">
                            <h1>Mark Your Calendar</h1>
                            <p>Orient Spectra provides end-to-end guidance with your study abroad goal 
                                across university connects, visa application, and loan assistance. Our 
                                student-focussed offerings and expert counselling has made us the top 
                                overseas education consultants in Hyderabad.
                            </p>
                                <p><b>Date :</b> <span>14th December 2024</span></p>
                                <p><b>Time :</b>  <span>11 AM – 3 PM</span></p>
                                <p><b>Venue :</b> <span>Himayatnagar, Hyderabad</span></p>
                        </div>
                        <div className="Event_Details-right">
                            <img src={Img2} alt="preparation" />
                        </div>
                    </>
                )}
                
            </div>
        </div>
    )
}
export default Event_Details;