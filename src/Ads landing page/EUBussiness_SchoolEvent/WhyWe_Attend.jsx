import Img2 from "../../assets/Unvercity/Euschool-Poster.webp";
import Icon from "../../assets/Unvercity/Checked-2.webp";

const WhyWe_Attend =()=>{
    return(
        <div className="Whywe-container">
            <div className="Event_Details-section">
                        <div className="Event_Details-right">
                                <img src={Img2} alt="preparation" />
                        </div>
                        <div className="Whywe-left">
                            <h1>Why Should You Attend ?</h1>
                            <p>Attending this event presents a unique opportunity for students aspiring 
                               to study abroad.</p>
                            <ul className="Whywe-list">
                                <li>
                                    <img src={Icon} alt="" />
                                    Get Admission in 5 days
                                </li>
                                <li>
                                    <img src={Icon} alt="" />
                                    TOEFL acceptable
                                </li>
                                <li>
                                    <img src={Icon} alt="" />
                                    Guaranteed placements after Masters
                                </li>
                                <li>
                                    <img src={Icon} alt="" />
                                    Gaps Acceptable
                                </li>
                            </ul>
                            <p>Don’t miss out on this golden opportunity to shape your academic journey with 
                                expert guidance and exclusive perks.</p>

                        </div>   
                </div>
        </div>
    )
}
export default WhyWe_Attend;