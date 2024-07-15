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
          <div className="text-card text-card2">
            {messages.messages2} Universities
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counselors;
