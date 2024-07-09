import "./menu.css";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const CircularNavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="circular-nav-container">
        <div className={`circular-nav ${isOpen && "open"}`}>
          <div className="circular-nav-item" style={{ "--i": 0 }}>
            Home
          </div>
          <div className="circular-nav-item" style={{ "--i": 1 }}>
            Home
          </div>
          <div className="circular-nav-item" style={{ "--i": 2 }}>
            Home
          </div>
        </div>
        <button className="circular-nav-toggle" onClick={toggleMenu}>
          <AddIcon sx={{ fontSize: "34px" }} />
        </button>
      </div>
    </>
  );
};

export default CircularNavigationMenu;
