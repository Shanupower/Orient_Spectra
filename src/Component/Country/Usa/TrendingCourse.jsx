import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "./Country.css";
import Marquee from "react-fast-marquee";

const courseData =[
  {
    key: "1",
    couseName: "Business Management"
  },
  {
    key: "2",
    couseName: "Business Administration",
  },
  {
    key: "3",
    couseName: "Construction Management"
  },
  {
    key: "4",
    couseName: "Computer Science"
  },
  {
    key: "5",
    couseName: "Finance"
  },
  {
    key: "6",
    couseName: "Data Analytics"
  },
  {
    key: "7",
    couseName: "Business Analytics"
  },
  
]

const TrendingCourse = () => {
  return (
    <div className="section trending-course">
      <h1>Top Trending Courses in <span>USA for Masters</span></h1>
      <Marquee speed={100} pauseOnHover>
        <div className="univercity-section-card">
          {courseData.map((item) => (
            <div className="Bussiness-card" >
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
