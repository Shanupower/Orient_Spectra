import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "./Country.css";

const TrendingCourse = () => {
  return (
    <div className="section trending-course">
      <h1>Find Your Dream University to study in USA</h1>
      <div className="univercity-section-card">
        {[1, 2, 3, 4, 5, 6, 5, 5, 5, 5].map((item) => (
          <div className="Bussiness-card" key={item}>
            <p>Business Management</p>
            <BusinessCenterIcon className="Bussinesscenicon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCourse;
