import { useEffect } from "react";
import Counselors from "../../Landing_page/Counselors";
import Events from "../../Landing_page/Events";
import GetTuchWithUs from "../../Landing_page/GetTuchWithUs2";
import Testimonial from "../../Landing_page/Testimonial";
import Awarded from "./Awarded";
import Consectetuer from "./Consectetuer";
import Founders from "./Founders";
import Hero from "./Hero";
import Story from "./Story";
import Country from "../../Landing_page/Country";
import { Helmet } from "react-helmet-async";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Study Abroad with Orient Spectra Consultancy Guidance</title>
        <meta 
          name="description" 
          content="Orient Spectra is a leading overseas education consultancy that helped over thousands of students with their study abroad dream." />
      </Helmet>
      <Hero />
      <Story />
      <Country />
      {/* <Counselors /> */}
      <Consectetuer />
      <Founders />
      {/* <AboutCountry /> */}
      <Awarded />
      <Events />
      <Testimonial />
      <GetTuchWithUs />
    </>
  );
};

export default About;
