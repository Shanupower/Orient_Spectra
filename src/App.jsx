import "./App.css";
import About from "./Component/About/About";
import Blogs from "./Component/Blogs/Blogs";
import Event from "./Component/Event/Event";
import NewsPR from "./Component/NewsPR/NewsPR";
import StudyOverseas from "./Component/StudyOverseas/StudyOverseas";
import LandingPage from "./Landing_page/LandingPage";
import { Routes, Route } from "react-router-dom";
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
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/country/Usa" element={<UKCountry />} />
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
        <Route path="/blogs" element={<SelectedBlog />}></Route>
        <Route path="/content" element={<BlogBody />} />
      </Routes>
    </>
  );
}

export default App;
