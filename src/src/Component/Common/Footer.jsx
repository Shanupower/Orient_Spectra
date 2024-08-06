import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../../assets/Layer_1.png";
import QrLink from "../../assets/Layer_1 (1).png";

const Footer = () => {
  return (
    <div className="footerContrainer">
      <div className="foterTopContaner">
        <div className="leftSide ">
          <Link className="Link_route leftSideItem">Study Overseas</Link>
          <Link className="Link_route leftSideItem">About Us</Link>
          <Link className="Link_route leftSideItem">What we do</Link>
          <Link className="Link_route leftSideItem">Our Branches</Link>
          <Link className="Link_route leftSideItem">Blogs</Link>
          <Link className="Link_route leftSideItem">Daily News</Link>
        </div>
        <div className="rightSide">
          <p>hello@orientspectra.com</p>
        </div>
      </div>
      <div className="footerCenterContainer">
        <div className="footercenterleftContent">
          <div className="centerCard">
            <h3>Kothapet</h3>
            <p>
              4th floor, Baheti Spectrum, National Highway 65, Polkampally,
              Margadarshi Colony, Kothapet, Hyderabad, Telangana 500035
            </p>
          </div>
          <div className="centerCard">
            <h3>Himayath Nagar</h3>
            <p>
              1st Floor, Sanatana Eternal, Himayatnagar Rd, Gagan Mahal, Basheer
              Bagh, Hyderabad, Telangana, 500029
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

        <div className="footercenterRightContent">
          <Link
            to="https://www.facebook.com/orient.spectra.1"
            className="Link_route socialMedia"
          >
            Facebook
          </Link>
          <Link
            to="https://www.instagram.com/orient.spectra.1?igsh=dHpkZzV1YjdyaTMz"
            className="Link_route socialMedia"
          >
            Instagram
          </Link>

          <Link className="Link_route socialMedia">YouTube</Link>
          <Link
            to="https://www.linkedin.com/company/orientspectra/"
            className="Link_route socialMedia"
          >
            LinkedIn
          </Link>
        </div>
      </div>
      <div className="LinkContainerFooter">
        <div className="leftSide2">
          <Link className="Link_route leftSideItem2">Study Overseas</Link>
          <Link className="Link_route leftSideItem2">About Us</Link>
          <Link className="Link_route leftSideItem2">What we do</Link>
          <Link className="Link_route leftSideItem2">Our Branches</Link>
          <Link className="Link_route leftSideItem2">Blogs</Link>
          <Link className="Link_route leftSideItem2">Daily News</Link>
        </div>

        <div className="footercenterRightContent2">
          <Link
            to="https://www.facebook.com/orient.spectra.1"
            className="Link_route socialMedia"
          >
            Facebook
          </Link>
          <Link
            to="https://www.instagram.com/orient.spectra.1?igsh=dHpkZzV1YjdyaTMz"
            className="Link_route socialMedia"
          >
            Instagram
          </Link>

          <Link className="Link_route socialMedia">YouTube</Link>
          <Link
            to="https://www.linkedin.com/company/orientspectra/"
            className="Link_route socialMedia"
          >
            LinkedIn
          </Link>
        </div>
      </div>

      <div className="componnylogo_container">
        <div className="logoImage">
          <img src={Logo} alt="" />
        </div>
        <div className="qrImage">
          <img src={QrLink} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
