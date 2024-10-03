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
import GermanyCountry from "./Component/Country/Germany/Country";
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
import Error from "./Component/Common/ErrorPage";
import UK_EDU_FAIR from "./Ads landing page/UK_EDU_FAIR";
import ThankYou from "./Ads landing page/ThankYou";
import UK_Jan_2025 from "./Ads landing page/UK_Januuary_2025/UK_Jan_2025";
import Privacy_Policy from "./Component/Privacy_Policy/Privacy_Policy";
import USA_SEPTEMBER_FAIR_2024 from "./Ads landing page/USA_SEPT_FAIR_2024/USA_SEPTEMBER_FAIR_2024";
import NewsDetails from "./Component/NewsPR/NewsDetails";
import EventDetails from "./Component/Event/EventDetails";
import Europe_Jan_2025 from "./Ads landing page/Europe_education_fair_2024/Europe_Jan_2025";
import Offline_Marketing_Club from "./Ads landing page/OfflineMarketingClub/Offline_Marketing_Club";
import WhatsApp from "./Whatsapp";
import LeadFormPopUp from "./LeadFormPopUp";
import SwedenCountry from "./Component/Country/Sweden/Country";
import DUBAICountry from "./Component/Country/Dubai/Country";
// import { HelmetProvider } from "react-helmet-async";

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
    {/* <HelmetProvider> */}
      <LeadFormPopUp />
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
        <Route path="/country/study-in-usa" element={<USACountry />} />
        <Route path="/country/study-in-uk" element={<UKCountry />} />

        <Route
          path="/country/study-in-australia"
          element={<AustraliaCountry />}
        />
        <Route path="/country/study-in-canada" element={<CanadaCountry />} />
        <Route path="/country/study-in-france" element={<FranceCountry />} />
        <Route path="/country/study-in-germany" element={<GermanyCountry />} />
        <Route path="/country/study-in-ireland" element={<IrelandCountry />} />
        <Route path="/country/study-in-malta" element={<MaltaCountry />} />
        <Route path="/country/study-in-poland" element={<PolandCountry />} />
        <Route
          path="/country/study-in-singapore"
          element={<SingaporeCountry />}
        />
        <Route
          path="/country/study-in-switzerland"
          element={<SwitzerlandCountry />}
        />
        <Route path="/country/study-in-dubai" element={<DUBAICountry />} />
        <Route
          path="/country/study-in-sweden"
          element={<SwedenCountry />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Event />} />
        <Route path="/event-details/:id" element={<EventDetails />} />
        <Route path="/study-overseas" element={<StudyOverseas />} />
        <Route path="/countries" element={<StudyOverseas />} />
        <Route path="/news-&-pr" element={<NewsPR />} />
        <Route path="/news-&-pr-detail/:id" element={<NewsDetails />} />
        <Route path="/FindYourCourse" element={<Finding />}></Route>
        <Route path="/Coaching" element={<Coaching />}></Route>
        <Route path="/Mentorship" element={<Mentorship />}></Route>
        <Route path="/blog" element={<SelectedBlog />}></Route>
        <Route path="/blog-content/:id" element={<BlogBody />} />
        <Route path="/selected-blog" element={<MoreBlogContent />} />

        {/* Start your Journey */}
        <Route path="/start-your-journey" element={<StartYourJourney />} />
        <Route path="*" element={<Error />} />
        <Route
          path="/offline-marketing-club"
          element={<Offline_Marketing_Club />}
        />

        <Route path="/uk-november-2024" element={<UK_EDU_FAIR />} />
        <Route path="/uk-january-2025" element={<UK_Jan_2025 />} />
        <Route
          path="/usa-september-fair-2024"
          element={<USA_SEPTEMBER_FAIR_2024 />}
        />
        <Route
          path="/europe-education-fair-2024"
          element={<Europe_Jan_2025 />}
        />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy-policy" element={<Privacy_Policy />} />
      </Routes>
      <WhatsApp />
      <Footer />
      {/* </HelmetProvider> */}
    </>
  );
}

export default App;
