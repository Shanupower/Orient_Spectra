import React, { useRef, useState, useEffect } from "react";
import Globe from "react-globe.gl";
import GlobeImge1 from "../assets/images/earth-night.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import * as THREE from "three";
import "./index.css";
import { useMediaQuery } from "@mui/material";
const TextData = [
  [
    {
      text: "USA",
      lat: 30,
      lng: 20,
      alt: 0.14,
      color: "#1f7aff",
    },
    { lat: -10, lng: -200, alt: 0.16, text: "150+", color: "rgb(285 120 0)" },
  ],
  [
    {
      text: "Canada",
      lat: 30,
      lng: 20,
      alt: 0.14,
      color: "#1f7aff",
    },
    { lat: -10, lng: -200, alt: 0.16, text: "30+", color: "rgb(285 120 0)" },
  ],
  [
    {
      text: "United Kingdom",
      lat: 30,
      lng: 20,
      alt: 0.14,
      color: "#1f7aff",
    },
    { lat: -30, lng: -200, alt: 0.16, text: "50+", color: "rgb(285 120 0)" },
  ],
  [
    {
      text: "Australia",
      lat: 30,
      lng: 20,
      alt: 0.14,
      color: "#1f7aff",
    },
    { lat: -30, lng: -200, alt: 0.16, text: "20+", color: "rgb(285 120 0)" },
  ],
  [
    {
      text: "France",
      lat: 30,
      lng: 20,
      alt: 0.14,
      color: "#1f7aff",
    },
    { lat: -30, lng: -200, alt: 0.16, text: "20+", color: "rgb(285 120 0)" },
  ],
  [
    {
      text: "Germany",
      lat: 30,
      lng: 20,
      alt: 0.14,
      color: "#1f7aff",
    },
    { lat: -30, lng: -200, alt: 0.16, text: "100+", color: "rgb(285 120 0)" },
  ],
  [
    {
      text: "Switzerland",
      lat: 30,
      lng: 20,
      alt: 0.14,
      color: "#1f7aff",
    },
    { lat: -30, lng: -200, alt: 0.16, text: "15+", color: "rgb(285 120 0)" },
  ],
  [
    {
      text: "Singapore",
      lat: 30,
      lng: 20,
      alt: 0.14,
      color: "#1f7aff",
    },
    { lat: -30, lng: -200, alt: 0.16, text: "30+", color: "rgb(285 120 0)" },
  ],
  [
    {
      text: "Dubai",
      lat: 30,
      lng: 20,
      alt: 0.14,
      color: "#1f7aff",
    },
    { lat: -30, lng: -200, alt: 0.16, text: "10+", color: "rgb(285 120 0)" },
  ],
  [
    {
      text: "Sweden",
      lat: 30,
      lng: 20,
      alt: 0.14,
      color: "#1f7aff",
    },
    { lat: -30, lng: -200, alt: 0.16, text: "10+", color: "rgb(285 120 0)" },
  ],
  [
    {
      text: "Portland",
      lat: 30,
      lng: 20,
      alt: 0.14,
      color: "#1f7aff",
    },
    { lat: -30, lng: -200, alt: 0.16, text: "10+", color: "rgb(285 120 0)" },
  ],
  [
    {
      text: "Malta",
      lat: 30,
      lng: 20,
      alt: 0.14,
      color: "#1f7aff",
    },
    { lat: -30, lng: -200, alt: 0.16, text: "25+", color: "rgb(285 120 0)" },
  ],
];

const countryData = [
  {
    country: "United States America",
    lat: 37.0902,
    lon: -95.7129,
  },
  {
    country: "Canada",
    lat: 56.1304,
    lon: -106.3468,
  },
  {
    country: "United Kingdom",
    lat: 55.3781,
    lon: -3.436,
  },
  {
    country: "Australia",
    lat: -25.2744,
    lon: 133.7751,
  },
  {
    country: "France",
    lat: 46.6034,
    lon: 1.8883,
  },
  {
    country: "Germany",
    lat: 51.1657,
    lon: 10.4515,
  },
  {
    country: "Switzerland",
    lat: 46.8182,
    lon: 8.2275,
  },
  {
    country: "Singapore",
    lat: 1.3521,
    lon: 103.8198,
  },
  {
    country: "Dubai",
    lat: 25.2048,
    lon: 55.2708,
  },
  {
    country: "Sweden",
    lat: 60.1282,
    lon: 18.6435,
  },
  {
    country: "Portland",
    lat: 45.5152,
    lon: -122.6784,
  },
  {
    country: "Malta",
    lat: 35.9375,
    lon: 14.3754,
  },
];


