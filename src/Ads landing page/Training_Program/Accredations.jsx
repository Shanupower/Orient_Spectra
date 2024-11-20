import "../../Landing_page/index.css";
import Img6 from "../../assets/Home_page/Assets_4.webp";
import Img7 from "../../assets/Home_page/Assets_3.webp";
import Img8 from "../../assets/Home_page/Assets_2.webp";
import Img9 from "../../assets/Home_page/Assets_1.webp";

const Accredations =()=>{
    return(
        <div className="foreignAcedemic section">
        <p>
          Foreign Education Consultancy - <span>Accreditations</span>
        </p>
        <div className="foreignAcedemic_marquee">
          <div className="foreignAcedemic_image_container">
            <img src={Img6} alt="Asset 24" loading="lazy"/>
          </div>
          <div className="foreignAcedemic_image_container">
            <img src={Img7} alt="IELTS" loading="lazy" />
          </div>
          <div className="foreignAcedemic_image_container">
            <img src={Img8} alt="British Council" loading="lazy"
            />
          </div>
          <div className="foreignAcedemic_image_container">
            <img src={Img9} alt="PTE" loading="lazy"/>

          </div>
        </div>
      </div>
    )
}
export default Accredations;