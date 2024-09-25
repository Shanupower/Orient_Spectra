import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import Marquee from "react-fast-marquee";

const universityData = [
  {
    id:1,
    img: "https://strapi.orientspectra.com/uploads/1_8d2a22d015.webp",
    universityName: "Concordia University Chicago",
    ielts: "6.0",
    tofel: "90",
    backlogs: "10",
  },
  {
    id:2,
    img: "https://strapi.orientspectra.com/uploads/2_de0a32c4f0.webp",
    universityName: "Clark University",
    ielts: "6.0",
    tofel: "85",
    backlogs: "0",
  },
  {
    id:3,
    img: "https://strapi.orientspectra.com/uploads/3_f420e86d10.webp",
    universityName: "Saint Martin's University",
    ielts: "6.0",
    tofel: "71",
    backlogs: "0",
  },
  {
    id:4,
    img: "https://strapi.orientspectra.com/uploads/4_e2c548eaa9.webp",
    universityName: "Christian Brothers University",
    ielts: "6.0",
    tofel: "75",
    backlogs: "0",
  },
  {
    id:5,
    img: "https://strapi.orientspectra.com/uploads/5_0c0fbbebe1.webp",
    universityName: "DePaul University",
    ielts: "6.5",
    tofel: "80",
    backlogs: "0",
  },
  {
    id:6,
    img: "https://strapi.orientspectra.com/uploads/Drexel_University_b963377272_be190230ba.webp",
    universityName: "Drexel University",
    ielts: "6.0",
    tofel: "90",
    backlogs: "0",
  },
  {
    id:7,
    img: "https://strapi.orientspectra.com/uploads/7_5fdff1c791.webp",
    universityName: "Elmhurst University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:8,
    img: "https://strapi.orientspectra.com/uploads/8_3d53a4e887.webp",
    universityName: "Florida Atlantic University",
    ielts: "6.0",
    tofel: "79",
    backlogs: "9",
  },
  {
    id:9,
    img: "https://strapi.orientspectra.com/uploads/9_6d90c52e9d.webp",
    universityName: "Franklin University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "10",
  },
  {
    id:10,
    img: "https://strapi.orientspectra.com/uploads/10_223ae02f56.webp",
    universityName: "Golden Gate University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "10",
  },
  {
    id:11,
    img: "https://strapi.orientspectra.com/uploads/11_171ec4845f.webp",
    universityName: "Lawrence Technological University",
    ielts: "6.0",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:12,
    img: "https://strapi.orientspectra.com/uploads/12_43df1af268.webp",
    universityName: "Miami University",
    ielts: "6.5",
    tofel: "80",
    backlogs: "0",
  },
  {
    id:13,
    img: "https://strapi.orientspectra.com/uploads/13_9199144523.webp",
    universityName: "Middle Tennessee University",
    ielts: "5.5",
    tofel: "61",
    backlogs: "0",
  },
  {
    id:14,
    img: "https://strapi.orientspectra.com/uploads/14_cc731f511c.webp",
    universityName: "Rowan University",
    ielts: "6.0",
    tofel: "70",
    backlogs: "0",
  },
  {
    id:15,
    img: "https://strapi.orientspectra.com/uploads/15_1d10bc99a6.webp",
    universityName: "Roosevelt University",
    ielts: "6.5",
    tofel: "80",
    backlogs: "0",
  },
  {
    id:16,
    img: "https://strapi.orientspectra.com/uploads/16_aaeb23b30e.webp",
    universityName: "Arkansas State University",
    ielts: "6.5",
    tofel: "90",
    backlogs: "0",
  },
  {
    id:17,
    img: "https://strapi.orientspectra.com/uploads/17_8f584cf868.webp",
    universityName: "Dallas Baptist University",
    ielts: "6.0",
    tofel: "79",
    backlogs: "10",
  },
  {
    id:18,
    img: "https://strapi.orientspectra.com/uploads/18_8fe9baae03.webp",
    universityName: "Southern New Hampshire University",
    ielts: "6.0",
    tofel: "71",
    backlogs: "0",
  },
  {
    id:19,
    img: "https://strapi.orientspectra.com/uploads/19_1c0a1297fe.webp",
    universityName: "Saint Louis University",
    ielts: "6.5",
    tofel: "80",
    backlogs: "10",
  },
  {
    id:20,
    img: "https://strapi.orientspectra.com/uploads/20_961d001a59.webp",
    universityName: "Texas State University",
    ielts: "6.5",
    tofel: "78",
    backlogs: "10",
  },
  {
    id:21,
    img: "https://strapi.orientspectra.com/uploads/21_f2a8e2623d.webp",
    universityName: "The University of Akron",
    ielts: "6.0",
    tofel: "71",
    backlogs: "0",
  },
  {
    id:22,
    img: "https://strapi.orientspectra.com/uploads/22_9b6f6a2758.webp",
    universityName: "University of St.Thomas",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:23,
    img: "https://strapi.orientspectra.com/uploads/23_8c28ad33c8.webp",
    universityName: "University of BridgePort",
    ielts: "6.0",
    tofel: "80",
    backlogs: "20",
  },
  {
    id:24,
    img: "https://strapi.orientspectra.com/uploads/24_44d3fba583.webp",
    universityName: "University of Missouri Kansas City",
    ielts: "6.5",
    tofel: "80",
    backlogs: "0",
  },
  {
    id:25,
    img: "https://strapi.orientspectra.com/uploads/25_b1b03626ab.webp",
    universityName: "University of Illinois Springfield",
    ielts: "6.0",
    tofel: "79",
    backlogs: "10",
  },
  {
    id:26,
    img: "https://strapi.orientspectra.com/uploads/Umass_b17269ab7e_16f9ef5405.webp",
    universityName: "UMASS Boston University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "5",
  },
  {
    id:27,
    img: "https://strapi.orientspectra.com/uploads/27_fe9a926f35.webp",
    universityName: "University of Illinois Chicago",
    ielts: "6.5",
    tofel: "80",
    backlogs: "5",
  },
  {
    id:28,
    img: "https://strapi.orientspectra.com/uploads/28_a4ac1cad51.webp",
    universityName: "Webster University",
    ielts: "6.0",
    tofel: "80",
    backlogs: "10",
  },
  {
    id:29,
    img: "https://strapi.orientspectra.com/uploads/29_da2cf94c05.webp",
    universityName: "Western New England University",
    ielts: "6.0",
    tofel: "80",
    backlogs: "25",
  },
  {
    id:30,
    img: "https://strapi.orientspectra.com/uploads/30_578d52440e.webp",
    universityName: "Massachusetts College of Pharmacy & Health Sciences",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
];

const Univercity = () => {
  return (
    <div className="section univercity-card">
      <h1>Find Your Dream University to <span>Study in USA</span></h1>
      <Marquee speed={200} pauseOnHover>
      <div className="univercity-section-card">
        {universityData.map((item) => (
          <div className="univercityList" key={item.id}>
            <div className="univercityList-Img">
              <img src={item.img} alt="University Image"/>
            </div>
            <div className="Concordia-container">
              <div className="ConcordiaCard">
                <p>{item.universityName}</p>
                <ArrowForwardIcon className="rightArrowB" />
              </div>
              <div className="ConcordiaCard Ietes">
              <div>
                  <h2>{item.ielts}</h2>
                  <p>IELTS</p>
                </div>
                <div>
                  <h2>{item.tofel}</h2>
                  <p>TOEFL</p>
                </div>
                <div>
                  <h2>{item.backlogs}</h2>
                  <p>Backlogs Accepted</p>
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
