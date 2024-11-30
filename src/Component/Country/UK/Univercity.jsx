import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import Marquee from "react-fast-marquee";
import img1 from "../../../assets/University-Images/UK/1.webp";
import img2 from "../../../assets/University-Images/UK/2.webp";
import img3 from "../../../assets/University-Images/UK/3.webp";
import img4 from "../../../assets/University-Images/UK/4.webp";
import img5 from "../../../assets/University-Images/UK/5.webp";
import img6 from "../../../assets/University-Images/UK/6.webp";
import img7 from "../../../assets/University-Images/UK/7.webp";
import img8 from "../../../assets/University-Images/UK/8.webp";
import img9 from "../../../assets/University-Images/UK/9.webp";
import img10 from "../../../assets/University-Images/UK/10.webp";
import img11 from "../../../assets/University-Images/UK/11.webp";
import img12 from "../../../assets/University-Images/UK/12.webp";
import img13 from "../../../assets/University-Images/UK/13.webp";
import img14 from "../../../assets/University-Images/UK/14.webp";
import img15 from "../../../assets/University-Images/UK/15.webp";
import img16 from "../../../assets/University-Images/UK/16.webp";
import img17 from "../../../assets/University-Images/UK/17.webp";
import img18 from "../../../assets/University-Images/UK/18.webp";
import img19 from "../../../assets/University-Images/UK/19.webp";
import img20 from "../../../assets/University-Images/UK/20.webp";
import img21 from "../../../assets/University-Images/UK/21.webp";
import img22 from "../../../assets/University-Images/UK/22.webp";

const universityData = [
  {
    id:1,
    img: img1,
    universityName: "Abertay University",
    UG: "65%",
    GapAccepted: "3",
  },
  {
    id:2,
    img: img2,
    universityName: "Bradley University",
    UG: "75%",
    GapAccepted: "0",
  },
  {
    id:3,
    img: img3,
    universityName: "Edinburgh Napier University",
    UG: "60%",
    GapAccepted: "2",
  },
  {
    id:4,
    img: img4,
    universityName: "Prifysgol wrecsam wrexham University",
    UG: "60%",
    GapAccepted: "2",
  },
  {
    id:5,
    img: img5,
    universityName: "University for the Creative Arts",
    UG: "60%",
    GapAccepted: "2",
  },
  {
    id:6,
    img: img6,
    universityName: "Heroit Watt Univrsity",
    UG: "65%",
    GapAccepted: "3",
  },
  {
    id: 7,
    img: img7,
    universityName: "London South Bank University",
    UG: "65%",
    GapAccepted: "0",
  },
  {
    id: 8,
    img: img8,
    universityName: "Malvern House London",
    UG: "60%",
    GapAccepted: "5",
  },
  {
    id: 9,
    img: img9,
    universityName: "Middlesex University",
    UG: "60%",
    GapAccepted: "3",
  },
  {
    id: 10,
    img: img10,
    universityName: "Northumbria University Newcastle",
    UG: "65%",
    GapAccepted: "2",
  },
  {
    id: 11,
    img: img11,
    universityName: "Prifysgol Cymru Y Drindod Dewi Sant University",
    UG: "70%",
    GapAccepted: "2",
  },
  {
    id: 12,
    img: img12,
    universityName: "Royal Holloway University of London",
    UG: "65%",
    GapAccepted: "2",
  },
  {
    id: 13,
    img: img13,
    universityName: "SaintPeter's University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 14,
    img: img14,
    universityName: "University of College Brimingham",
    UG: "60%",
    GapAccepted: "2",
  },
  {
    id: 15,
    img: img16,
    universityName: "University of Wolverhampton",
    UG: "68%",
    GapAccepted: "3",
  },
  {
    id: 16,
    img: img17,
    universityName: "University of Gloucestershire",
    UG: "65%",
    GapAccepted: "2",
  },
  {
    id: 17,
    img: img18,
    universityName: "University of Hertfordshire",
    UG: "60%",
    GapAccepted: "3",
  },
  {
    id: 18,
    img: img19,
    universityName: "University of East London",
    UG: "60%",
    GapAccepted: "3",
  },
  {
    id: 19,
    img: img20,
    universityName: "University of West London",
    UG: "60%",
    GapAccepted: "2",
  },
  {
    id: 20,
    img: img21,
    universityName: "University of the West of England",
    UG: "65%",
    GapAccepted: "10",
  },
  {
    id: 21,
    img: img22,
    universityName: "York st John University",
    UG: "65%",
    GapAccepted: "2",
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
                <img src={item.img} alt="Universities" />
              </div>
              <div className="Concordia-container">
                <div className="ConcordiaCard">
                  <p>{item.universityName}</p> 
                  <ArrowForwardIcon className="rightArrowB" />
                </div>
                <div className="ConcordiaCard Ietels">
                  <div>
                    <p>UG percentage</p>
                    <h2>{item.UG}</h2>
                  </div>
                  <div>
                    <p>GAP Acceptance</p>
                    <h2>{item.GapAccepted} <span>Years</span></h2>
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
