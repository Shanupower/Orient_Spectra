import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import "./index.css";
const Button = ({ text, link, arrow, className, onClick }) => {
  return (
    <>
      <Link
        onClick={onClick}
        to={link ? link : "#"}
        className={`Link_route orient-spectra-btn-text CoomonButton ${className}`}
      >
        {text}
        {arrow ? <ArrowForwardIcon /> : null}
      </Link>
    </>
  );
};

export default Button;
