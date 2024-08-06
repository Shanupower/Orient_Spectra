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
    label:
      "What are the admission requirements for a Master's or MBA program in Germany?",
    children: (
      <p className="textContent">
        Admission requirements typically include a recognized bachelor's degree,
        proof of language proficiency (German or English, depending on the
        program), a CV, a letter of motivation, and letters of recommendation.
        Some MBA programs may also require work experience and GMAT/GRE scores.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label:
      "Are German language skills necessary for studying a Master's or MBA in Germany?",
    children: (
      <p className="textContent">
        German language skills are essential for programs taught in German.
        However, many Master's and MBA programs, especially at the postgraduate
        level, are offered in English. For these programs, proof of English
        proficiency (TOEFL or IELTS) is typically required.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label:
      "What types of part-time jobs are available for international students in Germany?",
    children: (
      <p className="textContent">
        Common part-time jobs include positions as research assistants, tutors,
        administrative staff at universities, as well as jobs in restaurants,
        cafes, retail, and other service industries.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label:
      "What types of accommodation are available for international students in Germany?",
    children: (
      <p className="textContent">
        Accommodation options include student dormitories (Studentenwohnheime),
        private apartments, shared flats (WG, or Wohngemeinschaft), and
        homestays with local families.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: "Are scholarships available for international students in Germany?",
    children: (
      <p className="textContent">
        Yes, there are numerous scholarships available for international
        students, offered by the German government, universities, and various
        organizations. These scholarships can cover tuition fees and living
        expenses.
      </p>
    ),
    style: panelStyle,
  },
];
const GermanyCountry = () => {
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

export default GermanyCountry;