const Counselors = () => {
  const isMd = useMediaQuery("(max-width:986px)");
  const globeEl = useRef();
  const [selectedMarker, setSelectedMarker] = useState(0);
  const [countryNum, setCountryNum] = useState(0);
  let [rotationSpeed, setRotationSpeed] = useState(2);
  const targetRotationSpeed = 30;
  const [arcsData, setArcsData] = useState([]);
  const [rotateGlobe, setRotateGlobe] = useState(false);
  const [textData, setTextData] = useState(TextData[countryNum]);

  useEffect(() => {
    const controls = globeEl.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = rotationSpeed;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    handleButtonClick(0);
  }, []);

  const handleButtonClick = (index) => {
    const marker = countryData[index];
    setSelectedMarker(index);
    globeEl.current.pointOfView({ lat: marker.lat, lng: marker.lon }, 4000);

    const newArcsData = countryData
      .filter((_, i) => i !== index)
      .map((end) => ({
        startLat: marker.lat,
        startLng: marker.lon,
        endLat: end.lat,
        endLng: end.lon,
        color: ["orange", "orange"],
      }));
    setArcsData(newArcsData);
  };

  const createTextCard = (text, color) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const padding = 20;
    const fontSize = 100;
    context.font = `${fontSize}px Arial`;
    const textMetrics = context.measureText(text);
    const textWidth = textMetrics.width;
    const textHeight = fontSize;
    const width = textWidth + padding * 2;
    const height = textHeight + padding * 2 + 20;
    canvas.width = width;
    canvas.height = height;
    context.shadowColor = "rgba(0, 0, 0, 0.3)";
    context.shadowBlur = 10;
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    const radius = 20;
    const tailWidth = 0;
    const tailHeight = 0;
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(radius, 0);
    context.lineTo(width - radius, 0);
    context.quadraticCurveTo(width, 0, width, radius);
    context.lineTo(width, height - radius - tailHeight);
    context.quadraticCurveTo(
      width,
      height - tailHeight,
      width - radius,
      height - tailHeight
    );
    context.lineTo(tailWidth + radius, height - tailHeight);
    context.quadraticCurveTo(
      tailWidth,
      height - tailHeight,
      tailWidth,
      height - tailHeight + radius
    );
    context.lineTo(tailWidth, height);
    context.lineTo(tailWidth / 2, height - tailHeight);
    context.lineTo(radius, height - tailHeight);
    context.quadraticCurveTo(
      0,
      height - tailHeight,
      0,
      height - radius - tailHeight
    );
    context.lineTo(0, radius);
    context.quadraticCurveTo(0, 0, radius, 0);
    context.closePath();
    context.fill();
    context.shadowColor = "transparent";
    context.font = `${fontSize}px Arial`;
    context.fillStyle = "white";
    context.fillText(text, padding, height / 2 + textHeight / 2 - 10);
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(width / 10, height / 10, 1);
    return sprite;
  };

  const handleNext = () => {
    const controls = globeEl.current.controls();
    controls.autoRotateSpeed = targetRotationSpeed;
    
    setCountryNum((prev) => {
      const newNum = (prev + 1) % countryData.length;
      setRotationSpeed(targetRotationSpeed);
      setTimeout(() => setRotationSpeed(8), 1500);
      setRotateGlobe(true);
      updateTextData(TextData[newNum]);
      setTimeout(() => {
        setRotateGlobe(false);
        controls.autoRotateSpeed = 8;
      }, 1000); // Match the duration of the revolution animation
      return newNum;
    });
  };

  const handlePrev = () => {
    const controls = globeEl.current.controls();
    controls.autoRotateSpeed = targetRotationSpeed;
    
    setCountryNum((prev) => {
      const newNum = (prev - 1 + countryData.length) % countryData.length;
      setRotationSpeed(targetRotationSpeed);
      setTimeout(() => setRotationSpeed(8), 1500);
      setRotateGlobe(true);
      updateTextData(TextData[newNum]);
      setTimeout(() => {
        setRotateGlobe(false);
        controls.autoRotateSpeed = 8;
      }, 1000); // Match the duration of the revolution animation
      return newNum;
    });
  };

  const updateTextData = (newData) => {
    const currentData = textData.map((d) => ({ ...d }));
    let startTime = null;
    const animationDuration = 800; // Duration of the revolution animation
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = Math.min(elapsed / animationDuration, 1);

      const updatedData = currentData.map((d, index) => {
        const newLng = d.lng + 360 * t; // Make a complete revolution
        return {
          ...d,
          lat: d.lat + (newData[index].lat - d.lat) * t,
          lng: newLng > 180 ? newLng - 360 : newLng,
        };
      });

      setTextData(updatedData);
      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        setTextData(newData);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <div className="Counselors_container section">
      <div className="counselor_left_side">
        <p>Countries We Are in</p>
        <span>10+ Countries</span>
        <div className="progress-bar">
          <div className="progress">
            <p
              className={`progressLine ${rotateGlobe && "progressLineAnimation"}`}
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
        </div>
      </div>
      <div className="globe-container">
        <Globe
          ref={globeEl}
          width={isMd ? 340 : 840}
          height={isMd ? 400 : 700}
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
          arcLabel={() => ""}
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
          customLayerData={textData}
          customThreeObject={(d) => createTextCard(d.text, d.color)}
          customThreeObjectUpdate={(obj, e) => {
            const coords = globeEl.current.getCoords(e.lat, e.lng, e.alt);
            Object.assign(obj.position, coords);
          }}
        />
      </div>
    </div>
  );
};

export default Counselors;
