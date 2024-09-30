import Img1 from "../../../assets/Country/conc.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import { Univercitydata } from "../../../Container/data/Universities";
import Marquee from "react-fast-marquee";

const universityData = [
  {
    id:1,
    img: "https://strapi.orientspectra.com/uploads/channels4_profile_fbccddc0da.jpg",
    universityName: "University of Melbourne",
    ielts: "6.5",
    tofel: "92",
    backlogs: "0",
  },
  {
    id:2,
    img: "https://strapi.orientspectra.com/uploads/U_Syd_Logo_1_removebg_preview_4eadf23bc9.png",
    universityName: "University of Sydney",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:3,
    img: "https://strapi.orientspectra.com/uploads/download_removebg_preview_875f65d9d6.png",
    universityName: "University of New South Wales (UNSW Sydney)",
    ielts: "6.0",
    tofel: "80",
    backlogs: "0",
  },
  {
    id:4,
    img: "https://strapi.orientspectra.com/uploads/Untitled_design_47_removebg_preview_c489fdf123.png",
    universityName: "University of Queensland (UQ)",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:5,
    img: "https://strapi.orientspectra.com/uploads/download_removebg_preview_1_0b2805f151.png",
    universityName: "Monash University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:6,
    img: "https://strapi.orientspectra.com/uploads/The_University_of_Western_Australia_logo_removebg_preview_6aa670811d.png",
    universityName: "University of Western Australia",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 7,
    img: "https://strapi.orientspectra.com/uploads/download_removebg_preview_2_a1315cfc13.png",
    universityName: "The University of Adelaide",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 8,
    img: "https://strapi.orientspectra.com/uploads/download_removebg_preview_3_825d492b62.png",
    universityName: "RMIT University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 9,
    img: "https://strapi.orientspectra.com/uploads/uts_1b15e165f2.webp",
    universityName: "University of Technology Sydney (UTS)",
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
