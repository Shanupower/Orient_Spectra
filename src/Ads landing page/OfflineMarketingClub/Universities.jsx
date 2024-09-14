
import Button from "../../Component/Common/Button";
import { ImgGallery } from "../../Container/data/Universities";
import "./ADS.css";
import Marquee from "react-fast-marquee";


const Universities =()=>{
    return(
        <div className="Acedemic_cantainer section">
        <Marquee className="MargueeImage" speed={100} pauseOnHover>
        {ImgGallery.map((data, index) => (
          <div className="USA_image_container" key={index}>
            <img src={data.img} alt="" style={{ objectFit: "contain" }} />
          </div>
        ))}
      </Marquee> 
      </div>
    )
}

export default Universities;