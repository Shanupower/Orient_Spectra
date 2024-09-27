import Img1 from "../../../assets/Country/conc.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import { Univercitydata } from "../../../Container/data/Universities";
import Marquee from "react-fast-marquee";


const universityData = [
  {
    id:1,
    img: "https://strapi.orientspectra.com/uploads/10_ee15e54a4a.webp",
    universityName: "ESSCA Business School",
    ielts: "6.0",
    tofel: "85",
  },
  {
    id:2,
    img: "https://strapi.orientspectra.com/uploads/11_76e57375f8.webp",
    universityName: "Avaincity University",
    ielts: "6.0",
    tofel: "83",
  },
  {
    id:3,
    img: "https://strapi.orientspectra.com/uploads/14_d712099774.webp",
    universityName: "Paris School of Business",
    ielts: "5.5",
    tofel: "70",
  },
  {
    id:4,
    img: "https://strapi.orientspectra.com/uploads/13_1_420208047d.webp",
    universityName: "NEOMA Business School",
    ielts: "6.0",
    tofel: "83",
  },
  {
    id:5,
    img: "https://strapi.orientspectra.com/uploads/6_66f654a0645e6_da3f07d776.webp",
    universityName: "INSEEC Business School",
    ielts: "6.5",
    tofel: "90",
  },
  {
    id:6,
    img: "https://strapi.orientspectra.com/uploads/Logo_icn_business_school_dfbcdd18e6.png",
    universityName: "ICN Business School",
    ielts: "6.5",
    tofel: "79",
  },
  {
    id: 7,
    img: "https://strapi.orientspectra.com/uploads/15_02e8ce5c4d.webp",
    universityName: "Rennes School of Business",
    ielts: "6.5",
    tofel: "80",
  },
  {
    id: 8,
    img: "https://strapi.orientspectra.com/uploads/EM_Normandie_Logo_c4acc3543b.jpg",
    universityName: "EM Normandie Business School",
    ielts: "6.5",
    tofel: "79",
  },
  {
    id: 9,
    img: "https://strapi.orientspectra.com/uploads/ESCE_53bb5633f9.png",
    universityName: "ESCE International Business School",
    ielts: "6.5",
    tofel: "80",
  },
  {
    id: 10,
    img: "https://strapi.orientspectra.com/uploads/ECE_LOGO_20240226114033_ef71cfffe5.jpg",
    universityName: "ECE",
    ielts: "6.0",
    tofel: "83",
  },
  {
    id: 11,
    img: "https://strapi.orientspectra.com/uploads/9_711b8417a2.webp",
    universityName: "IUM",
    ielts: "6.0",
    tofel: "79",
  },
  {
    id: 12,
    img: "https://strapi.orientspectra.com/uploads/16_327f848301.webp",
    universityName: "SupdePub University",
    ielts: "6.0",
    tofel: "83",
  },
  {
    id: 13,
    img: "https://strapi.orientspectra.com/uploads/2_66f6549ed3ea7_82087653df.webp",
    universityName: "CREA OMENS Education",
    ielts: "6.5",
    tofel: "80",
  },
  {
    id: 15,
    img: "https://strapi.orientspectra.com/uploads/HEIP_a62b9b1544.png",
    universityName: "HEIP",
    ielts: "6.5",
    tofel: "90",
  },
  {
    id: 16,
    img: "https://strapi.orientspectra.com/uploads/3_66f6549f8c3a7_21cec90e74.webp",
    universityName: "ESAM Management Finance & Law",
    ielts: "6.5",
    tofel: "80",
  },
  {
    id: 17,
    img: "https://strapi.orientspectra.com/uploads/1_66f6549ec745a_882f32965b.webp",
    universityName: "American Business School",
    ielts: "6.5",
    tofel: "80",
  },
  {
    id: 18,
    img: "https://strapi.orientspectra.com/uploads/4_66f6549fa1160_5553604d67.webp",
    universityName: "ICD Business School",
    ielts: "6.5",
    tofel: "80",
  },
  {
    id: 19,
    img: "https://strapi.orientspectra.com/uploads/Logo_MBS_Quadri_142x150_jpg_bd6fb61985.webp",
    universityName: "Montpellier Business School",
    ielts: "6.0",
    tofel: "88",
  },
  {
    id: 20,
    img: "https://strapi.orientspectra.com/uploads/8_66f654a1384ee_87bfc3fe11.webp",
    universityName: "ISTEC Business School",
    ielts: "6.0",
    tofel: "83",
  },
  {
    id: 21,
    img: "https://strapi.orientspectra.com/uploads/12_f6e9dde4d9.webp",
    universityName: "EMLV",
    ielts: "6.0",
    tofel: "80",
  },
  {
    id: 22,
    img: "https://strapi.orientspectra.com/uploads/CEDS_d6036483cb.png",
    universityName: "CEDS",
    ielts: "6.5",
    tofel: "90",
  },
  {
    id: 23,
    img: "https://strapi.orientspectra.com/uploads/7_66f654a0cdb56_c02a5cb5f8.webp",
    universityName: "IPI - Paris",
    ielts: "6.0",
    tofel: "83",
  },
  {
    id: 24,
    img: "https://strapi.orientspectra.com/uploads/5_66f654a03a363_4c7b9702d1.webp",
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
