import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "./Country.css";
import Marquee from "react-fast-marquee";

const courseData = [
  {
    key: "1",
    couseName: "Hotel & Hospitality Management",
  },
  {
    key: "2",
    couseName: "Business Management",
  },
  {
    key: "3",
    couseName: "Interdisciplinary Sciences",
  },
  {
    key: "4",
    couseName: "Banking & Finance",
  },
  {
    key: "5",
    couseName: "Applied Mathematics",
  },
  {
    key: "6",
    couseName: "Artificial Intelligence",
  },
];
const TrendingCourse = () => {
  return (
    <div className="section trending-course">
      <h1>Popular courses in Switzerland</h1>
      <Marquee speed={100} pauseOnHover>
        <div className="univercity-section-card">
          {courseData.map((item) => (
            <div className="Bussiness-card" key={item}>
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
