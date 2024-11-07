import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../../assets/Home_page/Logo_Footer.webp";
import QrLink from "../../assets/Home_page/QR.webp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useMediaQuery } from "@mui/material";
const Footer = () => {
  const isMd = useMediaQuery("(max-width:1024px)");

  return (
    <div className="footerContrainer">
      <div className="componnylogo_container">
        <div className="logoImage">
          <img src="https://strapi.orientspectra.com/uploads/Layer_1_ff782153b5.webp" alt="Orient Spectra" loading="lazy"/>
          {/* <img src={Logo} alt="Orient Spectra" loading="lazy"/> */}
          <div className="footercenterRightContent">
            <Link
              to="https://www.facebook.com/orient.spectra.1"
              target="_blank"
              className="Link_route socialMedia"
            >
              <FacebookOutlinedIcon style={{ fontSize: isMd ? 25 : 35 }} />
            </Link>
            <Link
              to="https://www.instagram.com/orient.spectra.1?igsh=dHpkZzV1YjdyaTMz"
              target="_blank"
              className="Link_route socialMedia"
            >
              <InstagramIcon style={{ fontSize: isMd ? 25 : 35 }} />
            </Link>

            <Link
              to="https://www.youtube.com/@orientspectra1729"
              target="_blank"
              className="Link_route socialMedia"
            >
              <YouTubeIcon style={{ fontSize: isMd ? 25 : 35 }} />
            </Link>

            <Link
              to="https://www.linkedin.com/company/orientspectra/"
              target="_blank"
              className="Link_route socialMedia"
            >
              <LinkedInIcon style={{ fontSize: isMd ? 25 : 35 }} />
            </Link>
          </div>
        </div>
        <div className="qrImage">
          {/* <img
            src="https://strapi.orientspectra.com/uploads/Watsapp_Qr_9ad1331dd0_2ff73ee08e.webp"
            alt="WhatsApp QR" loading="lazy"
          /> */}
           <img
            src={QrLink}
            alt="WhatsApp QR" loading="lazy"
          />
          <p>+91 9000456765</p>
          <p>info@orientspectra.com</p>
        </div>
      </div>

      <div className="footerCenterContainer">
        <div className="footercenterleftContent">
          <div className="centerCard">
            <h3>Himayatnagar - HO</h3>
            <p>
              1st Floor, Sanatana Eternal, Himayatnagar Rd, Gagan Mahal, Basheer
              Bagh, Hyderabad, Telangana, 500029
            </p>
          </div>
          <div className="centerCard">
            <h3>Kothapet</h3>
            <p>
              4th floor, Baheti Spectrum, National Highway 65, Polkampally,
              Margadarshi Colony, Kothapet, Hyderabad, Telangana 500035
            </p>
          </div>

          <div className="centerCard">
            <h3>Kukatpally</h3>
            <p>
              502, 5th floor, Manjeera Majestic Commercial, JNTU Rd, KPHB,
              Kukatpally, Hyderabad, Telangana, 500072
            </p>
          </div>
        </div>
      </div>
      <div className="LinkContainerFooter">
        <div className="leftSide2">
          <Link className="Link_route leftSideItem2">Countries</Link>
          <Link className="Link_route leftSideItem2">About Us</Link>
          <Link className="Link_route leftSideItem2">Our Branches</Link>
          <Link className="Link_route leftSideItem2">Blogs</Link>
          <Link className="Link_route leftSideItem2">Daily News</Link>
          <Link to="privacy-policy" className="Link_route leftSideItem2">Privacy  Policy</Link>
        </div>

        <div className="footercenterRightContent2">
          <Link
            to="https://www.facebook.com/orient.spectra.1"
            target="_blank"
            className="Link_route socialMedia"
          >
            <FacebookOutlinedIcon />
          </Link>
          <Link
            to="https://www.instagram.com/orient.spectra.1?igsh=dHpkZzV1YjdyaTMz"
            target="_blank"
            className="Link_route socialMedia"
          >
            <InstagramIcon />
          </Link>

          <Link className="Link_route socialMedia">
            <YouTubeIcon />
          </Link>
          <Link
            to="https://www.linkedin.com/company/orientspectra/"
            target="_blank"
            className="Link_route socialMedia"
          >
            <LinkedInIcon />
          </Link>
        </div>
      </div>

      <div className="foterTopContaner">
        <div className="leftSide ">
          <Link to="/countries" className="Link_route leftSideItem">
            Countries
          </Link>
          <Link to="/about" className="Link_route leftSideItem">
            About Us
          </Link>
          {/* <Link className="Link_route leftSideItem">What we do</Link> */}
          <Link className="Link_route leftSideItem">Our Branches</Link>
          <Link to="/blogs" className="Link_route leftSideItem">
            Blogs
          </Link>
          <Link to="/news-and-pr" className="Link_route leftSideItem">
            Daily News
          </Link>
          <Link to="/privacy-policy" className="Link_route leftSideItem">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
