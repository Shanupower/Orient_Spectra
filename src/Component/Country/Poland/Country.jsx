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
const getItems = (panelStyle) => [
  {
    key: "1",
    label: "What are the language requirements for studying in Poland?",
    children: (
      <p className="textContent">
        Most programs in Poland are taught in English, and proficiency in Polish
        is usually not required but may be beneficial socially.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "Are scholarships available for international students in Poland?",
    children: (
      <p className="textContent">
        Yes, many Polish universities offer scholarships also check with your
        home country's government and international programs.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "Can international students work while studying in Poland?",
    children: (
      <p className="textContent">
        Yes, students from EU/EEA countries can work without restrictions
        non-EU/EEA students typically have limited work opportunities.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "What is the cost of living for international students in Poland?",
    children: (
      <p className="textContent">
        Living costs are moderate, with expenses like accommodation, food, and
        transportation averaging around EUR 500-800 per month.
      </p>
    ),
    style: panelStyle,
  },
];
const PolandCountry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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

export default PolandCountry;
