import Img2 from "../../assets/Unvercity/UK-Poster.webp";
import Icon from "../../assets/Unvercity/Checked-1.webp";

const Why_Attend =()=>{
    return(
        <div className="WhyAttend-container">
            <div className="Event_Details-section">
                        <div className="Event_Details-right">
                                <img src={Img2} alt="preparation" />
                        </div>
                        <div className="WhyAttend-left">
                            <h1>Why Choose UK Universities ?</h1>
                            <p>This is your golden opportunity to explore top-tier UK universities that offer world-class 
                                education and exclusive benefits.With a fast-tracked admission process, expert guidance, and exciting perks, 
                                you can secure your future today.
                            </p>
                            <ul className="WhyAttend-list">
                                <li>
                                    <img src={Icon} alt="" />
                                    No IELTS/TOEFL Required
                                </li>
                                <li>
                                    <img src={Icon} alt="" />
                                    Get Early Bird Scholarships & Offers
                                </li>
                                <li>
                                    <img src={Icon} alt="" />
                                    Backlogs Accepted
                                </li>
                                <li>
                                    <img src={Icon} alt="" />
                                    Dependents Allowed
                                </li>
                            </ul>
                            <p>Don’t miss this incredible opportunity to take the next step in your academic journey!</p>

                        </div>   
                </div>
        </div>
    )
}
export default Why_Attend;