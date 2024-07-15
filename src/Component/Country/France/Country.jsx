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
    label: "What are the language requirements for studying in France?",
    children: (
      <p className="textContent">
        While many universities in France offer courses in English, especially
        at the postgraduate level, proficiency in French is often required for
        undergraduate programs. International students may need to provide proof
        of French language proficiency through tests like the DELF or DALF, or
        English proficiency through tests like IELTS, TOEFL, or PTE.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "How can I apply for a student visa to study in France?",
    children: (
      <p className="textContent">
        To apply for a student visa, you must first check your eligibility,
        gather the required documents (including acceptance letter from a French
        university, proof of financial means, and health insurance), submit your
        application online, and wait for approval. Once your visa is approved,
        you can travel to France for your studies.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label:
      "Are international students allowed to work while studying in France?",
    children: (
      <p className="textContent">
        Yes, international students on a student visa can work up to 964 hours
        per year, which is about 60% of the regular working hours in France.
        However, part-time work may not cover all living expenses and should be
        considered supplementary income.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "What are the options for staying in France after graduation?",
    children: (
      <p className="textContent">
        Bachelor’s degree holders can stay in France if they obtain a work visa.
        Master’s degree holders can apply for a temporary residence permit (APS)
        for 24 months. Graduates with a Master’s, PhD, or postgraduate degree
        may also qualify for a two-year Schengen visa extension. Securing a job
        with a salary exceeding 1.5 times the minimum wage allows for applying
        for a Work Permit, leading towards a European Union Blue Card.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: "What is the cost of living for students in France?",
    children: (
      <p className="textContent">
        The cost of living in France varies depending on the city. On average,
        students can expect to spend between €700 and €1,200 per month, covering
        accommodation, food, transportation, and other living expenses. Cities
        like Paris tend to be more expensive than smaller towns and cities.
      </p>
    ),
    style: panelStyle,
  },
];
const GermanyCountry = () => {
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

export default GermanyCountry;
