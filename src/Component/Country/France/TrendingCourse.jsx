import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "./Country.css";
import Marquee from "react-fast-marquee";

const TrendingCourse = () => {
  const courseData = [
    {
      key: "1",
      couseName: "Data Science ",
    },
    {
      key: "2",
      couseName: "Finance",
    },
    {
      key: "3",
      couseName: "Business Analytics ",
    },
    {
      key: "4",
      couseName: "Fashion Designing",
    },
    {
      key: "5",
      couseName: "Artificial Intelligence",
    },
    {
      key: "6",
      couseName: "Luxury Brand Management  ",
    },
    {
      key: "7",
      couseName: "Hospitality & Tourism Management ",
    },
    {
      key: "8",
      couseName: "Supply Chain Management ",
    },
  ];
  return (
    <div className="section trending-course">
      <h1>Top Trending Courses <span>in France</span></h1>
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
