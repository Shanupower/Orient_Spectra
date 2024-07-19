import Logo from "../../assets/Logo10.png";
import Logo2 from "../../assets/Logo2.png";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Drawer } from "antd";
import { Menu } from "antd";
import Us from "../../assets/Country/Flag/Group 25.png";
import Canada from "../../assets/Country/Flag/Group 23.png";
import Australia from "../../assets/Country/Flag/Group 28.png";
import Uk from "../../assets/Country/Flag/Group 30.png";
import Dubai from "../../assets/Country/Flag/Group 39.png";
import Sweden from "../../assets/Country/Flag/Group 40.png";
import Poland from "../../assets/Country/Flag/Group 41.png";
import Switzerland from "../../assets/Country/Flag/Group 42.png";
import Malta from "../../assets/Country/Flag/Malta.png";
import Singapore from "../../assets/Country/Flag/Singapore.png";
import Ireland from "../../assets/Country/Flag/Ireland.png";
import Germany from "../../assets/Country/Flag/Germany.png";
import France from "../../assets/Country/Flag/France.png";
import AccessibleIcon from "@mui/icons-material/Accessible";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import SportsIcon from "@mui/icons-material/Sports";
import "./index.css";

const items = [
  {
    label: (
      <a href="/country/Usa">
        <div className="countryCard">
          <div className="flagCard">
            <img src={Us} alt="" />
          </div>
          <p>United States</p>
        </div>
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a href="/country/Canada">
        <div className="countryCard">
          <div className="flagCard">
            <img src={Canada} alt="" />
          </div>
          <p>Canada</p>
        </div>
      </a>
    ),
    key: "1",
  },

  {
    label: (
      <a href="/country/UK">
        <div className="countryCard">
          <div className="flagCard">
            <img src={Uk} alt="" />
          </div>
          <p>United Kingdom</p>
        </div>
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a href="/country/Australia">
        <div className="countryCard">
          <div className="flagCard">
            <img src={Australia} alt="" />
          </div>
          <p>Australia</p>
        </div>
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a href="/country/France">
        <div className="countryCard">
          <div className="flagCard">
            <img src={France} alt="" />
          </div>
          <p>France</p>
        </div>
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a href="/country/Germany">
        <div className="countryCard">
          <div className="flagCard">
            <img src={Germany} alt="" />
          </div>
          <p>Germany</p>
        </div>
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a href="/country/Switzerland">
        <div className="countryCard">
          <div className="flagCard">
            <img src={Switzerland} alt="" />
          </div>
          <p>Switzerland</p>
        </div>
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a href="/country/Ireland">
        <div className="countryCard">
          <div className="flagCard">
            <img src={Ireland} alt="" />
          </div>
          <p>Ireland</p>
        </div>
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a href="/country/Singapore">
        <div className="countryCard">
          <div className="flagCard">
            <img src={Singapore} alt="" />
          </div>
          <p>Singapore</p>
        </div>
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a href="/country/Dubai">
        <div className="countryCard">
          <div className="flagCard">
            <img src={Dubai} alt="" />
          </div>
          <p>Dubai</p>
        </div>
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a href="/country/Sweden">
        <div className="countryCard">
          <div className="flagCard">
            <img src={Sweden} alt="" />
          </div>
          <p>Sweden</p>
        </div>
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a href="/country/Poland">
        <div className="countryCard">
          <div className="flagCard">
            <img src={Poland} alt="" />
          </div>
          <p>Poland</p>
        </div>
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a href="/country/Malta">
        <div className="countryCard">
          <div className="flagCard">
            <img src={Malta} alt="" />
          </div>
          <p>Malta</p>
        </div>
      </a>
    ),
    key: "3",
  },
];
const Menuitem = [
  {
    key: "Study Overseas",
    label: "Study Overseas",

    children: [
      {
        key: "0",
        label: (
          <Link style={{ textDecoration: "none" }} to="/study-overseas">
            Study Overseas
          </Link>
        ),
      },
      {
        key: "1",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/Usa">
            United States
          </Link>
        ),
      },
      {
        key: "2",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/Canada">
            Canada
          </Link>
        ),
      },
      {
        key: "3",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/UK">
            United Kingdom
          </Link>
        ),
      },
      {
        key: "4",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/Australia">
            Australia
          </Link>
        ),
      },
      {
        key: "5",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/France">
            France
          </Link>
        ),
      },
      {
        key: "15",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/Germany">
            Germany
          </Link>
        ),
      },
      {
        key: "61",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/Switzerland">
            Switzerland
          </Link>
        ),
      },
      {
        key: "15",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/Ireland">
            Ireland
          </Link>
        ),
      },
      {
        key: "41",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/Singapore">
            Singapore
          </Link>
        ),
      },
      {
        key: "12",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/Dubai">
            Dubai
          </Link>
        ),
      },
      {
        key: "16",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/Sweden">
            Sweden
          </Link>
        ),
      },
      {
        key: "164",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/Poland">
            Poland
          </Link>
        ),
      },
      {
        key: "132",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/Malta">
            Malta
          </Link>
        ),
      },
    ],
  },

  {
    key: "About us",
    label: (
      <Link style={{ textDecoration: "none" }} to="/about">
        About Us
      </Link>
    ),
  },
  {
    key: "What we do    ",
    label: "What we do    ",

    children: [
      {
        key: "1",
        label: (
          <Link style={{ textDecoration: "none" }} to="/Mentorship">
            Mentorship
          </Link>
        ),
      },
      {
        key: "1",
        label: (
          <Link style={{ textDecoration: "none" }} to="/FindYourCourse">
            Find Your Course
          </Link>
        ),
      },
      {
        key: "1",
        label: (
          <Link style={{ textDecoration: "none" }} to="/Coaching">
            Coaching
          </Link>
        ),
      },
    ],
  },
  {
    key: "Our branches",
    label: "Our branches",

    children: [
      {
        key: "1",
        label: (
          <Link style={{ textDecoration: "none" }} to="/Kothapet">
            Kothapet
          </Link>
        ),
      },
      {
        key: "1",
        label: (
          <Link style={{ textDecoration: "none" }} to="/#">
            Himayath Nagar
          </Link>
        ),
      },
      {
        key: "1",
        label: (
          <Link style={{ textDecoration: "none" }} to="/Kukatpally">
            Kukatpally
          </Link>
        ),
      },
    ],
  },
  {
    key: "Blogs",
    label: (
      <Link style={{ textDecoration: "none" }} to="/blogs">
        Blogs
      </Link>
    ),
  },
  {
    key: "News & PR",
    label: (
      <Link style={{ textDecoration: "none" }} to="/news-&-pr">
        News & PR
      </Link>
    ),
  },
  {
    key: "News & PR",
    label: (
      <Link style={{ textDecoration: "none" }} to="/events">
        Events
      </Link>
    ),
  },
];
const Navbar = ({
  hanldeCloseSubheader,
  openWhatwedo,
  setWhatwedoOpen,
  openbranches,
  setopenbranches,
  activeNavbar,
  setactiveNavbar,
}) => {
  const isMd = useMediaQuery("(max-width:986px)");
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };
  const handleOpenWhatWedoCard = () => {
    setWhatwedoOpen(!openWhatwedo);
    setopenbranches(false);
    setactiveNavbar(true);
  };
  const handleOpeOurBranch = () => {
    setopenbranches(!openbranches);
    setWhatwedoOpen(false);
    setactiveNavbar(true);
  };
  const handleMouseOver = () => {
    setactiveNavbar(true);
  };

  const handleMouseOut = () => {
    setactiveNavbar(false);
  };

  const hanldeCloseSubheader2 = () => {
    window.location.href = "/study-overseas";
  };
  return (
    <>
      {isMd ? (
        <div className={`navMenuResponsive `}>
          <div className="navMenuLeft">
            {" "}
            {/* <Link to="#" className="Link_route logoContainer">
              <img src={Logo} alt="" />
            </Link> */}
            <div className="logoContainer">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="navMenuRight">
            {!open && (
              <Space onClick={showDrawer} className="menuContainer">
                <MenuIcon
                  className="menuIcon"
                  sx={{ fontSize: "40px", color: "rgba(255, 115, 0, 1)" }}
                />
              </Space>
            )}

            <Drawer
              style={{
                padding: 0,
              }}
              title={
                <a href="/">
                  <img src={Logo} alt="" className="logo2Image" />
                </a>
              }
              placement={"right"}
              closable={false}
              onClose={onClose}
              open={open}
            >
              <Menu
                style={{
                  width: "100%",
                  border: "none",
                  background: "transparent",
                }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                items={Menuitem}
              />
            </Drawer>
          </div>
        </div>
      ) : (
        <div className={`navBarContainer `}>
          <div className={`navbarCard ${activeNavbar && "activeNavbar"}`}>
            <Link
              to="/"
              className="Link_route logo"
              onClick={hanldeCloseSubheader}
            >
              <img src={Logo} alt="" />
            </Link>
            <div
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={hanldeCloseSubheader2}
              className={`Link_route DailyNews ${activeNavbar && "DalyText"}`}
            >
              <Dropdown
                menu={{
                  items,
                }}
                // trigger={["click"]}
              >
                <Space>Study Overseas</Space>
              </Dropdown>
            </div>
            <div onClick={hanldeCloseSubheader}>
              <Link
                className={`Link_route DailyNews ${activeNavbar && "DalyText"}`}
                to="/about"
              >
                <Space>About us</Space>
              </Link>
            </div>

            <div>
              <div onClick={handleOpenWhatWedoCard}>
                <Link
                  className={`Link_route DailyNews ${
                    activeNavbar && "DalyText"
                  }`}
                  to={"#"}
                >
                  What we do
                </Link>
              </div>

              <div
                className={`whatwedo-dropdwon-container ${
                  openWhatwedo && "Whatwedoshow"
                }`}
              >
                <Link
                  to="/Mentorship"
                  className="whatwedo-section Link_route"
                  onClick={hanldeCloseSubheader}
                >
                  <div className=" whatweddo-card">
                    <AccessibleIcon className="AccessibleIcon" />
                    <p>Mentorship</p>
                  </div>
                  <KeyboardArrowRightIcon className="KeyboardArrowRightIcon" />
                </Link>
                <Link
                  to="/FindYourCourse"
                  className="whatwedo-section Link_route"
                  onClick={hanldeCloseSubheader}
                >
                  <div className="whatweddo-card">
                    <SchoolIcon className="AccessibleIcon" />
                    <p>Find Your Course</p>
                  </div>
                  <KeyboardArrowRightIcon className="KeyboardArrowRightIcon" />
                </Link>
                <Link
                  to="/Coaching"
                  className="whatwedo-section Link_route"
                  onClick={hanldeCloseSubheader}
                >
                  <div className="whatweddo-card">
                    <SportsIcon className="AccessibleIcon" />
                    <p>Coaching</p>
                  </div>
                  <KeyboardArrowRightIcon className="KeyboardArrowRightIcon" />
                </Link>
              </div>
            </div>

            <div>
              <div onClick={handleOpeOurBranch}>
                <Link
                  className={`Link_route DailyNews ${
                    activeNavbar && "DalyText"
                  }`}
                  to={"#"}
                >
                  Our Branches
                </Link>
              </div>

              <div
                className={` branchssshow-card ${
                  openbranches && "branchssshow"
                }`}
              >
                <div
                  className="whatwedo-section"
                  onClick={hanldeCloseSubheader}
                >
                  <h2>Kothapet</h2>

                  <div className="whatweddo-card branchCardLocation">
                    <p>
                      4th floor, Baheti Spectrum, National Highway 65,
                      Polkampally, Margadarshi Colony, Kothapet, Hyderabad,
                      Telangana 500035
                    </p>
                    <KeyboardArrowRightIcon className="KeyboardArrowRightIcon" />
                  </div>
                </div>
                <div
                  className="whatwedo-section"
                  onClick={hanldeCloseSubheader}
                >
                  <h2>Himayath Nagar</h2>

                  <div className="whatweddo-card branchCardLocation">
                    <p>
                      1st Floor, Sanatana Eternal, Himayatnagar Rd, Gagan Mahal,
                      Basheer Bagh, Hyderabad, Telangana, 500029
                    </p>
                    <KeyboardArrowRightIcon className="KeyboardArrowRightIcon" />
                  </div>
                </div>
                <div
                  className="whatwedo-section"
                  onClick={hanldeCloseSubheader}
                >
                  <h2>Kukatpally</h2>

                  <div className="whatweddo-card branchCardLocation">
                    <p>
                      502, 5th floor, Manjeera Majestic Commercial, JNTU Rd,
                      KPHB, Kukatpally, Hyderabad, Telangana, 500072
                    </p>
                    <KeyboardArrowRightIcon className="KeyboardArrowRightIcon" />
                  </div>
                </div>
              </div>
            </div>

            <div onClick={hanldeCloseSubheader}>
              <Link
                className={`Link_route DailyNews ${activeNavbar && "DalyText"}`}
                to={"/blogs"}
              >
                Blogs
              </Link>
            </div>

            <div onClick={hanldeCloseSubheader}>
              <Link
                className={`Link_route DailyNews ${activeNavbar && "DalyText"}`}
                to={"/news-&-pr"}
              >
                News & PR
              </Link>
            </div>
            <div onClick={hanldeCloseSubheader}>
              <Link
                className={`Link_route DailyNews ${activeNavbar && "DalyText"}`}
                to={"/events"}
              >
                Events
              </Link>
            </div>
          </div>
          <div className="navbarButton" onClick={hanldeCloseSubheader}>
            <Link className="Link_route GetInbutton" to={"#"}>
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
