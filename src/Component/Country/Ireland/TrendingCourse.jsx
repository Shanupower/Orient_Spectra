import SchoolIcon from '@mui/icons-material/School';
import "./Country.css";
import Marquee from "react-fast-marquee";

const TrendingCourse = () => {
  const courseData = [
    {
      key: "1",
      couseName: "MSc Environmental Technology",
    },
    {
      key: "2",
      couseName: "MSc in Project Management",
    },
    {
      key: "3",
      couseName: "MSc in Aeronautical Engineering",
    },
    {
      key: "4",
      couseName: "MSc in Management and Marketing",
    },
    {
      key: "5",
      couseName: "MSc in Public Health",
    },
    {
      key: "6",
      couseName: "MSc in Business Analytics",
    },
    {
      key: "7",
      couseName: "MSc in Artificial Intelligence & Machine Learning",
    },
   
  ];
  return (
    <div className="section trending-course">
      <h1>Scholarship for Indian Students<span> in Ireland</span></h1>
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
