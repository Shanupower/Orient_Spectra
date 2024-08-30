import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "./Country.css";
import Marquee from "react-fast-marquee";

const courseData = [
  {
    key: "1",
    couseName: "Accounting and Finance",
  },
  {
    key: "2",
    couseName: "Business Management & Entrepreneurship",
  },
  {
    key: "3",
    couseName: "Computer Science and Technology",
  },
  {
    key: "4",
    couseName: "Marketing and Advertisement",
  },
  {
    key: "5",
    couseName: "Engineering",
  },
];

const TrendingCourse = () => {
  return (
    <div className="section trending-course">
      <h1>Available Courses To Study in Canada</h1>
      <Marquee speed={100} pauseOnHover>
        <div className="univercity-section-card">
          {courseData.map((item) => (
            <div className="Bussiness-card">
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
