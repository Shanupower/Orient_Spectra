import Img2 from "../../assets/Training_Program/tofel.webp";
import Icon from "../../assets/Unvercity/Checked.webp";

const WhyShould_Attend =()=>{
    return(
        <div className="Whyshould-container">
            <div className="Event_Details-section">
                        <div className="Event_Details-right">
                                <img src={Img2} alt="preparation" />
                        </div>
                        <div className="WhyShould-left">
                            <h1>Why Should You Attend ?</h1>
                            <p>Attending this event presents a unique opportunity for students aspiring 
                               to study abroad.</p>
                            <ul className="WhyShould-list">
                                <li>
                                    <img src={Icon} alt="" />
                                    Offer Letter in 48 Hours
                                </li>
                                <li>
                                    <img src={Icon} alt="" />
                                    100% English Tought - Course
                                </li>
                                <li>
                                    <img src={Icon} alt="" />
                                    Scholarships Upto 50% on first year fees
                                </li>
                            </ul>
                            <p>Don’t miss out on this golden opportunity to shape your academic journey with 
                                expert guidance and exclusive perks.</p>

                        </div>   
                </div>
        </div>
    )
}
export default WhyShould_Attend;