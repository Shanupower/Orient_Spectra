import Img1 from "../../../assets/Country/conc.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import { Univercitydata } from "../../../Container/data/Universities";
import Marquee from "react-fast-marquee";


const universityData = [
  {
    id:1,
    img: "https://strapi.orientspectra.com/uploads/LOGO_ESSCA_VERTICAL_01_1_b788331589.png",
    universityName: "ESSCA Business School",
    ielts: "6.5",
    tofel: "92",
    backlogs: "0",
  },
  {
    id:2,
    img: "https://strapi.orientspectra.com/uploads/images_0a82f55b7a.png",
    universityName: "Avaincity University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:3,
    img: "https://strapi.orientspectra.com/uploads/images_1_5a5abf792e.png",
    universityName: "Paris School of Business",
    ielts: "6.0",
    tofel: "80",
    backlogs: "0",
  },
  {
    id:4,
    img: "https://strapi.orientspectra.com/uploads/NEOMA_LOGOTYPE_RVB_dc7f3d584f.jpg",
    universityName: "NEOMA Business School",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:5,
    img: "https://strapi.orientspectra.com/uploads/inseec_msc_and_mba_logo_vector_2d2825d28f.png",
    universityName: "INSEEC Business School",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id:6,
    img: "https://strapi.orientspectra.com/uploads/Logo_icn_business_school_dfbcdd18e6.png",
    universityName: "ICN Business School",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 7,
    img: "https://strapi.orientspectra.com/uploads/Rennes_School_of_Business_Unframed_Thinking_ccbeeb365c.jpg",
    universityName: "Rennes School of Business",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 8,
    img: "https://strapi.orientspectra.com/uploads/EM_Normandie_Logo_c4acc3543b.jpg",
    universityName: "EM Normandie Business School",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 9,
    img: "https://strapi.orientspectra.com/uploads/ESCE_53bb5633f9.png",
    universityName: "ESCE",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 10,
    img: "https://strapi.orientspectra.com/uploads/ECE_LOGO_20240226114033_ef71cfffe5.jpg",
    universityName: "ECE",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 11,
    img: "https://strapi.orientspectra.com/uploads/IUM_logo_849a1b2cdb.jpg",
    universityName: "IUM",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 12,
    img: "https://strapi.orientspectra.com/uploads/supdepub_logo_88ee806908.png",
    universityName: "SupdePub University",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 13,
    img: "https://strapi.orientspectra.com/uploads/logo_6f60eed507.png",
    universityName: "CREA OMENS Education",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 14,
    img: "https://strapi.orientspectra.com/uploads/inseec_msc_and_mba_logo_vector_2d2825d28f.png",
    universityName: "INSEEC MSc & MBA",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 15,
    img: "https://strapi.orientspectra.com/uploads/HEIP_a62b9b1544.png",
    universityName: "Hautes Etudes Internationales & Politiques",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 16,
    img: "https://strapi.orientspectra.com/uploads/esamalumni_6a827c99cc.png",
    universityName: "ESAM Management Finance & Law",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 17,
    img: "https://strapi.orientspectra.com/uploads/14044818275b59d00e941fb_3c104a7b37.jpg",
    universityName: "American Business School",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
  },
  {
    id: 18,
    img: "https://strapi.orientspectra.com/uploads/ICD_Business_School_logo_1_1d14172aaf.png",
    universityName: "ICD Business School",
    ielts: "6.5",
    tofel: "79",
    backlogs: "0",
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
