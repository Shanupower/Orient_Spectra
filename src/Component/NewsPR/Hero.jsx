import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./news.css";
const Hero = () => {
  return (
    <div className="hero-news-and-pr-container section">
      <p>Orient Spectra</p>
      <h1>Catalyzing Curiosity</h1>
      <div className="Catalyzing-card">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          voluptatum impedit corrupti amet quidem modi vero non tempora officiis
          ipsa.
        </p>

        <div className="search-card">
          <input type="text" placeholder="search..." />
          <SearchOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Hero;
