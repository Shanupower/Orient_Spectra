import Admissiontimeline from "./Admissiontimeline";
import AdmitionRequired from "./AdmitionRequired";
import Hero from "./Hero";
import Personalized from "./Personalized";
import State from "./State";
import TrendingCourse from "./TrendingCourse";
import UnitedState from "./UnitedState";
import Univercity from "./Univercity";
import CountryFaq from "../../Common/Contryfaq";
import StudyAbroad from "../../../Landing_page/StudyAbroad";
import { useEffect } from "react";
// import { Helmet } from "react-helmet-async";
const getItems = (panelStyle) => [
  {
    key: "1",
    label: "What are the language requirements?",
    children: (
      <p className="textContent">
        Most universities in Singapore require proficiency in English, typically
        demonstrated through TOEFL or IELTS scores.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "What is the cost of living in Singapore?",
    children: (
      <p className="textContent">
        Monthly expenses range from SGD 1,000 to SGD 2,500, including
        accommodation, food, transport, and other personal expenses
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "Are scholarships available for international students?",
    children: (
      <p className="textContent">
        Yes, various scholarships are offered by universities, the Singapore
        government, and private organizations.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Can international students work part-time?",
    children: (
      <p className="textContent">
        Yes, students can work up to 16 hours per week during term time and
        full-time during vacations.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: "What are the accommodation options?",
    children: (
      <p className="textContent">
        Options include on-campus hostels, off-campus private housing, and
        shared apartments, with costs varying by type and location.
      </p>
    ),
    style: panelStyle,
  },
];
const SingaporeCountry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <Helmet>
        <title>Study in Singapore | Singapore Universities, Intakes & Admissions</title>
        <meta 
          name="description" 
          content="Your decision to study in Singapore can be the best overseas education decision you will make. But you will need the guidance of our expert counsellors to learn about the top Singapore universities, student visa requirements, and other details." />
      </Helmet> */}
      <Hero />
      <State />
      {/* <UnitedState />
      <Univercity />
      <TrendingCourse /> */}
      <AdmitionRequired />
      {/* <Admissiontimeline /> */}
      <StudyAbroad />
      {/* <Personalized /> */}
      <CountryFaq getItems={getItems} />
    </>
  );
};

export default SingaporeCountry;
