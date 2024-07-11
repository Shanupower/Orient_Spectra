import React, { useRef, useState, useEffect } from "react";
import Globe from "react-globe.gl";
import GlobeImge1 from "../assets/images/earth-night.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./index.css";
const Counselors = () => {
  const globeEl = useRef();
  const [selectedMarker, setSelectedMarker] = useState(0);
  const [messages, setMessages] = useState({ messages1: "", messages2: "" });
  const [arcsData, setArcsData] = useState([]);
  const [rotateGlobe, setRotateGlobe] = useState(false);

  const countryData = [
    {
      country: "United States America",
      lat: 37.0902,
      lon: -95.7129,
      messages1: " United States of America",
      messages2: "150+",
    },
    {
      country: "Canada",
      lat: 56.1304,
      lon: -106.3468,
      messages1: "Canada  ",
      messages2: "30+",
    },
    {
      country: "United Kingdom",
      lat: 55.3781,
      lon: -3.436,
      messages1: "United  Kingdom",
      messages2: "50+",
    },
    {
      country: "Australia",
      lat: -25.2744,
      lon: 133.7751,
      messages1: "Australia  ",
      messages2: "20+",
    },
    {
      country: "France",
      lat: 46.6034,
      lon: 1.8883,
      messages1: "France  ",
      messages2: "20+",
    },
    {
      country: "Germany",
      lat: 51.1657,
      lon: 10.4515,
      messages1: "Germany ",
      messages2: "100+",
    },
    {
      country: "Switzerland",
      lat: 46.8182,
      lon: 8.2275,
      messages1: "Switzerland  ",
      messages2: "15+",
    },
    {
      country: "Singapore",
      lat: 1.3521,
      lon: 103.8198,
      messages1: "Singapore  ",
      messages2: "30+",
    },
    {
      country: "Dubai",
      lat: 25.2048,
      lon: 55.2708,
      messages1: "Dubai  ",
      messages2: "10+",
    },
    {
      country: "Sweden",
      lat: 60.1282,
      lon: 18.6435,
      messages1: "Sweden  ",
      messages2: "10+",
    },
    {
      country: "Portland",
      lat: 45.5152,
      lon: -122.6784,
      messages1: "Portland  ",
      messages2: "10+",
    },
    {
      country: "Malta",
      lat: 35.9375,
      lon: 14.3754,
      messages1: "Malta  ",
      messages2: "25+",
    },
  ];

  useEffect(() => {
    const controls = globeEl.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    controls.enableZoom = false; // Disable zooming
    controls.enablePan = false; // Disable panning
    controls.enableDamping = true; // Enable inertia damping for smoother interaction
    controls.dampingFactor = 0.1;
    handleButtonClick(0); // Initial display
  }, []);

  const handleButtonClick = (index) => {
    const marker = countryData[index];
    setSelectedMarker(index);
    setMessages({ messages1: marker.messages1, messages2: marker.messages2 });
    globeEl.current.pointOfView({ lat: marker.lat, lng: marker.lon }, 4000); // Remove altitude to prevent zoom

    const newArcsData = countryData
      .filter((_, i) => i !== index)
      .map((end) => ({
        startLat: marker.lat,
        startLng: marker.lon,
        endLat: end.lat,
        endLng: end.lon,
        color: ["orange", "orange"], // Set arc color to orange
      }));
    setArcsData(newArcsData);
  };

  const handleNext = () => {
    const nextIndex = (selectedMarker + 1) % countryData.length;
    handleButtonClick(nextIndex);
    setRotateGlobe(true);
    setTimeout(() => {
      setRotateGlobe(false);
    }, 10000);
  };

  const handlePrev = () => {
    const prevIndex =
      (selectedMarker - 1 + countryData.length) % countryData.length;
    handleButtonClick(prevIndex);
    setRotateGlobe(true);
    setTimeout(() => {
      setRotateGlobe(false);
    }, 10000);
  };

  return (
    <div className="Counselors_container section">
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
          <button className="GlowbLeftIccon" onClick={handlePrev}>
            <ArrowForwardIcon />
          </button>

          <button className="GlobRightArrow" onClick={handleNext}>
            <ArrowForwardIcon />
          </button>

          <p>{countryData[selectedMarker].country}</p>
        </div>
      </div>
      <div className="globe-container">
        <Globe
          ref={globeEl}
          width={840} // Increased width by 40%
          height={700} // Increased height by 40%
          globeImageUrl={GlobeImge1}
          labelsData={countryData}
          labelLat={(d) => d.lat}
          labelLng={(d) => d.lon}
          labelText={(d) => d.country}
          labelSize={1.2}
          labelColor={() => "rgba(255, 165, 0, 0.75)"}
          labelDotRadius={0.5}
          labelResolution={2}
          arcsData={arcsData}
          arcLabel={() => ""} // Disable labels on hover
          arcStartLat={(d) => d.startLat}
          arcStartLng={(d) => d.startLng}
          arcEndLat={(d) => d.endLat}
          arcEndLng={(d) => d.endLng}
          arcColor={(d) => d.color}
          arcAltitude={0.2}
          arcStroke={0.5}
          arcDashLength={0.3}
          arcDashGap={0.01}
          arcDashAnimateTime={30000}
          arcsTransitionDuration={1000}
          backgroundColor="#fff"
          atmosphereColor="transparent"
        />
        <div className="text-cards">
          <div className="text-card text-card1">{messages.messages1}</div>
          <div className="text-card text-card2">{messages.messages2} Universities</div>
        </div>
      </div>
      <style jsx>{`
        .Counselors_container {
          display: flex;
          align-items: center;
          justify-content: space-between; /* Adjusted to make globe stick to the right */
          width: 100%;
          height: 100vh;
          box-sizing: border-box;
          background-color: white; /* Ensure container background is white */
        }
        .info {
          max-width: 400px;
        }
        .info h1 {
          color: black;
          font-size: 2.5em;
          margin: 0;
        }
        .info p {
          font-size: 1.2em;
          color: gray;
        }
        .navigation {
          display: flex;
          align-items: center;
          margin-top: 20px;
        }
        .nav-button {
          background: #fff;
          border: 2px solid #ccc;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 1.2em;
          color: gray;
          margin-right: 10px;
          cursor: pointer;
        }
        .nav-button:hover {
          background: #eee;
        }
        .globe-container {
          position: relative;
          width: 840px; /* Increased width by 40% */
          height: 700px; /* Increased height by 40% */
        }
        .text-cards {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 840px; /* Increased width by 40% */
          height: 700px; /* Increased height by 40% */
          transform: translate(-50%, -50%);
          pointer-events: none;
          perspective: 1000px;
        }
        .text-card {
          position: absolute;
          width: 140px; /* Increased width by 40% */
          padding: 7px; /* Increased padding by 40% */
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          border-radius: 5px;
          text-align: center;
          pointer-events: auto;
          backface-visibility: hidden;
          font-size: 14px; /* Increased font size by 40% */
        }
        .text-card1 {
          top: 30%;
          left: 40%;
          transform: translateX(-50%);
          animation: rotate-card1 10s linear infinite;
        }
        .text-card2 {
          top: 60%;
          left: 40%;
          transform: translateX(-50%);
          animation: rotate-card2 10s linear infinite;
        }
        @keyframes rotate-card1 {
          0% {
            transform: rotateY(0deg) translateZ(280px);
          } /* Increased translateZ by 40% */
          50% {
            transform: rotateY(180deg) translateZ(280px);
            opacity: 0;
          } /* Increased translateZ by 40% */
          100% {
            transform: rotateY(360deg) translateZ(280px);
            opacity: 1;
          } /* Increased translateZ by 40% */
        }
        @keyframes rotate-card2 {
          0% {
            transform: rotateY(0deg) translateZ(280px);
          } /* Increased translateZ by 40% */
          50% {
            transform: rotateY(180deg) translateZ(280px);
            opacity: 0;
          } /* Increased translateZ by 40% */
          100% {
            transform: rotateY(360deg) translateZ(280px);
            opacity: 1;
          } /* Increased translateZ by 40% */
        }
      `}</style>
    </div>
  );
};

export default Counselors;
