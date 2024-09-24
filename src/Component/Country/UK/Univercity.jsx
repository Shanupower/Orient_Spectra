import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import Marquee from "react-fast-marquee";

const universityData = [
  {
    id:1,
    img: "https://strapi.orientspectra.com/uploads/1_6138480f08.webp",
    universityName: "Abertay University",
    UG: "65%",
    GapAccepted: "3",
  },
  {
    id:2,
    img: "https://strapi.orientspectra.com/uploads/2_d0f68ec276.webp",
    universityName: "Bradley University",
    UG: "75%",
    GapAccepted: "0",
  },
  {
    id:3,
    img: "https://strapi.orientspectra.com/uploads/3_347d1f2c02.webp",
    universityName: "Edinburgh Napier University",
    UG: "60%",
    GapAccepted: "2",
  },
  {
    id:4,
    img: "https://strapi.orientspectra.com/uploads/4_d5a5c04af5.webp",
    universityName: "Prifysgol wrecsam wrexham University",
    UG: "60%",
    GapAccepted: "2",
  },
  {
    id:5,
    img: "https://strapi.orientspectra.com/uploads/5_087f2aff35.webp",
    universityName: "University for the Creative Arts",
    UG: "60%",
    GapAccepted: "2",
  },
  {
    id:6,
    img: "https://strapi.orientspectra.com/uploads/6_ed0f9c0444.webp",
    universityName: "Heroit Watt Univrsity",
    UG: "65%",
    GapAccepted: "3",
  },
  {
    id: 7,
    img: "https://strapi.orientspectra.com/uploads/7_6a79b25866.webp",
    universityName: "London South Bank University",
    UG: "65%",
    GapAccepted: "0",
  },
  {
    id: 8,
    img: "https://strapi.orientspectra.com/uploads/8_45019bf872.webp",
    universityName: "Malvern House London",
    UG: "60%",
    GapAccepted: "5",
  },
  {
    id: 9,
    img: "https://strapi.orientspectra.com/uploads/9_23357945cf.webp",
    universityName: "Middlesex University",
    UG: "60%",
    GapAccepted: "3",
  },
  {
    id: 10,
    img: "https://strapi.orientspectra.com/uploads/10_a73aebfada.webp",
    universityName: "Northumbria University Newcastle",
    UG: "65%",
    GapAccepted: "2",
  },
  {
    id: 11,
    img: "https://strapi.orientspectra.com/uploads/11_9020889701.webp",
    universityName: "Prifysgol Cymru Y Drindod Dewi Sant University",
    UG: "70%",
    GapAccepted: "2",
  },
  {
    id: 12,
    img: "https://strapi.orientspectra.com/uploads/12_3fde036b77.webp",
    universityName: "Royal Holloway University of London",
    UG: "65%",
    GapAccepted: "2",
  },
  {
    id: 13,
    img: "https://strapi.orientspectra.com/uploads/13_447ed85804.webp",
    universityName: "SaintPeter's University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 14,
    img: "https://strapi.orientspectra.com/uploads/14_1ad92941fc.webp",
    universityName: "University of College Brimingham",
    UG: "60%",
    GapAccepted: "2",
  },
  {
    id: 15,
    img: "https://strapi.orientspectra.com/uploads/16_3d3cc82a92.webp",
    universityName: "University of Wolverhampton",
    UG: "68%",
    GapAccepted: "3",
  },
  {
    id: 16,
    img: "https://strapi.orientspectra.com/uploads/17_f389eb9793.webp",
    universityName: "University of Gloucestershire",
    UG: "65%",
    GapAccepted: "2",
  },
  {
    id: 17,
    img: "https://strapi.orientspectra.com/uploads/18_d6f55d3a07.webp",
    universityName: "University of Hertfordshire",
    UG: "60%",
    GapAccepted: "3",
  },
  {
    id: 18,
    img: "https://strapi.orientspectra.com/uploads/19_bd7397c9ee.webp",
    universityName: "University of East London",
    UG: "60%",
    GapAccepted: "3",
  },
  {
    id: 19,
    img: "https://strapi.orientspectra.com/uploads/20_4201ba4e6a.webp",
    universityName: "University of West London",
    UG: "60%",
    GapAccepted: "2",
  },
  {
    id: 20,
    img: "https://strapi.orientspectra.com/uploads/21_22c17d051f.webp",
    universityName: "University of the West of England",
    UG: "65%",
    GapAccepted: "10",
  },
  {
    id: 21,
    img: "https://strapi.orientspectra.com/uploads/22_e6bf53e162.webp",
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
                <img src={item.img} alt="Universities" loading="lazy" />
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
