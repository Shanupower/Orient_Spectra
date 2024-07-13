import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./news.css";
const Hero = ({ NewsData }) => {
  console.log("NewsData", NewsData);
  return (
    <div className="hero-news-and-pr-container section">
      <p>Orient Spectra</p>
      <h1>{NewsData?.attributes?.Title}</h1>
      <div className="Catalyzing-card">
        <p>{NewsData?.attributes?.Short_Description}</p>

        <div className="search-card">
          <input type="text" placeholder="search..." />
          <SearchOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Hero;
