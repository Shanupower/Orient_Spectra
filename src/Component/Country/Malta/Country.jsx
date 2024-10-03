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
import { Helmet } from "react-helmet-async";
const getItems = (panelStyle) => [
  {
    key: "1",
    label: "What are the main universities and institutions in Malta?",
    children: (
      <p className="textContent">
        The primary higher education institutions in Malta are the University of
        Malta, Malta College of Arts, Science and Technology (MCAST), and the
        Institute of Tourism Studies (ITS). The University of Malta is the
        oldest and largest, offering a wide range of undergraduate and
        postgraduate programs.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "What is the cost of studying in Malta?",
    children: (
      <p className="textContent">
        The cost of studying in Malta varies depending on the institution and
        the program of study. Tuition fees for EU students are generally lower,
        often ranging from €1,000 to €4,000 per year. Non-EU students can expect
        to pay between €8,000 and €13,000 annually. Living expenses, including
        accommodation, food, and transportation, are estimated to be around
        €8,000 to €12,000 per year.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "What are the language requirements for studying in Malta?",
    children: (
      <p className="textContent">
        Most higher education programs in Malta are conducted in English.
        Therefore, proficiency in English is essential. International students
        whose first language is not English may need to provide proof of English
        language proficiency through tests such as IELTS or TOEFL. Specific
        score requirements vary by program and institution.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "What are the visa requirements for international students?",
    children: (
      <p className="textContent">
        International students from non-EU countries need a student visa to
        study in Malta. To obtain a visa, you will need to provide a letter of
        acceptance from a Maltese educational institution, proof of financial
        means to support yourself, health insurance, and accommodation details.
        EU students do not require a visa but must register with the Maltese
        authorities if they plan to stay longer than three months.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: "What are the accommodation options for students in Malta?",
    children: (
      <p className="textContent">
        Students in Malta can choose from various accommodation options,
        including university dormitories, private rentals, and shared
        apartments. University dormitories are a convenient option but may have
        limited availability. Private rentals offer more flexibility but can be
        more expensive. It is advisable to arrange accommodation well in advance
        due to high demand, especially at the beginning of the academic year.
      </p>
    ),
    style: panelStyle,
  },
];
const MaltaCountry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Study in Malta | Malta Universities, Intakes & Admissions</title>
        <meta 
          name="description" 
          content="Want to study abroad in Malta? Learn about Malta's top universities and courses fit for your profile and preference through end-to-end guidance with Orient Spectra counsellers. Schedule a call now. " />
      </Helmet>
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

export default MaltaCountry;
