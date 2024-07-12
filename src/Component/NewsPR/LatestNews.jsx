import CircleArrow from "../Common/CircleArrow";
import "./news.css";
const LatestNews = ({ NewsData }) => {
  return (
    <div className="latest-newws-container section">
      <div className="latestnews-card">
        <div className="latest-image-card">
          <img
            src={`http://157.173.222.81:1337${NewsData?.attributes?.Headline_image?.data[0]?.attributes?.formats?.large?.url}`}
            alt=""
          />
        </div>
        <div>
          <h1>{NewsData?.attributes?.Title}</h1>
          <CircleArrow className="CircleArrow" />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
