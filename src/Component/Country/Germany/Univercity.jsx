import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Country.css";
import Marquee from "react-fast-marquee";

const universityData = [
  {
    key:1,
    img: "https://strapi.orientspectra.com/uploads/1_61d4a89cef.webp",
    title: "EU Business School",
    ielts: "6.5",
    toefl: "89",
  },
  {
    key:2,
    img: "https://strapi.orientspectra.com/uploads/2_a6101c1a73.webp",
    title: "University of Europe for Applied Sciences",
    ielts: "5.5",
    toefl: "72",

  },
  {
    key:3,
    img: "https://strapi.orientspectra.com/uploads/3_35008e0c54.webp",
    title: "IU of Applied Sciences",
    ielts: "6.0",
    toefl: "80",
  },
  {
    key:4,
    img: "https://strapi.orientspectra.com/uploads/4_ab74fddb01.webp",
    title: "SRH Berlin University of Applied Sciences",
    ielts: "6.0",
    toefl: "74",
  },
  {
    key:5,
    img: "https://strapi.orientspectra.com/uploads/5_e70654ef5b.webp",
    title: "Gisma University of Applied Sciences",
    ielts: "6.5",
    toefl: "80",
  },
  {
    key:6,
    img: "https://strapi.orientspectra.com/uploads/6_67f8497b5d.webp",
    title: "Steinbies University",
    ielts: "6.0",
    toefl: "80",
  },
  {
    key:7,
    img: "https://strapi.orientspectra.com/uploads/7_ebd0f3ee88.webp",
    title: "Berlin of School Business & Inovation",
    ielts: "6.0",
    toefl: "80",
  },
  {
    key:8,
    img: "https://strapi.orientspectra.com/uploads/13_52c361d909.webp",
    title: "New European College",
    ielts: "6.0",
    toefl: "80",
  },
  {
    key:9,
    img: "https://strapi.orientspectra.com/uploads/8_b4289a68a8.webp",
    title: "Macromedia University of Applied Sciences",
    ielts: "6.0",
    toefl: "72",
  },
  {
    key:10,
    img: "https://strapi.orientspectra.com/uploads/11_4ebffb1e87.webp",
    title: "Fresenius University of Applied Sciences",
    ielts: "6.0",
    toefl: "70",
  },
  {
    key:11,
    img: "https://strapi.orientspectra.com/uploads/thumbnail_channels4_profile_removebg_preview_333e855e4d_ad670dbaf2.webp",
    title: "DIU(Dresden International University)",
    ielts: "6.0",
    toefl: "79",
  },
  {
    key:12,
    img: "https://strapi.orientspectra.com/uploads/12_7916183ad3.webp",
    title: "Arden University",
    ielts: "6.0",
    toefl: "60",
  },
  {
    key:13,
    img: "https://strapi.orientspectra.com/uploads/9_159284de64.webp",
    title: "Schiller University- Germany",
    ielts: "6.5",
    toefl: "89",
  },
  {
    key:14,
    img: "https://strapi.orientspectra.com/uploads/10_fa24113b48.webp",
    title: "ISM (International School of Management)",
    ielts: "6.0",
    toefl: "80",
  },
  {
    key:15,
    img: "https://strapi.orientspectra.com/uploads/SRH_University_Hamburg_20d9953426.jpg",
    title: "SRH University Hamburg",
    ielts: "6.5",
    toefl: "87",
  },
  {
    key:16,
    img: "https://strapi.orientspectra.com/uploads/SRH_University_Heildeberg_45db6646b1.png",
    title: "SRH University Heildeberg",
    ielts: "6.5",
    toefl: "80",
  },
  {
    key:17,
    img: "https://strapi.orientspectra.com/uploads/SRH_University_Hamm_89f434c67d.jpg",
    title: "SRH University Hamm",
    ielts: "6.5",
    toefl: "80",
  },
  {
    key:18,
    img: "https://strapi.orientspectra.com/uploads/SRH_CAMPUS_LEIPZIG_9b2622fe26.png",
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
