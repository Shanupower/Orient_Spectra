import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import Marquee from "react-fast-marquee";

const universityData = [
  {
    id:1,
    img: "https://strapi.orientspectra.com/uploads/1_6138480f08.webp",
    universityName: "Abertay University",
    ielts: "6.5",
    tofel: "92",
    backlogs: "0",
  },
  {
    id:2,
    img: "https://strapi.orientspectra.com/uploads/2_d0f68ec276.webp",
    universityName: "Bradley University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:3,
    img: "https://strapi.orientspectra.com/uploads/3_347d1f2c02.webp",
    universityName: "Edinburgh Napier University",
    ielts: "6.0",
    tofel: "80",
    backlogs: "0",
  },
  {
    id:4,
    img: "https://strapi.orientspectra.com/uploads/4_d5a5c04af5.webp",
    universityName: "Prifysgol wrecsam wrexham University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:5,
    img: "https://strapi.orientspectra.com/uploads/5_087f2aff35.webp",
    universityName: "University for the Creative Arts",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:6,
    img: "https://strapi.orientspectra.com/uploads/6_ed0f9c0444.webp",
    universityName: "Heroit Watt Univrsity",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 7,
    img: "https://strapi.orientspectra.com/uploads/7_6a79b25866.webp",
    universityName: "London South Bank University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 8,
    img: "https://strapi.orientspectra.com/uploads/8_45019bf872.webp",
    universityName: "Malvern House London",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 9,
    img: "https://strapi.orientspectra.com/uploads/9_23357945cf.webp",
    universityName: "Middlesex University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 10,
    img: "https://strapi.orientspectra.com/uploads/10_a73aebfada.webp",
    universityName: "Northumbria University Newcastle",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 11,
    img: "https://strapi.orientspectra.com/uploads/11_9020889701.webp",
    universityName: "Prifysgol Cymru Y Drindod Dewi Sant University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 12,
    img: "https://strapi.orientspectra.com/uploads/12_3fde036b77.webp",
    universityName: "Royal Holloway University of London",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
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
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 15,
    img: "https://strapi.orientspectra.com/uploads/15_b625843f95.webp",
    universityName: "Study Group",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 16,
    img: "https://strapi.orientspectra.com/uploads/16_3d3cc82a92.webp",
    universityName: "University of Wolverhampton",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 17,
    img: "https://strapi.orientspectra.com/uploads/17_f389eb9793.webp",
    universityName: "University of Gloucestershire",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 18,
    img: "https://strapi.orientspectra.com/uploads/18_d6f55d3a07.webp",
    universityName: "University of Hertfordshire",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 19,
    img: "https://strapi.orientspectra.com/uploads/19_bd7397c9ee.webp",
    universityName: "University of East London",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 20,
    img: "https://strapi.orientspectra.com/uploads/20_4201ba4e6a.webp",
    universityName: "University of West London",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 21,
    img: "https://strapi.orientspectra.com/uploads/21_22c17d051f.webp",
    universityName: "University of the West of England",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 22,
    img: "https://strapi.orientspectra.com/uploads/22_e6bf53e162.webp",
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
                <img src={item.img} alt="Universities" loading="lazy" />
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
