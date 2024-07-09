import React from "react";
import Globe from "react-globe.gl";
import GlobeImge from "../../assets/images/earth-night copy.jpg";
import GlobeImge1 from "../../assets/images/earth-night.jpg";
import GlobeImge2 from "../../assets/images/night-sky.png";
import "./index.css";
const GlobeComponent = ({
  initialSpeed,
  country,
  countryInfo,
  rotateGlobe,
}) => {
  const globeEl = React.useRef();
  React.useEffect(() => {
    if (rotateGlobe) {
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = initialSpeed;
      controls.enableZoom = true;

      setTimeout(() => {
        controls.autoRotate = false;
      }, 3600); // assuming 10 deg/sec, it takes 3600ms to rotate 360 degrees at 0.1 deg/ms
    }
  }, [initialSpeed, rotateGlobe]);

  return (
    <div className="hero--globe">
      <Globe
        ref={globeEl}
        width={600}
        height={500}
        backgroundColor="#fff"
        atmosphereColor="transparent"
        globeImageUrl={GlobeImge1}
        rotateSpeed={0.5}
      />

      <div
        className={` contrynameCord ${
          rotateGlobe && "contrynameCordAnimation"
        }`}
      >
        <p>{country}</p>
      </div>
      <div className="contryDiscriptionCord">
        <p>{countryInfo}</p>
      </div>
    </div>
  );
};

export default GlobeComponent;
