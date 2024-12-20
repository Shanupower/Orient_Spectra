import Logo from "../../assets/Logo10.png";
import Mentorship from "../../assets/About2/Mentorship (1).svg";
import Find from "../../assets/About2/Courses.svg";
import Coaching from "../../assets/About2/Coaching.svg";

import Find1 from "../../assets/About2/Finding your course.svg";
import Mentorship1 from "../../assets/About2/Mentorship.svg";
import Coaching1 from "../../assets/About2/Coaching (1).svg";
import { Space } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Drawer } from "antd";
import { Menu } from "antd";
import Us from "../../assets/CountryFlags/Asset 14.svg";
import Canada from "../../assets/CountryFlags/Asset 15.svg";
import Australia from "../../assets/CountryFlags/Asset 13.svg";
import Uk from "../../assets/CountryFlags/Asset 12.svg";
import Dubai from "../../assets/CountryFlags/Asset 6.svg";
import Sweden from "../../assets/CountryFlags/Asset 5.svg";
import Poland from "../../assets/CountryFlags/Asset 4.svg";
import Switzerland from "../../assets/CountryFlags/Asset 3.svg";
import Malta from "../../assets/CountryFlags/Asset 9.svg";
import Singapore from "../../assets/CountryFlags/Asset 7.svg";
import Ireland from "../../assets/CountryFlags/Asset 8.svg";
import Germany from "../../assets/CountryFlags/Asset 10.svg";
import France from "../../assets/CountryFlags/Asset 11.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";

import "./index.css";


