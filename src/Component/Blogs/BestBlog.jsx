import CircleArrow from "../Common/CircleArrow";
import "./blog.css";

const BestBlog = () => {
  return (
    <div className="bestblog-conntainer section">
      <div className="continue-reading-card">
        <CircleArrow className="LeftCircleArrow" />
        <p>Continue Reading</p>
        <CircleArrow className="rightCircleArrow" />
      </div>

      <div className="bestblog-section">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <div className="bestblog-leftside-container" key={item}>
            <div className="bestblog-leftside-card1">
              <p>Best of the Week</p>
              <h1>
                Title Of the <br />
                Blog
              </h1>
            </div>
            <div className="bestblog-leftside-card2">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                non earum numquam error illo?
              </p>
              <CircleArrow className="rightCircleArrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestBlog;
