import "./App.css";
import About from "./Component/About/About";
import Blogs from "./Component/Blogs/Blogs";
import Country from "./Component/Country/Country";
import Event from "./Component/Event/Event";
import NewsPR from "./Component/NewsPR/NewsPR";
import StudyOverseas from "./Component/StudyOverseas/StudyOverseas";
import LandingPage from "./Landing_page/LandingPage";
import { Routes, Route } from "react-router-dom";
import Finding  from "./FindingYourCourse/Finding";
import Coaching from "./Coaching/Coaching";
import Mentorship from "./Mentorship/Mentorship";
import SelectedBlog from "./Component/Blogs/SelectedBlog";
import BlogBody from "./Component/Blogs/BlogBody";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/country" element={<Country />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Event />} />
        <Route path="/study-overseas" element={<StudyOverseas />} />
        <Route path="/news-&-pr" element={<NewsPR />} />
        <Route path="/FindYourCourse" element={<Finding/>}></Route>
        <Route path='/Coaching' element={<Coaching/>}></Route>
        <Route path="/Mentorship" element={<Mentorship/>}></Route>
        <Route path='/blogs' element={<SelectedBlog/>}></Route>
        <Route path="/content" element={<BlogBody/>}/>



      </Routes>
    </>
  );
}

export default App;
