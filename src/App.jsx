import "./App.css";
import About from "./Component/About/About";
import Blogs from "./Component/Blogs/Blogs";
import Event from "./Component/Event/Event";
import NewsPR from "./Component/NewsPR/NewsPR";
import StudyOverseas from "./Component/StudyOverseas/StudyOverseas";
import LandingPage from "./Landing_page/LandingPage";
import { Routes, Route, useLocation } from "react-router-dom";
import Finding from "./FindingYourCourse/Finding";
import Coaching from "./Coaching/Coaching";
import Mentorship from "./Mentorship/Mentorship";
import SelectedBlog from "./Component/Blogs/SelectedBlog";
import BlogBody from "./Component/Blogs/BlogBody";
import UKCountry from "./Component/Country/UK/Country";
import AustraliaCountry from "./Component/Country/Australia/Country";
import CanadaCountry from "./Component/Country/Canada/Country";
import FranceCountry from "./Component/Country/France/Country";
import GermanyCountry from "./Component/Country/France/Country";
import IrelandCountry from "./Component/Country/Ireland/Country";
import MaltaCountry from "./Component/Country/Malta/Country";
import PolandCountry from "./Component/Country/Poland/Country";
import SwitzerlandCountry from "./Component/Country/Switzerland/Country";
import SingaporeCountry from "./Component/Country/Singapore/Country";
import USACountry from "./Component/Country/Usa/Country";
import { useState, useEffect } from "react";
import Navbar from "./Component/Common/Navbar";
import Footer from "./Component/Common/Footer";
import StartYourJourney from "./Component/StartYourJourney/StartYourJourney";
import MoreBlogContent from "./Component/Blogs/MoreBlogContent";
import Loading from "./Component/Common/Loading";

function App() {
  const [openWhatwedo, setWhatwedoOpen] = useState(false);
  const [openbranches, setopenbranches] = useState(false);
  const [studyOverseas, setStudyOverseas] = useState(false);
  const [activeNavbar, setactiveNavbar] = useState(false);
  const hanldeCloseSubheader = () => {
    setWhatwedoOpen(false);
    setopenbranches(false);
    setactiveNavbar(false);
    setStudyOverseas(false);
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      hanldeCloseSubheader();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar
        openWhatwedo={openWhatwedo}
        setWhatwedoOpen={setWhatwedoOpen}
        openbranches={openbranches}
        setopenbranches={setopenbranches}
        activeNavbar={activeNavbar}
        setactiveNavbar={setactiveNavbar}
        hanldeCloseSubheader={hanldeCloseSubheader}
        studyOverseas={studyOverseas}
        setStudyOverseas={setStudyOverseas}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/country/Usa" element={<USACountry />} />
        <Route path="/country/UK" element={<UKCountry />} />

        <Route path="/country/Australia" element={<AustraliaCountry />} />
        <Route path="/country/Canada" element={<CanadaCountry />} />
        <Route path="/country/France" element={<FranceCountry />} />
        <Route path="/country/Germany" element={<GermanyCountry />} />
        <Route path="/country/Ireland" element={<IrelandCountry />} />
        <Route path="/country/Malta" element={<MaltaCountry />} />
        <Route path="/country/Poland" element={<PolandCountry />} />
        <Route path="/country/Singapore" element={<SingaporeCountry />} />
        <Route path="/country/Switzerland" element={<SwitzerlandCountry />} />
        <Route path="/country/Dubai" element={<SwitzerlandCountry />} />
        <Route path="/country/Sweden" element={<SwitzerlandCountry />} />

        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Event />} />
        <Route path="/study-overseas" element={<StudyOverseas />} />
        <Route path="/news-&-pr" element={<NewsPR />} />
        <Route path="/FindYourCourse" element={<Finding />}></Route>
        <Route path="/Coaching" element={<Coaching />}></Route>
        <Route path="/Mentorship" element={<Mentorship />}></Route>
        <Route path="/blog" element={<SelectedBlog />}></Route>
        <Route path="/blog-content/:id" element={<BlogBody />} />
        <Route path="/selected-blog" element={<MoreBlogContent />} />

        {/* Start your Journey */}
        <Route path="/start-your-journey" element={<StartYourJourney />} />
        <Route path="*" element={<p>Request URL Invalid</p>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
