import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import "./index.css";
const Button = ({ text, link, arrow, className, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };
  return (
    <>
      <Link
        to={link ? link : "#"}
        className={`Link_route orient-spectra-btn-text CoomonButton ${className}`}
        onClick={handleClick}
      >
        {text}
        {arrow ? <ArrowForwardIcon /> : null}
      </Link>
    </>
  );
};

export default Button;
