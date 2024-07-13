import Logo from "../../assets/Logo10.png";
import Logo2 from "../../assets/Logo2.png";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Drawer } from "antd";
import { Menu } from "antd";
import Logo3 from "../../assets/Layer_1.png";
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
    // icon: (
    //   <img
    //     style={{ width: "20px", height: "20px" }}
    //     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnL362W89--dfHtQ8A5r26VOXewXggu3CUxw2zqtGEQ&s"
    //     alt=""
    //   />
    // ),
    children: [
      // {
      //   key: "1",
      //   label: (
      //     <Link style={{ textDecoration: "none" }} to="/services">
      //       Services
      //     </Link>
      //   ),
      // },
    ],
  },
  {
    key: "About us",
    label: "About us",
    // icon: (
    //   <img
    //     style={{ width: "20px", height: "20px" }}
    //     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnL362W89--dfHtQ8A5r26VOXewXggu3CUxw2zqtGEQ&s"
    //     alt=""
    //   />
    // ),
    children: [
      // {
      //   key: "1",
      //   label: (
      //     <Link style={{ textDecoration: "none" }} to="/services">
      //       Services
      //     </Link>
      //   ),
      // },
    ],
  },
  {
    key: "What we do    ",
    label: "What we do    ",
    // icon: (
    //   <img
    //     style={{ width: "20px", height: "20px" }}
    //     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnL362W89--dfHtQ8A5r26VOXewXggu3CUxw2zqtGEQ&s"
    //     alt=""
    //   />
    // ),
    children: [
      // {
      //   key: "1",
      //   label: (
      //     <Link style={{ textDecoration: "none" }} to="/services">
      //       Services
      //     </Link>
      //   ),
      // },
    ],
  },
  {
    key: "Our branches",
    label: "Our branches",
    // icon: (
    //   <img
    //     style={{ width: "20px", height: "20px" }}
    //     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnL362W89--dfHtQ8A5r26VOXewXggu3CUxw2zqtGEQ&s"
    //     alt=""
    //   />
    // ),
    children: [
      // {
      //   key: "1",
      //   label: (
      //     <Link style={{ textDecoration: "none" }} to="/services">
      //       Services
      //     </Link>
      //   ),
      // },
    ],
  },
  {
    key: "Blogs",
    label: "Blogs",
    // icon: (
    //   <img
    //     style={{ width: "20px", height: "20px" }}
    //     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnL362W89--dfHtQ8A5r26VOXewXggu3CUxw2zqtGEQ&s"
    //     alt=""
    //   />
    // ),
  },
  {
    key: "Daily News",
    label: "Daily News",
    // icon: (
    //   <img
    //     style={{ width: "20px", height: "20px" }}
    //     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnL362W89--dfHtQ8A5r26VOXewXggu3CUxw2zqtGEQ&s"
    //     alt=""
    //   />
    // ),
  },
];
const Navbar = () => {
  const [show, setShow] = useState(true);

  const isMd = useMediaQuery("(max-width:986px)");
  const [open, setOpen] = useState(false);
  const [openWhatwedo, setWhatwedoOpen] = useState(false);
  const [openbranches, setopenbranches] = useState(false);

  const showDrawer = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };
  const handleOpenWhatWedoCard = () => {
    setWhatwedoOpen(!openWhatwedo);
    setopenbranches(false);
  };
  const handleOpeOurBranch = () => {
    setopenbranches(!openbranches);
    setWhatwedoOpen(false);
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
          <div className="navbarCard">
            <Link to="/" className="Link_route logo">
              <img src={Logo} alt="" />
            </Link>
            <div>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <Space>Study Overseas</Space>
              </Dropdown>
            </div>
            <div>
              <Link className="Link_route DailyNews" to="/about">
                <Space>About us</Space>
              </Link>
            </div>

            <div>
              <div onClick={handleOpenWhatWedoCard}>
                <Link className="Link_route DailyNews" to={"#"}>
                  What we do
                </Link>
              </div>

              <div
                className={`whatwedo-dropdwon-container ${
                  openWhatwedo && "Whatwedoshow"
                }`}
              >
                <div className="whatwedo-section">
                  <div className="whatweddo-card">
                    <AccessibleIcon className="AccessibleIcon" />
                    <p>Mentorship</p>
                  </div>
                  <KeyboardArrowRightIcon className="KeyboardArrowRightIcon" />
                </div>
                <div className="whatwedo-section">
                  <div className="whatweddo-card">
                    <SchoolIcon className="AccessibleIcon" />
                    <p>Find Your Course</p>
                  </div>
                  <KeyboardArrowRightIcon className="KeyboardArrowRightIcon" />
                </div>
                <div className="whatwedo-section">
                  <div className="whatweddo-card">
                    <AccessibleIcon className="AccessibleIcon" />
                    <p>Coaching</p>
                  </div>
                  <KeyboardArrowRightIcon className="KeyboardArrowRightIcon" />
                </div>
              </div>
            </div>

            <div>
              <div onClick={handleOpeOurBranch}>
                <Link className="Link_route DailyNews" to={"#"}>
                  Our Branches
                </Link>
              </div>

              <div
                className={` branchssshow-card ${
                  openbranches && "branchssshow"
                }`}
              >
                <div className="whatwedo-section">
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
                <div className="whatwedo-section">
                  <h2>Himayath Nagar</h2>

                  <div className="whatweddo-card branchCardLocation">
                    <p>
                      1st Floor, Sanatana Eternal, Himayatnagar Rd, Gagan Mahal,
                      Basheer Bagh, Hyderabad, Telangana, 500029
                    </p>
                    <KeyboardArrowRightIcon className="KeyboardArrowRightIcon" />
                  </div>
                </div>
                <div className="whatwedo-section">
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

            <div>
              <Link className="Link_route DailyNews" to={"/blogs"}>
                Blogs
              </Link>
            </div>

            <div>
              <Link className="Link_route DailyNews" to={"/news-&-pr"}>
                News & PR
              </Link>
            </div>
            <div>
              <Link className="Link_route DailyNews" to={"/events"}>
                Events
              </Link>
            </div>
          </div>
          <div className="navbarButton">
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

const WhatWedoDropDown = () => {};
