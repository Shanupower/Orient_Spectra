import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "./Country.css";
import Marquee from "react-fast-marquee";

const TrendingCourse = () => {
  const courseData = [
    {
      key: "1",
      couseName: "Information Technology",
    },
    {
      key: "2",
      couseName: "Engineering Management",
    },
    {
      key: "3",
      couseName: "Professional Accounting ",
    },
    {
      key: "4",
      couseName: "Project Management",
    },
    {
      key: "5",
      couseName: "Data Science",
    },
    {
      key: "6",
      couseName: "BBA",
    },
  ];
  return (
    <div className="section trending-course">
      <h1>Top Trending Courses<span> in Germany</span></h1>
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
