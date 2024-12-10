import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import Marquee from "react-fast-marquee";
import img1 from "../../../assets/University-Images/Germany/1.webp";
import img2 from "../../../assets/University-Images/Germany/2.webp";
import img3 from "../../../assets/University-Images/Germany/3.webp";
import img4 from "../../../assets/University-Images/Germany/4.webp";
import img5 from "../../../assets/University-Images/Germany/5.webp";
import img6 from "../../../assets/University-Images/Germany/6.webp";
import img7 from "../../../assets/University-Images/Germany/7.webp";
import img8 from "../../../assets/University-Images/Germany/8.webp";
import img9 from "../../../assets/University-Images/Germany/9.webp";
import img10 from "../../../assets/University-Images/Germany/10.webp";
import img11 from "../../../assets/University-Images/Germany/11.webp";
import img12 from "../../../assets/University-Images/Germany/12.webp";
import img13 from "../../../assets/University-Images/Germany/13.webp";
import img14 from "../../../assets/University-Images/Germany/14.webp";
import img15 from "../../../assets/University-Images/Germany/15.webp";
import img16 from "../../../assets/University-Images/Germany/16.webp";
import img17 from "../../../assets/University-Images/Germany/17.webp";

const universityData = [
  {
    key:1,
    img: img1,
    title: "EU Business School",
    ielts: "6.5",
    toefl: "89",
  },
  {
    key:2,
    img: img2,
    title: "University of Europe for Applied Sciences",
    ielts: "5.5",
    toefl: "72",

  },
  {
    key:3,
    img: img3,
    title: "IU of Applied Sciences",
    ielts: "6.0",
    toefl: "80",
  },
  {
    key:4,
    img: img4,
    title: "SRH Berlin University of Applied Sciences",
    ielts: "6.0",
    toefl: "74",
  },
  {
    key:5,
    img: img5,
    title: "Gisma University of Applied Sciences",
    ielts: "6.5",
    toefl: "80",
  },
  {
    key:6,
    img: img6,
    title: "Steinbies University",
    ielts: "6.0",
    toefl: "80",
  },
  {
    key:7,
    img: img7,
    title: "Berlin of School Business & Inovation",
    ielts: "6.0",
    toefl: "80",
  },
  {
    key:8,
    img: img13,
    title: "New European College",
    ielts: "6.0",
    toefl: "80",
  },
  {
    key:9,
    img: img8,
    title: "Macromedia University of Applied Sciences",
    ielts: "6.0",
    toefl: "72",
  },
  {
    key:10,
    img: img11,
    title: "Fresenius University of Applied Sciences",
    ielts: "6.0",
    toefl: "70",
  },
  {
    key:11,
    img: img15,
    title: "DIU(Dresden International University)",
    ielts: "6.0",
    toefl: "79",
  },
  {
    key:12,
    img: img12,
    title: "Arden University",
    ielts: "6.0",
    toefl: "60",
  },
  {
    key:13,
    img: img9,
    title: "Schiller University- Germany",
    ielts: "6.5",
    toefl: "89",
  },
  {
    key:14,
    img: img10,
    title: "ISM (International School of Management)",
    ielts: "6.0",
    toefl: "80",
  },
  {
    key:15,
    img: img17,
    title: "SRH University Hamburg",
    ielts: "6.5",
    toefl: "87",
  },
  {
    key:16,
    img: img14,
    title: "SRH University Heildeberg",
    ielts: "6.5",
    toefl: "80",
  },
  {
    key:17,
    img: img16,
    title: "SRH University Leipzig",
    ielts: "6.5",
    toefl: "87",
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
                <img src={item.img} alt="University" />
              </div>
              <div className="Concordia-container">
                <div className="ConcordiaCard">
                  <p>{item.title}</p>
                  <ArrowForwardIcon className="rightArrowB" />
                </div>
                <div className="ConcordiaCard Ietes">
                  <div>
                    <h2>{item.ielts}</h2>
                    <p>IELTS</p>
                  </div>
                  <div>
                    <h2>{item.toefl}</h2>
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
