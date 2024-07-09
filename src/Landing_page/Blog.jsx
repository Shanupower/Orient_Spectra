import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import "./index.css";

const Blog = () => {
  return (
    <>
      <div className="section BlogContainer">
        <div className="leftBlogCard">
          <div className="titleblogContent">
            <span>New</span>
            <p>Title Of</p>
            <strong>The Blog</strong>
            <ArrowForwardIcon className="rightBlogArow" />
          </div>
          <div className="blogContent">
            {" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              sint, pariatur fugiat ipsum impedit laudantium magni error ipsam
              incidunt est veritatis odio dicta provident porro dignissimos nam
              iste non at.
            </p>
            <ArrowForwardIcon className="rightArrowBlog" />
          </div>
        </div>
        <div className="rightBlogsCantainer">
          {[1, 2, 3, 4].map((item) => (
            <div className="rightcard" key={item}>
              <strong>Title Of The Blog</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, recusandae.
              </p>
            </div>
          ))}
          <Link to={"/blogs"} className="Link_route findMore">
            Find More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Blog;
