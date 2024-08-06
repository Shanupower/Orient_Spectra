import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useLocation } from "react-router-dom";
import "./index.css";

const CircleArrow = ({ className, onClick }) => {
  

  return (
    <ArrowForwardIcon 
      className={`ArrowForwardIcon ${className}`} 
      onClick={onClick} 
    />
  );
};

export default CircleArrow;