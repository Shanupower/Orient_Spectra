import Footer from "../Component/Common/Footer";
import Navbar from "../Component/Common/Navbar";
import Acedemic from "./Acedemic";
import Blog from "./Blog";
import Counselors from "./Counselors";
import Course from "./Course";
import Discovery from "./Discovery";
import Events from "./Events";
import Explore from "./Explore";
import Faq from "./Faq";
import GetTuchWithUs from "./GetTuchWithUs";
import Hero from "./Hero";
import News from "./News";
import StudyAbroad from "./StudyAbroad";
import Testimonial from "./Testimonial";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Discovery />
      <Acedemic />
      <Events />
      <Explore />
      <StudyAbroad />
      <Course />
      <Counselors />
      <Testimonial />
      <Blog />
      <News />
      {/* <Faq /> */}
      <GetTuchWithUs />
      <Footer />
    </>
  );
};

export default LandingPage;
