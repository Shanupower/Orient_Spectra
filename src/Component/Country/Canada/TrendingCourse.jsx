import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "./Country.css";
import Marquee from "react-fast-marquee";

const courseData = [
  {
    key: 1,
    couseName: "Masters in Human-Computer Interaction",
  },
  {
    key: 2,
    couseName: "Masters in Artificial Intelligence",
  },
  {
    key: 3,
    couseName: "Masters in Machine Learning",
  },
  {
    key: 4,
    couseName: "Masters in Data Science",
  },
  {
    key: 5,
    couseName: "MBA in Agile Analysis",
  },
  {
    key: 6,
    couseName: "MBA in Business Data Analytics",
  },
  {
    key: 7,
    couseName: "MBA in Cybersecurity Analysis",
  },
  {
    key: 8,
    couseName: "Master’s in Project Management",
  },
  {
    key: 9,
    couseName: "Master’s in Health Management",
  },
];

const TrendingCourse = () => {
  return (
    <div className="section trending-course">
      <h1>Available Courses To Study <span>in Canada</span></h1>
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
