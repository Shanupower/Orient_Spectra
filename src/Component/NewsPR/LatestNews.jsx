import CircleArrow from "../Common/CircleArrow";
import "./news.css";
const LatestNews = () => {
  return (
    <div className="latest-newws-container section">
      <div className="latestnews-card">
        <div>
          <h1>Latest News Title</h1>
          <CircleArrow className="CircleArrow" />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
