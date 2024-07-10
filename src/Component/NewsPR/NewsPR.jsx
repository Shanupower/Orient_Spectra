import GetTuchWithUs from "../../Landing_page/GetTuchWithUs2";
import MoreBlog from "../Blogs/MoreBlog";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import LatestNews from "./LatestNews";
import RecentNews from "./RecentNews";
const NewsPRData = [
  {
    id: 1,
    attributes: {
      title: "The 10 Best Places to Visit in the World",
      Short_Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
  },
  {
    id: 2,
    attributes: {
      title: "The 10 Best Places to Visit in the World",
      Short_Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
  },
  {
    id: 3,
    attributes: {
      title: "The 10 Best Places to Visit in the World",
      Short_Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
  },
];
const NewsPR = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestNews />
      <RecentNews />
      <MoreBlog data={NewsPRData} />
      <GetTuchWithUs />
      <Footer />
    </>
  );
};

export default NewsPR;
