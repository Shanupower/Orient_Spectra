import Navbar from "../../Common/Navbar";
import Admissiontimeline from "./Admissiontimeline";
import AdmitionRequired from "./AdmitionRequired";
import Hero from "./Hero";
import Personalized from "./Personalized";
import State from "./State";
import TrendingCourse from "./TrendingCourse";
import UnitedState from "./UnitedState";
import Univercity from "./Univercity";
import CountryFaq from "../../Common/Contryfaq";
import { useParams } from "react-router-dom";
import Footer from "../../Common/Footer";
const getItems = (panelStyle) => [
  {
    key: "1",
    label: "What are the language requirements for studying in Poland?",
    children: (
      <p className="textContent">
        Most programs in Poland are taught in English, and proficiency in Polish
        is usually not required. However, basic Polish skills may be beneficial
        socially.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "Are scholarships available for international students in Poland?",
    children: (
      <p className="textContent">
        Yes, many Polish universities offer scholarships for international
        students. Additionally, students should explore scholarship
        opportunities from their home country's government and international
        programs.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "Can international students work while studying in Poland?",
    children: (
      <p className="textContent">
        Yes, students from EU/EEA countries can work in Poland without
        restrictions. Non-EU/EEA students typically have limited work
        opportunities, often restricted to part-time work during the academic
        year and full-time during holidays.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "What is the cost of living for international students in Poland?",
    children: (
      <p className="textContent">
        Living costs for international students in Poland are moderate,
        averaging around EUR 500-800 per month. This includes expenses such as
        accommodation, food, transportation, and other personal expenses.
      </p>
    ),
    style: panelStyle,
  },
];
const PolandCountry = () => {
  return (
    <>
      <Hero />
      <State />
      <UnitedState />
      <Univercity />
      <TrendingCourse />
      <AdmitionRequired />
      <Admissiontimeline />
      <Personalized />
      <CountryFaq getItems={getItems} />
    </>
  );
};

export default PolandCountry;
