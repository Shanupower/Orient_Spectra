import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import Marquee from "react-fast-marquee";

const universityData = [
  {
    key:1,
    img: "https://strapi.orientspectra.com/uploads/1_61d4a89cef.webp",
    title: "EU Business School"
  },
  {
    key:2,
    img: "https://strapi.orientspectra.com/uploads/2_a6101c1a73.webp",
    title: "University of Europe for Applied Sciences"

  },
  {
    key:3,
    img: "https://strapi.orientspectra.com/uploads/3_35008e0c54.webp",
    title: "IU of Applied Sciences"
  },
  {
    key:4,
    img: "https://strapi.orientspectra.com/uploads/4_ab74fddb01.webp",
    title: "SRH Berlin University of Applied Sciences"
  },
  {
    key:5,
    img: "https://strapi.orientspectra.com/uploads/5_e70654ef5b.webp",
    title: "Gisma University of Applied Sciences"
  },
  {
    key:6,
    img: "https://strapi.orientspectra.com/uploads/6_67f8497b5d.webp",
    title: "Steinbies University"
  },
  {
    key:7,
    img: "https://strapi.orientspectra.com/uploads/7_ebd0f3ee88.webp",
    title: "Berlin of School Business & Inovation"
  },
];

const Univercity = () => {
  return (
    <div className="section univercity-card">
      <h1>Top Private Universities to <span>Study in Germany </span></h1>
      <Marquee speed={200} pauseOnHover>
        <div className="univercity-section-card">
          {universityData.map((item) => (
            <div className="univercityList" key={item.key}>
              <div className="univercityList-Img">
                <img src={item.img} alt="University" loading="lazy" />
              </div>
              <div className="Concordia-container">
                <div className="ConcordiaCard">
                  <p>{item.title}</p>
                  <ArrowForwardIcon className="rightArrowB" />
                </div>
                <div className="ConcordiaCard Ietes">
                  <div>
                    <h2>7</h2>
                    <p>Minimum IELTS Required</p>
                  </div>
                  <div>
                    <h2>16</h2>
                    <p>Global Ranking</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Univercity;
