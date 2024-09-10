import Img1 from "../../../assets/University Images/USA/1.png";
import Img2 from "../../../assets/University Images/USA/2.png";
import Img3 from "../../../assets/University Images/USA/3.png";
import Img4 from "../../../assets/University Images/USA/4.png";
import Img5 from "../../../assets/University Images/USA/5.png";
import Img6 from "../../../assets/University Images/USA/6.png";
import Img7 from "../../../assets/University Images/USA/7.png";
import Img8 from "../../../assets/University Images/USA/8.png";
import Img9 from "../../../assets/University Images/USA/9.png";
import Img10 from "../../../assets/University Images/USA/10.jpg";
import Img11 from "../../../assets/University Images/USA/11.png";
import Img12 from "../../../assets/University Images/USA/12.png";
import Img13 from "../../../assets/University Images/USA/13.png";
import Img14 from "../../../assets/University Images/USA/14.png";
import Img15 from "../../../assets/University Images/USA/15.png";
import Img16 from "../../../assets/University Images/USA/16.png";
import Img17 from "../../../assets/University Images/USA/17.png";
import Img18 from "../../../assets/University Images/USA/18.png";
import Img19 from "../../../assets/University Images/USA/19.png";
import Img20 from "../../../assets/University Images/USA/20.jpg";
import Img21 from "../../../assets/University Images/USA/21.png";
import Img22 from "../../../assets/University Images/USA/22.jpg";
import Img23 from "../../../assets/University Images/USA/23.png";
import Img24 from "../../../assets/University Images/USA/24.png";
import Img25 from "../../../assets/University Images/USA/25.png";
import Img26 from "../../../assets/University Images/USA/26.jpg";
import Img27 from "../../../assets/University Images/USA/27.png";
import Img28 from "../../../assets/University Images/USA/28.png";
import Img29 from "../../../assets/University Images/USA/29.png";
import Img30 from "../../../assets/University Images/USA/30.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import Marquee from "react-fast-marquee";

const universityData = [
  {
    img: Img1,
    universityName: "Concordia University Chicago",
    ielts: "6.0",
    tofel: "90",
    backlogs: "10",
  },
  {
    img: Img2,
    universityName: "Clark University",
    ielts: "6.0",
    tofel: "85",
    backlogs: "0",
  },
  {
    img: Img3,
    universityName: "Saint Martin's University",
    ielts: "6.0",
    tofel: "71",
    backlogs: "0",
  },
  {
    img: Img4,
    universityName: "Christian Brothers University",
    ielts: "6.0",
    tofel: "75",
    backlogs: "0",
  },
  {
    img: Img5,
    universityName: "DePaul University",
    ielts: "6.5",
    tofel: "80",
    backlogs: "0",
  },
  {
    img: Img6,
    universityName: "Drexel University",
    ielts: "6.0",
    tofel: "90",
    backlogs: "0",
  },
  {
    img: Img7,
    universityName: "Elmhurst University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    img: Img8,
    universityName: "Florida Atlantic University",
    ielts: "6.0",
    tofel: "79",
    backlogs: "9",
  },
  {
    img: Img9,
    universityName: "Franklin University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "10",
  },
  {
    img: Img10,
    universityName: "Golden Gate University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "10",
  },
  {
    img: Img11,
    universityName: "Lawrence Technological University",
    ielts: "6.0",
    tofel: "79",
    backlogs: "0",
  },
  {
    img: Img12,
    universityName: "Miami University",
    ielts: "6.5",
    tofel: "80",
    backlogs: "0",
  },
  {
    img: Img13,
    universityName: "Middle Tennessee University",
    ielts: "5.5",
    tofel: "61",
    backlogs: "0",
  },
  {
    img: Img14,
    universityName: "Rowan University",
    ielts: "6.0",
    tofel: "70",
    backlogs: "0",
  },
  {
    img: Img15,
    universityName: "Roosevelt University",
    ielts: "6.5",
    tofel: "80",
    backlogs: "0",
  },
  {
    img: Img16,
    universityName: "Arkansas State University",
    ielts: "6.5",
    tofel: "90",
    backlogs: "0",
  },
  {
    img: Img17,
    universityName: "Dallas Baptist University",
    ielts: "6.0",
    tofel: "79",
    backlogs: "10",
  },
  {
    img: Img18,
    universityName: "Southern New Hampshire University",
    ielts: "6.0",
    tofel: "71",
    backlogs: "0",
  },
  {
    img: Img19,
    universityName: "Saint Louis University",
    ielts: "6.5",
    tofel: "80",
    backlogs: "10",
  },
  {
    img: Img20,
    universityName: "Texas State University",
    ielts: "6.5",
    tofel: "78",
    backlogs: "10",
  },
  {
    img: Img21,
    universityName: "The University of Akron",
    ielts: "6.0",
    tofel: "71",
    backlogs: "0",
  },
  {
    img: Img22,
    universityName: "University of St.Thomas",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    img: Img23,
    universityName: "University of BridgePort",
    ielts: "6.0",
    tofel: "80",
    backlogs: "20",
  },
  {
    img: Img24,
    universityName: "University of Missouri Kansas City",
    ielts: "6.5",
    tofel: "80",
    backlogs: "0",
  },
  {
    img: Img25,
    universityName: "University of Illinois Springfield",
    ielts: "6.0",
    tofel: "79",
    backlogs: "10",
  },
  {
    img: Img26,
    universityName: "UMASS Boston University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "5",
  },
  {
    img: Img27,
    universityName: "University of Illinois Chicago",
    ielts: "6.5",
    tofel: "80",
    backlogs: "5",
  },
  {
    img: Img28,
    universityName: "Webster University",
    ielts: "6.0",
    tofel: "80",
    backlogs: "10",
  },
  {
    img: Img29,
    universityName: "Western New England University",
    ielts: "6.0",
    tofel: "80",
    backlogs: "25",
  },
  {
    img: Img30,
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
              <img src={item.img} alt="" />
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
