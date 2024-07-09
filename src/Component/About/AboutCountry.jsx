import "./about.css";

const AboutCountry = () => {
  return (
    <div className="AboutCountry-container section">
      <h1>Countries We Are in</h1>
      <div className="AboutCountry-section">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
          <div className="AboutCountry-card" key={item}>
            <div className="counrtyImage-card"></div>
            <div className="counttry-name-card">
              <p>United state of America</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCountry;
