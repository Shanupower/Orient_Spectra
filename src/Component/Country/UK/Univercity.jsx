import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Img1 from "../../../assets/University Images/UK/1.png";
import Img2 from "../../../assets/University Images/UK/2.png";
import Img3 from "../../../assets/University Images/UK/3.jpg";
import Img4 from "../../../assets/University Images/UK/4.png";
import Img5 from "../../../assets/University Images/UK/5.png";
import Img6 from "../../../assets/University Images/UK/6.png";
import Img7 from "../../../assets/University Images/UK/7.png";
import Img8 from "../../../assets/University Images/UK/8.png";
import Img9 from "../../../assets/University Images/UK/9.png";
import Img10 from "../../../assets/University Images/UK/10.png";
import Img11 from "../../../assets/University Images/UK/11.png";
import Img12 from "../../../assets/University Images/UK/12.png";
import Img13 from "../../../assets/University Images/UK/13.png";
import Img14 from "../../../assets/University Images/UK/14.png";
import Img15 from "../../../assets/University Images/UK/15.jpg";
import Img16 from "../../../assets/University Images/UK/16.jpg";
import Img17 from "../../../assets/University Images/UK/17.jpg";
import Img18 from "../../../assets/University Images/UK/18.png";
import Img19 from "../../../assets/University Images/UK/19.jpg";
import Img20 from "../../../assets/University Images/UK/20.jpg";
import Img21 from "../../../assets/University Images/UK/21.png";
import Img22 from "../../../assets/University Images/UK/22.jpg";
import "./Country.css";
import Marquee from "react-fast-marquee";

const universityData = [
  {
    id:1,
    img: Img1,
    universityName: "Abertay University",
    ielts: "6.5",
    tofel: "92",
    backlogs: "0",
  },
  {
    id:2,
    img: Img2,
    universityName: "Bradley University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:3,
    img: Img3,
    universityName: "Edinburgh Napier University",
    ielts: "6.0",
    tofel: "80",
    backlogs: "0",
  },
  {
    id:4,
    img: Img4,
    universityName: "Prifysgol wrecsam wrexham University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:5,
    img: Img5,
    universityName: "University for the Creative Arts",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:6,
    img: Img6,
    universityName: "Heroit Watt Univrsity",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 7,
    img: Img7,
    universityName: "London South Bank University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 8,
    img: Img8,
    universityName: "Malvern House London",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 9,
    img: Img9,
    universityName: "Middlesex University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 10,
    img: Img10,
    universityName: "Northumbria University Newcastle",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 11,
    img: Img11,
    universityName: "Prifysgol Cymru Y Drindod Dewi Sant University of wales Trinity sant David",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 12,
    img: Img12,
    universityName: "Royal Holloway University of London",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 13,
    img: Img13,
    universityName: "SaintPeter's University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 14,
    img: Img14,
    universityName: "University of College Brimingham",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 15,
    img: Img15,
    universityName: "Study Group",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 16,
    img: Img16,
    universityName: "University of Wolverhampton",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 17,
    img: Img17,
    universityName: "University of Gloucestershire",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 18,
    img: Img18,
    universityName: "University of Hertfordshire",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 19,
    img: Img19,
    universityName: "University of East London",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 20,
    img: Img20,
    universityName: "University of West London",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 21,
    img: Img21,
    universityName: "University of the West of England",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 22,
    img: Img22,
    universityName: "York st John University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
];

const Univercity = () => {
  return (
    <div className="section univercity-card">
      <h1>Find Your Dream University to <span>study in UK</span></h1>
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
