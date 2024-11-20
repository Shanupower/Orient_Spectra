import "./index.css";
import Img1 from "../../assets/Training_Program/Preparation.webp";
import Img2 from "../../assets/Training_Program/tofel.webp";
import { useMediaQuery } from "@mui/material";

const Overview =() =>{
    const isMd = useMediaQuery("(max-width:986px)");
    return(
        <div className="Overview-container">
            <div className="Overview-section">
                {isMd ? (
                    <>
                    <div className="Overview-right">
                        <h1>Program Overview</h1>
                        <img src={Img2} alt="preparation" />
                    </div>
                    <div className="Overview-left">
                        <p>This program offers <span>IELTS/TOEFL</span> training at no additional cost to students, with a 
                            refundable deposit required to secure their commitment. Once enrolled, students 
                            will gain access to high-quality training resources and support to maximize their 
                            exam success rates, an essential component of strengthening their overseas education 
                            applications and to increase our admission pool from future prospects data. 
                        </p>
                    </div>
                
                </>
                ):(
                    <>
                    <div className="Overview-left">
                    <h1>Program Overview</h1>
                    <p>This program offers <span>IELTS/TOEFL</span> training at no additional cost to students, with a 
                        refundable deposit required to secure their commitment. Once enrolled, students 
                        will gain access to high-quality training resources and support to maximize their 
                        exam success rates, an essential component of strengthening their overseas education 
                        applications and to increase our admission pool from future prospects data. 
                    </p>
                </div>
                <div className="Overview-right">
                    <img src={Img2} alt="preparation" />
                </div>
                </>
                )}
                
            </div>
        </div>
    )
}
export default Overview;