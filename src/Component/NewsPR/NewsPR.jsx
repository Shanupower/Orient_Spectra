import GetTuchWithUs from "../../Landing_page/GetTuchWithUs2";
import MoreBlog from "../Blogs/MoreBlog";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import LatestNews from "./LatestNews";
import RecentNews from "./RecentNews";
const NewsPR = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestNews />
      <RecentNews />
      <MoreBlog />
      <GetTuchWithUs />
      <Footer />
    </>
  );
};

export default NewsPR;
