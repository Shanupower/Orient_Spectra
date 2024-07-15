import CircleArrow from "../Common/CircleArrow";
import "./news.css";
const RecentNews = ({ NewsData }) => {
  return (
    <div className="Recent-newws-container section">
      {NewsData?.map((item) => (
        <div key={item} className="recent_news_section">
          <div className="Recentnews-card">
            <div className="recentnews-card-img">
              <img
                src={`http://157.173.222.81:1337${item?.attributes?.Headline_image?.data[0]?.attributes?.formats?.large?.url}`}
                alt=""
              />
            </div>
            <div>
              <p>{item?.attributes.Title}</p>
              <CircleArrow className="CircleArrow" />
            </div>
          </div>
          <div className="recent-news-title-card">
            <h1>{item?.attributes.Title}</h1>
            <p>{item?.attributes?.Short_Description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentNews;
