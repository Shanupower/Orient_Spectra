import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "./Country.css";
import Marquee from "react-fast-marquee";

const courseData = [
  {
    key: "1",
    couseName: "Hospitality ",
  },
  {
    key: "2",
    couseName: "Digital Business",
  },
  {
    key: "3",
    couseName: "Global Business Management",
  },
  {
    key: "4",
    couseName: "Culinary Arts ",
  },
  {
    key: "5",
    couseName: "MBA",
  },
  {
    key: "6",
    couseName: "Finance",
  },
  {
    key: "6",
    couseName: "Material Science",
  },
  {
    key: "6",
    couseName: "Applied Mathematics",
  },
  {
    key: "6",
    couseName: "Biomedical Engineering",
  },
];
const TrendingCourse = () => {
  return (
    <div className="section trending-course">
      <h1>Popular courses in <span>Switzerland</span></h1>
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
