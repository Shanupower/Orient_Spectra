import Button from "../Component/Common/Button";
import Divider from "../Component/Common/Divider";
import Marquee from "react-fast-marquee";
import "./index.css";
import { ImgGallery } from "../Container/data/Universities";

const Acedemic = () => {
  return (
    <div className="Acedemic_cantainer section">
      {/* <div className="discoverButton">
        <p>Transform Your Skills for Admission to Leading Global Universities</p>

        <Button text="Discover more" arrow={true} />
      </div> */}

      <Marquee className="MargueeImage" speed={100} pauseOnHover>
        {ImgGallery.map((data, index) => (
          <div className="acedemic_image_container" key={index}>
            <img src={data.img} alt="" style={{ objectFit: "contain" }} />
          </div>
        ))}
      </Marquee>

      <div className="Acedemic_cantainer__header">
        <p>Transform Your Skills for Admission to Leading Global Universities</p>
        <div className="discovermoreButton">
          <Button text="Meet Counselors" arrow={true} />
        </div>
      </div>

    </div>
  );
};

export default Acedemic;
