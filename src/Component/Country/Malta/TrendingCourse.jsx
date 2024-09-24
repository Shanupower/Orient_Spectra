import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "./Country.css";
import Marquee from "react-fast-marquee";

const courseData = [
  {
    key: "1",
    couseName: "Arts, Design, and Media",
  },
  {
    key: "2",
    couseName: "Computer and IT",
  },
  {
    key: "3",
    couseName: "Economics",
  },
  {
    key: "4",
    couseName: "Social Science",
  },
  {
    key: "5",
    couseName: "Medicine and Health Sciences",
  },
  {
    key: "6",
    couseName: "Environment and Agriculture",
  },
  {
    key: "7",
    couseName: "Business and Management",
  },
  {
    key: "8",
    couseName: "Engineering and Technology",
  },
  {
    key: "9",
    couseName: "Humanities and Law",
  },
  {
    key: "10",
    couseName: "Natural Sciences and Mathematics",
  },
];

const TrendingCourse = () => {
  return (
    <div className="section trending-course">
      <h1>Top Trending Courses in <span>Malta</span></h1>
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
