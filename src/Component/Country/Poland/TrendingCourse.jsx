import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "./Country.css";
import Marquee from "react-fast-marquee";

const courseData = [
  {
    key: "1",
    couseName: "Engineering and Technology",
  },
  {
    key: "2",
    couseName: "Medicine and Health Sciences",
  },
  {
    key: "3",
    couseName: "Business and Economics",
  },
  {
    key: "4",
    couseName: "Humanities and Social Sciences",
  },
];

const TrendingCourse = () => {
  return (
    <div className="section trending-course">
      <h1>Top Trending Courses in <span>Poland</span></h1>
      <Marquee speed={100} pauseOnHover>
        <div className="univercity-section-card">
          {courseData.map((item) => (
            <div className="Bussiness-card" key={item.key}>
              <p>{item.couseName}</p>
              <BusinessCenterIcon className="Bussinesscenicon" />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TrendingCourse;