const StudyCountry = [
  {
    name: "USA",
    image: Us,
    link: "/country/study-in-usa",
  },
  {
    name: "United Kingdom",
    image: Uk,
    link: "/country/study-in-uk",
  },
  {
    name: "Germany",
    image: Germany,
    link: "/country/study-in-germany",
  },
  {
    name: "France",
    image: France,
    link: "/country/study-in-france",
  },
  {
    name: "Australia",
    image: Australia,
    link: "/country/study-in-australia",
  },
  {
    name: "Canada",
    image: Canada,
    link: "/country/study-in-canada",
  },
  {
    name: "Ireland",
    image: Ireland,
    link: "/country/study-in-ireland",
  },
  // {
  //   name: "Sweden",
  //   image: Sweden,
  //   link: "/country/study-in-sweden",
  // },
  {
    name: "Dubai",
    image: Dubai,
    link: "/country/study-in-dubai",
  },
  {
    name: "Switzerland",
    image: Switzerland,
    link: "/country/study-in-switzerland",
  },
  // {
  //   name: "Singapore",
  //   image: Singapore,
  //   link: "/country/study-in-singapore",
  // },
  // {
  //   name: "Poland",
  //   image: Poland,
  //   link: "/country/study-in-poland",
  // },
  // {
  //   name: "Malta",
  //   image: Malta,
  //   link: "/country/study-in-malta",
  // },
];

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
    key: "2",
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
    key: "4",
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
    key: "5",
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
    key: "6",
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
    key: "7",
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
    key: "8",
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
    key: "9",
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
    key: "10",
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
    key: "11",
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
    key: "12",
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
          <Link style={{ textDecoration: "none" }} to="/countries">
           Countries
          </Link>
        ),
      },
      {
        key: "1",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/study-in-usa">
            United States
          </Link>
        ),
      },
      {
        key: "2",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/study-in-uk">
            United Kingdom
          </Link>
        ),
      },
      {
        key: "3",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/study-in-germany">
            Germany
          </Link>
        ),
      },
      {
        key: "4",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/study-in-france">
            France
          </Link>
        ),
      },
      {
        key: "5",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/study-in-australia">
            Australia
          </Link>
        ),
      },
      {
        key: "6",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/study-in-canada">
            Canada
          </Link>
        ),
      },
      {
        key: "7",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/study-in-ireland">
            Ireland
          </Link>
        ),
      },
      {
        key: "8",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/study-in-switzerland">
            Switzerland
          </Link>
        ),
      },
      
      // {
      //   key: "9",
      //   label: (
      //     <Link style={{ textDecoration: "none" }} to="/country/study-in-singapore">
      //       Singapore
      //     </Link>
      //   ),
      // },
      {
        key: "10",
        label: (
          <Link style={{ textDecoration: "none" }} to="/country/study-in-dubai">
            Dubai
          </Link>
        ),
      },
      // {
      //   key: "11",
      //   label: (
      //     <Link style={{ textDecoration: "none" }} to="/country/study-in-sweden">
      //       Sweden
      //     </Link>
      //   ),
      // },
      // {
      //   key: "12",
      //   label: (
      //     <Link style={{ textDecoration: "none" }} to="/country/study-in-poland">
      //       Poland
      //     </Link>
      //   ),
      // },
      // {
      //   key: "13",
      //   label: (
      //     <Link style={{ textDecoration: "none" }} to="/country/study-in-malta">
      //       Malta
      //     </Link>
      //   ),
      // },
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
  // {
  //   key: "What we do    ",
  //   label: "What we do    ",

  //   children: [
  //     {
  //       key: "1",
  //       label: (
  //         <Link style={{ textDecoration: "none" }} to="/Mentorship">
  //           Mentorship
  //         </Link>
  //       ),
  //     },
  //     {
  //       key: "1",
  //       label: (
  //         <Link style={{ textDecoration: "none" }} to="/FindYourCourse">
  //           Find Your Course
  //         </Link>
  //       ),
  //     },
  //     {
  //       key: "1",
  //       label: (
  //         <Link style={{ textDecoration: "none" }} to="/Coaching">
  //           Coaching
  //         </Link>
  //       ),
  //     },
  //   ],
  // },
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
      <Link style={{ textDecoration: "none" }} to="/news-and-pr">
        News & PR
      </Link>
    ),
  },
  {
    key: "Events",
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
  setStudyOverseas,
  studyOverseas,
}) => {
  const isMd = useMediaQuery("(max-width:986px)");
  const [open, setOpen] = useState(false);
  const [mentor, setMentor] = useState(false);
  const [find, setFind] = useState(false);
  const [course, setCourse] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();
  const showDrawer = () => {
    setOpen(!open);
  };

  const handleMentorMouseOver = () => {
    setMentor(true);
  };
  const handleMentorMouseOut = () => {
    setMentor(false);
  };

  const handleFindMouseOver = () => {
    setFind(true);
  };
  const handleFindMouseOut = () => {
    setFind(false);
  };
  const handleCourseMouseOver = () => {
    setCourse(true);
  };
  const handleCorseMouseOut = () => {
    setCourse(false);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleOpenWhatWedoCard = () => {
    setWhatwedoOpen(true);
    setopenbranches(false);
    setactiveNavbar(true);
  };

  const handleOpeOurBranch = () => {
    setopenbranches(true);
    setWhatwedoOpen(false);
    setactiveNavbar(true);
  };

  const handleMouseOver = () => {
    setWhatwedoOpen(false);
    setopenbranches(false);
    setactiveNavbar(true);
    setStudyOverseas(true);
  };

  const handleMouseOut = () => {
    setactiveNavbar(false);
    setStudyOverseas(false);
    setWhatwedoOpen(false);
    setopenbranches(false);
  };

  const hanldeCloseSubheader2 = () => {
    window.location.href = "/countries";
  };

  const handlegetTuchwithus = () => {
    window.location.href = "/start-your-journey";
    hanldeCloseSubheader();
  };

  useEffect(() => {
    const currentPath = location.pathname; // Get current path
    let index = null;
    // Iterate over StudyCountry and check if current path matches any country's link
    StudyCountry.forEach((item, i) => {
      if (currentPath === item.link) {
        index = i; // If match found, set index to the country's index
      }
    });
    setActiveIndex(index); // Update activeIndex
    setStudyOverseas(false);
  }, [location, StudyCountry]);

  
  return (
    <>
      {isMd ? (
        <div className={`navMenuResponsive `}>
          <div className="navMenuLeft">
            <div className="logoContainer">
              <img src={Logo} alt="Orient Spectra Logo" />
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
                <img src={Logo} alt="Orient Spectra Logo" />
              </Link>

              <div>
                <div
                  onClick={hanldeCloseSubheader2}
                  onMouseOver={handleMouseOver}
                  className={`DailyNews ${activeNavbar && "DalyText"}`}
                >
                  Countries
                </div>

                <div
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  className={`study_overseas ${
                    studyOverseas && "showStudyoverseas"
                  }`}
                >
                  {StudyCountry.map((item, index) => (
                    <Link
                      className={`study_overseas_card Link_route ${activeIndex === index ? "active" : ""}`}
                      key={index}
                      to={item.link}
                      style={{ backgroundColor: activeIndex === index ? "#ff5f00" : "#fff" , 
                              color: activeIndex === index ? "#fff" : "#000", 
                              transform:"none",
                              padding :"5px",
                              borderRadius: activeIndex === index ? "5px" : "0px"
                              }}
                    >
                      <div className="countryImagecard">
                        <img src={item.image} alt="" />
                      </div>
                      <p>{item.name}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div onClick={hanldeCloseSubheader}>
                <Link className={`Link_route DailyNews`} to="/about">
                  <Space>About us</Space>
                </Link>
              </div>

               {/* <div>
                <div onMouseOver={handleOpenWhatWedoCard}>
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
                  onMouseOver={handleOpenWhatWedoCard}
                  onMouseOut={handleMouseOut}
                  className={`whatwedo-dropdwon-container   ${
                    openWhatwedo && "Whatwedoshow mentorshipcard-section"
                  }`}
                >
                  <Link
                    to="/Mentorship"
                    className="whatwedo-section2 whatwedo-section1 Link_route onhoverMentorshipCard"
                    onClick={hanldeCloseSubheader}
                    onMouseOver={handleMentorMouseOver}
                    onMouseOut={handleMentorMouseOut}
                  >
                    <div className="mentorship-imagecard">
                      <img src={mentor ? Mentorship1 : Mentorship} alt="" />
                    </div>
                    <div className="mentorship-text-card">
                      <h2>Mentorship</h2>
                      <p>
                        Orient Spectra simplifies course selection for your
                        academic and career goals.{" "}
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/FindYourCourse"
                    className="whatwedo-section2 Link_route onhoverMentorshipCard"
                    onClick={hanldeCloseSubheader}
                    onMouseOver={handleFindMouseOver}
                    onMouseOut={handleFindMouseOut}
                  >
                    <div className="mentorship-imagecard">
                      <img src={find ? Find1 : Find} alt="" />
                    </div>
                    <div className="mentorship-text-card">
                      <h2>Finding Your Course</h2>
                      <p>
                        Orient Spectra simplifies course selection for your
                        academic and career goals.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/Coaching"
                    className="whatwedo-section2 Link_route onhoverMentorshipCard"
                    onClick={hanldeCloseSubheader}
                    onMouseOver={handleCourseMouseOver}
                    onMouseOut={handleCorseMouseOut}
                  >
                    <div className="mentorship-imagecard">
                      <img src={course ? Coaching1 : Coaching} alt="" />
                    </div>
                    <div className="mentorship-text-card">
                      <h2>Coaching</h2>
                      <p>
                        Orient Spectra streamlines the student visa process. Our
                        expert counselors provide comprehensive.
                      </p>
                    </div>
                  </Link>
                </div>

              </div> */}

              <div>
                <div onMouseOver={handleOpeOurBranch}>
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
                  onMouseOver={handleOpeOurBranch}
                  onMouseOut={handleMouseOut}
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
                      <Link 
                        to="https://www.google.com/maps/place/Orient+Spectra/@17.3638988,78.541126,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99427a18787d:0x5d90a9e3d04c3edf!8m2!3d17.3638988!4d78.5437009!16s%2Fg%2F11vqmzhz90?entry=ttu"
                        target="_blank"
                        className="linkStyle">
                        4th floor, Baheti Spectrum, National Highway 65,
                        Polkampally, Margadarshi Colony, Kothapet, Hyderabad,
                        Telangana 500035
                      </Link>

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
                      <Link 
                        to="https://www.google.com/maps/place/Orient+Spectra/@17.4049567,78.4793968,18z/data=!3m2!4b1!5s0x3bcb99e0af8360cb:0x27697391eabdb411!4m6!3m5!1s0x3bcb99e0af99c383:0xf52e853634bc5ce0!8m2!3d17.4049567!4d78.4801039!16s%2Fg%2F1v27syxh?entry=ttu"
                        target="_blank"
                        className="linkStyle">
                        1st Floor, Sanatana Eternal, Himayatnagar Rd, Gagan Mahal,
                        Basheer Bagh, Hyderabad, Telangana, 500029
                        </Link>
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
                      <Link 
                        to="https://www.google.com/maps/place/Orient+Spectra/@17.4918389,78.3887201,17z/data=!3m2!4b1!5s0x3bcb91921221fff5:0x8023b6854609efde!4m6!3m5!1s0x3bcb919391e28989:0x565610b6dc461ae5!8m2!3d17.491839!4d78.393591!16s%2Fg%2F11c0rp2vc0?entry=ttu"
                        target="_blank"
                        className="linkStyle">
                        502, 5th floor, Manjeera Majestic Commercial, JNTU Rd,
                        KPHB, Kukatpally, Hyderabad, Telangana, 500072
                        </Link>
                      </p>
                      <KeyboardArrowRightIcon className="KeyboardArrowRightIcon" />
                    </div>
                  </div>
                </div>
              </div>

              <div onClick={hanldeCloseSubheader}>
                <Link className={`Link_route DailyNews`} to={"/blogs"}>
                  Blogs
                </Link>
              </div>

              <div onClick={hanldeCloseSubheader}>
                <Link
                  className={`Link_route DailyNews
                    `}
                  to={"/news-and-pr"}
                >
                  News & PR
                </Link>
              </div>
              <div onClick={hanldeCloseSubheader}>
                <Link
                  className={`Link_route DailyNews
                    `}
                  to={"/events"}
                >
                  Events
                </Link>
              </div>
            </div>
            
            <div className="navbarButton" onClick={handlegetTuchwithus}>
              <Link className="Link_route GetInbutton" to={"/start-your-journey"}>
                Get In Touch
              </Link>
            </div>
          </div>
      )}
    </>
  );
};

export default Navbar;
