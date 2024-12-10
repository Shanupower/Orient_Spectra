import Img1 from "../../../assets/Country/conc.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import { Univercitydata } from "../../../Container/data/Universities";
import Marquee from "react-fast-marquee";
import img1 from "../../../assets/University-Images/Australia/1.webp";
import img2 from "../../../assets/University-Images/Australia/2.webp";
import img3 from "../../../assets/University-Images/Australia/3.webp";
import img4 from "../../../assets/University-Images/Australia/4.webp";
import img5 from "../../../assets/University-Images/Australia/5.webp";
import img6 from "../../../assets/University-Images/Australia/6.webp";
import img7 from "../../../assets/University-Images/Australia/7.webp";
import img8 from "../../../assets/University-Images/Australia/8.webp";


const universityData = [
  {
    id:1,
    img: img5,
    universityName: "University of Melbourne",
    ielts: "6.5",
    tofel: "92",
    backlogs: "0",
  },
  {
    id:2,
    img: img8,
    universityName: "University of Sydney",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:3,
    img: img4,
    universityName: "University of New South Wales (UNSW Sydney)",
    ielts: "6.0",
    tofel: "80",
    backlogs: "0",
  },
  {
    id:4,
    img: img7,
    universityName: "University of Queensland (UQ)",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:5,
    img: img1,
    universityName: "Monash University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:6,
    img: img6,
    universityName: "University of Western Australia",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 7,
    img: img2,
    universityName: "The University of Adelaide",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 8,
    img: img3,
    universityName: "RMIT University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
];


const Univercity = () => {
  return (
    <div className="section univercity-card">
      <h1>Find Your Dream University to <span>Study in Australia</span></h1>
      <Marquee speed={200} pauseOnHover>
      <div className="univercity-section-card">
        {universityData.map((item) => (
          <div className="univercityList" key={item.id}>
            <div className="univercityList-Img">
              <img src={item.img} alt="" />
            </div>
            <div className="Concordia-container">
              <div className="ConcordiaCard">
                <p>{item.universityName}</p>
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
