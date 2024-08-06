import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./index.css";
import GlobeComponent from "../Component/Globe/GlobeComponent";
import { useEffect, useState } from "react";

const GlobeData = [
  {
    country: "United states of America",
    info: "Studying in the USA offers an enriching academic experience that attracts students from all corners of the globe",
  },
  {
    country: "Canada",
    info: "Canada is known for its high-quality education and research opportunities at all levels, from elementary to post-secondary",
  },
  {
    country: "Germany",
    info: "high-quality education, free public universities, and low tuition fees",
  },
  {
    country: "Australia",
    info: "Australia is a popular destination for international students seeking a high-quality education and a diverse cultural experience",
  },
];

const Counselors = () => {
  const [countryIndex, setCountryIndex] = useState(0);
  const [initialSpeed, setInitialSpeed] = useState(20);

  const [rotateGlobe, setRotateGlobe] = useState(false);

  const handleRotateGlobe = (direction) => {
    if (direction > 0 && GlobeData.length > countryIndex) {
      setCountryIndex(countryIndex + 1);
    } else if (direction < 0 && countryIndex > 0) {
      setCountryIndex(countryIndex - 1);
    }
    setInitialSpeed(direction);
    setRotateGlobe(true);
    setTimeout(() => {
      setRotateGlobe(false);
      setInitialSpeed(10);
    }, 3600);
  };

  return (
    <div className="section Counselore_container">
      <div className="counselor_left_side">
        <p>Countries We Are in</p>
        <span>10+ Countries</span>
        <div className="progress-bar">
          <div className="progress">
            <p
              className={`progressLine  ${
                rotateGlobe && "progressLineAnimation"
              }`}
            >
              |
            </p>
          </div>
        </div>
        <div className="leftandrightArrow">
          <button
            className="GlowbLeftIccon"
            onClick={() => handleRotateGlobe(-20)}
            disabled={countryIndex === 0}
          >
            <ArrowForwardIcon />
          </button>

          <button
            className="GlobRightArrow"
            onClick={() => handleRotateGlobe(20)}
            disabled={countryIndex === GlobeData.length - 1}
          >
            <ArrowForwardIcon />
          </button>

          <p>{GlobeData[countryIndex].country}</p>
        </div>
      </div>
      <div className="globmapw">
        <GlobeComponent
          initialSpeed={initialSpeed}
          country={GlobeData[countryIndex].country}
          countryInfo={GlobeData[countryIndex].country}
          rotateGlobe={rotateGlobe}
        />
      </div>
    </div>
  );
};

export default Counselors;
