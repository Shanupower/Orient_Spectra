import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "./Country.css";
import Marquee from "react-fast-marquee";

const courseData = [
  {
    key: "1",
    couseName: "Business and Management",
  },
  {
    key: "2",
    couseName: "Information Technology and Computer Science",
  },
  {
    key: "3",
    couseName: "Hospitality and Tourism Management",
  },
  {
    key: "4",
    couseName: "Healthcare and Life Sciences",
  },
  {
    key: "5",
    couseName: "Architecture and Design",
  },
  {
    key: "6",
    couseName: "Arts and Social Sciences",
  },
  {
    key: "7",
    couseName: "LAW",
  },
  {
    key: "7",
    couseName: "Engineering",
  },
];

const TrendingCourse = () => {
  return (
    <div className="section trending-course">
      <h1>Top Courses in Singapore for Study Abroad Programs</h1>
      <p>
        Singapore offers a wide range of courses that are attractive to
        international students due to its high educational standards and vibrant
        multicultural environment. Here are some of the best courses to study in
        Singapore for international students:
      </p>
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
