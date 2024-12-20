import Img1 from "../../../assets/Country/conc.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import { Univercitydata } from "../../../Container/data/Universities";
import Marquee from "react-fast-marquee";
import img1 from "../../../assets/University-Images/France/1.webp";
import img2 from "../../../assets/University-Images/France/2.webp";
import img3 from "../../../assets/University-Images/France/3.webp";
import img4 from "../../../assets/University-Images/France/4.webp";
import img5 from "../../../assets/University-Images/France/5.webp";
import img6 from "../../../assets/University-Images/France/6.webp";
import img7 from "../../../assets/University-Images/France/7.webp";
import img8 from "../../../assets/University-Images/France/8.webp";
import img9 from "../../../assets/University-Images/France/9.webp";
import img10 from "../../../assets/University-Images/France/10.webp";
import img11 from "../../../assets/University-Images/France/11.webp";
import img12 from "../../../assets/University-Images/France/12.webp";
import img13 from "../../../assets/University-Images/France/13.webp";
import img14 from "../../../assets/University-Images/France/14.webp";
import img15 from "../../../assets/University-Images/France/15.webp";
import img16 from "../../../assets/University-Images/France/16.webp";
import img17 from "../../../assets/University-Images/France/17.webp";
import img18 from "../../../assets/University-Images/France/18.webp";
import img19 from "../../../assets/University-Images/France/19.webp";
import img20 from "../../../assets/University-Images/France/20.webp";
import img21 from "../../../assets/University-Images/France/21.webp";
import img22 from "../../../assets/University-Images/France/22.webp";
import img23 from "../../../assets/University-Images/France/23.webp";

const universityData = [
  {
    id:1,
    img: img10,
    universityName: "ESSCA Business School",
    ielts: "6.0",
    tofel: "85",
  },
  {
    id:2,
    img: img11,
    universityName: "Avaincity University",
    ielts: "6.0",
    tofel: "83",
  },
  {
    id:3,
    img: img14,
    universityName: "Paris School of Business",
    ielts: "5.5",
    tofel: "70",
  },
  {
    id:4,
    img: img13,
    universityName: "NEOMA Business School",
    ielts: "6.0",
    tofel: "83",
  },
  {
    id:5,
    img: img6,
    universityName: "INSEEC Business School",
    ielts: "6.5",
    tofel: "90",
  },
  {
    id:6,
    img: img18,
    universityName: "ICN Business School",
    ielts: "6.5",
    tofel: "79",
  },
  {
    id: 7,
    img: img15,
    universityName: "Rennes School of Business",
    ielts: "6.5",
    tofel: "80",
  },
  {
    id: 8,
    img: img23,
    universityName: "EM Normandie Business School",
    ielts: "6.5",
    tofel: "79",
  },
  {
    id: 9,
    img: img20,
    universityName: "ESCE International Business School",
    ielts: "6.5",
    tofel: "80",
  },
  {
    id: 10,
    img: img21,
    universityName: "ECE",
    ielts: "6.0",
    tofel: "83",
  },
  {
    id: 11,
    img: img9,
    universityName: "IUM",
    ielts: "6.0",
    tofel: "79",
  },
  {
    id: 12,
    img: img16,
    universityName: "SupdePub University",
    ielts: "6.0",
    tofel: "83",
  },
  {
    id: 13,
    img: img2,
    universityName: "CREA OMENS Education",
    ielts: "6.5",
    tofel: "80",
  },
  {
    id: 15,
    img: img19,
    universityName: "HEIP",
    ielts: "6.5",
    tofel: "90",
  },
  {
    id: 16,
    img: img3,
    universityName: "ESAM Management Finance & Law",
    ielts: "6.5",
    tofel: "80",
  },
  {
    id: 17,
    img: img1,
    universityName: "American Business School",
    ielts: "6.5",
    tofel: "80",
  },
  {
    id: 18,
    img: img4,
    universityName: "ICD Business School",
    ielts: "6.5",
    tofel: "80",
  },
  {
    id: 19,
    img: img17,
    universityName: "Montpellier Business School",
    ielts: "6.0",
    tofel: "88",
  },
  {
    id: 20,
    img: img8,
    universityName: "ISTEC Business School",
    ielts: "6.0",
    tofel: "83",
  },
  {
    id: 21,
    img: img12,
    universityName: "EMLV",
    ielts: "6.0",
    tofel: "80",
  },
  {
    id: 22,
    img: img22,
    universityName: "CEDS",
    ielts: "6.5",
    tofel: "90",
  },
  {
    id: 23,
    img: img7,
    universityName: "IPI - Paris",
    ielts: "6.0",
    tofel: "83",
  },
  {
    id: 24,
    img: img5,
    universityName: "AIB Management & Business School",
    ielts: "6.0",
    tofel: "83",
  },
];

const Univercity = () => {
  return (
    <div className="section univercity-card">
      <h1>Find Your Dream University to <span>Study in France</span></h1>
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
