import Button from "../Component/Common/Button";
import Divider from "../Component/Common/Divider";
import Marquee from "react-fast-marquee";
import "./index.css";
import { ImgGallery } from "../Container/data/Universities";

const Acedemic = () => {
  return (
    <div className="Acedemic_cantainer section">
      <Marquee className="MargueeImage" speed={100} pauseOnHover>
        {ImgGallery.map((data, index) => (
          <div className="acedemic_image_container" key={index}>
            <img src={data.img} alt="" style={{ objectFit: "contain" }} loading="lazy" />
          </div>
        ))}
      </Marquee>

      <div className="Acedemic_cantainer__header">
        <p>
          Fastrack your Admission to Leading <br />
          Global Universities
        </p>
        <div className="discovermoreButton">
          <Button
            text="Schedule A Call"
            arrow={true}
            link="/start-your-journey"
          />
        </div>
      </div>
    </div>
  );
};

export default Acedemic;
