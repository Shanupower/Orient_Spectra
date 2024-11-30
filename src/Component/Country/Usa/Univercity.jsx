import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import Marquee from "react-fast-marquee";
import img1 from "../../../assets/University-Images/USA/1.webp";
import img2 from "../../../assets/University-Images/USA/2.webp";
import img3 from "../../../assets/University-Images/USA/3.webp";
import img4 from "../../../assets/University-Images/USA/4.webp";
import img5 from "../../../assets/University-Images/USA/5.webp";
import img6 from "../../../assets/University-Images/USA/6.webp";
import img7 from "../../../assets/University-Images/USA/7.webp";
import img8 from "../../../assets/University-Images/USA/8.webp";
import img9 from "../../../assets/University-Images/USA/9.webp";
import img10 from "../../../assets/University-Images/USA/10.webp";
import img11 from "../../../assets/University-Images/USA/11.webp";
import img12 from "../../../assets/University-Images/USA/12.webp";
import img13 from "../../../assets/University-Images/USA/13.webp";
import img14 from "../../../assets/University-Images/USA/14.webp";
import img15 from "../../../assets/University-Images/USA/15.webp";
import img16 from "../../../assets/University-Images/USA/16.webp";
import img17 from "../../../assets/University-Images/USA/17.webp";
import img18 from "../../../assets/University-Images/USA/18.webp";
import img19 from "../../../assets/University-Images/USA/19.webp";
import img20 from "../../../assets/University-Images/USA/20.webp";
import img21 from "../../../assets/University-Images/USA/21.webp";
import img22 from "../../../assets/University-Images/USA/22.webp";
import img23 from "../../../assets/University-Images/USA/23.webp";
import img24 from "../../../assets/University-Images/USA/24.webp";
import img25 from "../../../assets/University-Images/USA/25.webp";
import img26 from "../../../assets/University-Images/USA/26.webp";
import img27 from "../../../assets/University-Images/USA/27.webp";
import img28 from "../../../assets/University-Images/USA/28.webp";
import img29 from "../../../assets/University-Images/USA/29.webp";
import img30 from "../../../assets/University-Images/USA/30.webp";

const universityData = [
  {
    id:1,
    img: img1,
    universityName: "Concordia University Chicago",
    ielts: "6.0",
    tofel: "90",
    backlogs: "10",
  },
  {
    id:2,
    img: img2,
    universityName: "Clark University",
    ielts: "6.0",
    tofel: "85",
    backlogs: "0",
  },
  {
    id:3,
    img: img3,
    universityName: "Saint Martin's University",
    ielts: "6.0",
    tofel: "71",
    backlogs: "0",
  },
  {
    id:4,
    img: img4,
    universityName: "Christian Brothers University",
    ielts: "6.0",
    tofel: "75",
    backlogs: "0",
  },
  {
    id:5,
    img: img5,
    universityName: "DePaul University",
    ielts: "6.5",
    tofel: "80",
    backlogs: "0",
  },
  {
    id:6,
    img: img6,
    universityName: "Drexel University",
    ielts: "6.0",
    tofel: "90",
    backlogs: "0",
  },
  {
    id:7,
    img: img7,
    universityName: "Elmhurst University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:8,
    img: img8,
    universityName: "Florida Atlantic University",
    ielts: "6.0",
    tofel: "79",
    backlogs: "9",
  },
  {
    id:9,
    img: img9,
    universityName: "Franklin University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "10",
  },
  {
    id:10,
    img: img10,
    universityName: "Golden Gate University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "10",
  },
  {
    id:11,
    img: img11,
    universityName: "Lawrence Technological University",
    ielts: "6.0",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:12,
    img: img12,
    universityName: "Miami University",
    ielts: "6.5",
    tofel: "80",
    backlogs: "0",
  },
  {
    id:13,
    img: img13,
    universityName: "Middle Tennessee University",
    ielts: "5.5",
    tofel: "61",
    backlogs: "0",
  },
  {
    id:14,
    img: img14,
    universityName: "Rowan University",
    ielts: "6.0",
    tofel: "70",
    backlogs: "0",
  },
  {
    id:15,
    img: img15,
    universityName: "Roosevelt University",
    ielts: "6.5",
    tofel: "80",
    backlogs: "0",
  },
  {
    id:16,
    img: img16,
    universityName: "Arkansas State University",
    ielts: "6.5",
    tofel: "90",
    backlogs: "0",
  },
  {
    id:17,
    img: img17,
    universityName: "Dallas Baptist University",
    ielts: "6.0",
    tofel: "79",
    backlogs: "10",
  },
  {
    id:18,
    img: img18,
    universityName: "Southern New Hampshire University",
    ielts: "6.0",
    tofel: "71",
    backlogs: "0",
  },
  {
    id:19,
    img: img19,
    universityName: "Saint Louis University",
    ielts: "6.5",
    tofel: "80",
    backlogs: "10",
  },
  {
    id:20,
    img: img20,
    universityName: "Texas State University",
    ielts: "6.5",
    tofel: "78",
    backlogs: "10",
  },
  {
    id:21,
    img: img21,
    universityName: "The University of Akron",
    ielts: "6.0",
    tofel: "71",
    backlogs: "0",
  },
  {
    id:22,
    img: img22,
    universityName: "University of St.Thomas",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:23,
    img: img23,
    universityName: "University of BridgePort",
    ielts: "6.0",
    tofel: "80",
    backlogs: "20",
  },
  {
    id:24,
    img: img24,
    universityName: "University of Missouri Kansas City",
    ielts: "6.5",
    tofel: "80",
    backlogs: "0",
  },
  {
    id:25,
    img: img25,
    universityName: "University of Illinois Springfield",
    ielts: "6.0",
    tofel: "79",
    backlogs: "10",
  },
  {
    id:26,
    img: img26,
    universityName: "UMASS Boston University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "5",
  },
  {
    id:27,
    img: img27,
    universityName: "University of Illinois Chicago",
    ielts: "6.5",
    tofel: "80",
    backlogs: "5",
  },
  {
    id:28,
    img: img28,
    universityName: "Webster University",
    ielts: "6.0",
    tofel: "80",
    backlogs: "10",
  },
  {
    id:29,
    img: img29,
    universityName: "Western New England University",
    ielts: "6.0",
    tofel: "80",
    backlogs: "25",
  },
  {
    id:30,
    img: img30,
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
