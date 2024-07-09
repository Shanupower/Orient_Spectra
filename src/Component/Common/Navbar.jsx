import Logo from "../../assets/Logo10.png";
import Logo2 from "../../assets/Logo2.png";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css";
import { useMediaQuery } from "@mui/material";
import { Drawer } from "antd";
import { Menu } from "antd";
import Logo3 from "../../assets/Layer_1.png";

import MenuIcon from "@mui/icons-material/Menu";

const items = [
  // {
  //   label: <a href="https://www.antgroup.com">1st menu item</a>,
  //   key: "0",
  // },
  // {
  //   label: <a href="https://www.aliyun.com">2nd menu item</a>,
  //   key: "1",
  // },
  // {
  //   type: "divider",
  // },
  // {
  //   label: "3rd menu item",
  //   key: "3",
  // },
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

  const showDrawer = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
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
                <Link
                  to="/country"
                  className="Link_route "
                  style={{ color: "#fff" }}
                >
                  <Space>
                    Study Overseas
                    <DownOutlined />
                  </Space>
                </Link>
              </Dropdown>
            </div>
            <div>
              <Link className="Link_route DailyNews" to="/about">
                <Space>About us</Space>
              </Link>
            </div>

            <div>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    What we do
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>

            <div>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Our branches
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>

            <div>
              <Link className="Link_route DailyNews" to={"/blogs"}>
                Blogs
              </Link>
            </div>

            <div>
              <Link className="Link_route DailyNews" to={"/news-&-pr"}>
                Daily News
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
