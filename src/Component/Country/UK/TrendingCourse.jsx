import SchoolIcon from '@mui/icons-material/School';
import "./Country.css";
import Marquee from "react-fast-marquee";


const courseData = [
  {
    key: "1",
    couseName: "Chevening Scholarship",
  },
  {
    key: "2",
    couseName: "Erasmus Mundus Scholarships",
  },
  {
    key: "3",
    couseName: "GREAT Scholarships",
  },
  {
    key: "4",
    couseName: "Manmohan Singh Scholarships ",
  },
  {
    key: "5",
    couseName: "Goa Education Trust Scholarships",
  },
  {
    key: "6",
    couseName: "InLaks Scholarships",
  },

];

const TrendingCourse = () => {
  return (
    <div className="section trending-course">
      <h1>Scholarship for Indian Students <span>in UK</span></h1>
      <Marquee speed={100} pauseOnHover>
        <div className="univercity-section-card">
          {courseData.map((item) => (
            <div className="Bussiness-card" key={item.key}>
              <p>{item.couseName}</p>
              <SchoolIcon className="Bussinesscenicon" />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TrendingCourse;
