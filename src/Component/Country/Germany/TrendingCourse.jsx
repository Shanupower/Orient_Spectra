import SchoolIcon from '@mui/icons-material/School';
import "./Country.css";
import Marquee from "react-fast-marquee";

const TrendingCourse = () => {
  const courseData = [
    {
      key: "1",
      couseName: "Deutschlandstipendium Scholarship",
    },
    {
      key: "2",
      couseName: "DAAD WISE Scholarship",
    },
    {
      key: "3",
      couseName: "Konrad-Adenauer-Stiftung (KAS) Scholarship",
    },
    {
      key: "4",
      couseName: "ESMT Women's Academic Scholarship",
    },
    {
      key: "5",
      couseName: "WHU-Otto Beisheim School of Management",
    },
    {
      key: "6",
      couseName: "Goethe Goes Global Scholarship",
    },
    {
      key: "7",
      couseName: "DLD Executive MBA Scholarship",
    },
    {
      key: "8",
      couseName: "University of Stuttgart Master Scholarship",
    },
    {
      key: "9",
      couseName: "DAAD Helmut-Schmidt Masters Scholarships",
    },
    {
      key: "10",
      couseName: "DAAD Scholarships for Development-Related Postgraduate Courses",
    },
    {
      key: "11",
      couseName: "Friedrich Naumann Foundation Scholarship for International Students",
    },
   
  ];
  return (
    <div className="section trending-course">
      <h1>Scholarship for Indian Students<span> in Germany</span></h1>
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
