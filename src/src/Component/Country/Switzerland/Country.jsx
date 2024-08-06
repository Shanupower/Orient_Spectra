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
import { useEffect } from "react";
const getItems = (panelStyle) => [
  {
    key: "1",
    label: "What are the language requirements for studying in Switzerland?",
    children: (
      <p className="textContent">
        Most universities offer programs in German, French, or Italian, 
        but many also offer English-taught programs requiring proof of English proficiency.

      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "How much does it cost to study in Switzerland?",
    children: (
      <p className="textContent">
        Tuition fees range from CHF 500 to CHF 2,000 per semester for public universities, 
        but living expenses can be high, averaging CHF 1,500 per month.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "Can international students work while studying in Switzerland?",
    children: (
      <p className="textContent">
        Yes, international students can work up to 15 hours per week during semesters 
        and full-time during holidays, but restrictions apply for non-EU/EFTA students.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "What are the visa requirements for studying in Switzerland?",
    children: (
      <p className="textContent">
        Non-EU/EFTA students need a student visa, proof of financial resources, university acceptance, and
        health insurance. EU/EFTA students require registration with local authorities.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label:
      "Are scholarships available for international students in Switzerland?",
    children: (
      <p className="textContent">
        Yes, various scholarships are available from the Swiss government, universities, 
        and private organizations, often based on academic merit or specific criteria.
      </p>
    ),
    style: panelStyle,
  },
];
const SwitzerlandCountry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <State />
      <UnitedState />
      <Univercity />
      <TrendingCourse />
      <AdmitionRequired />
      {/* <Admissiontimeline /> */}
      <Personalized />
      <CountryFaq getItems={getItems} />
    </>
  );
};

export default SwitzerlandCountry;
