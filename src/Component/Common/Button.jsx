import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import "./index.css";
const Button = ({ text, link, arrow, className }) => {
  return (
    <>
      <Link
        to={link ? link : "#"}
        className={`Link_route CoomonButton ${className}`}
      >
        {text}
        {arrow ? <ArrowForwardIcon /> : null}
      </Link>
    </>
  );
};

export default Button;
