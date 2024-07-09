import CircleArrow from "../Common/CircleArrow";
import "./news.css";
const RecentNews = () => {
  return (
    <div className="Recent-newws-container section">
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item} className="recent_news_section">
          <div className="Recentnews-card">
            <div>
              <p>19 Jun 2024</p>
              <CircleArrow className="CircleArrow" />
            </div>
          </div>
          <div className="recent-news-title-card">
            <h1>Recent News Title</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ad
              quis alias voluptatum amet?
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentNews;
