import { useEffect } from "react";
import Counselors from "../../Landing_page/Counselors";
import GetTuchWithUs from "../../Landing_page/GetTuchWithUs2";
import Testimonial from "../../Landing_page/Testimonial";
import Awarded from "./Awarded";
import Consectetuer from "./Consectetuer";
import Founders from "./Founders";
import Hero from "./Hero";
import Story from "./Story";
import Country from "../../Landing_page/Country";
import Mission_Vision from "../../Landing_page/Mission_Vision";
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
      <Mission_Vision />
      <Consectetuer />
      <Founders />
      <Country />
      {/* <Counselors /> */}
      <Awarded />
      <Testimonial />
      <GetTuchWithUs />
    </>
  );
};

export default About;
