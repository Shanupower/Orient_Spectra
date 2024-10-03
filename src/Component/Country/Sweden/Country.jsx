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
import StudyAbroad from "../../../Landing_page/StudyAbroad";
// import { Helmet } from "react-helmet-async";
const getItems = (panelStyle) => [
  {
    key: "1",
    label: "What are the general entry requirements for bachelor’s programs in Sweden? ",
    children: (
      <p className="textContent">
        To apply for bachelor's programs in Sweden, you need upper secondary education equivalent to the Swedish 
        gymnasium and proof of English proficiency through tests like IELTS, TOEFL, PTE Academic, or Cambridge exams. 
        Program-specific subject requirements may also apply.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label:
      "Are there scholarships available for international students in Sweden?",
    children: (
      <p className="textContent">
        {" "}
        Yes, several scholarships are available for international students in Sweden, covering tuition, 
        living expenses, and sometimes travel. Notable options include the Lund University Global Scholarship, 
        KTH Royal Institute of Technology Scholarships, and Uppsala University Global Scholarships.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label:
      " Can international students work while studying in Sweden?",
    children: (
      <p className="textContent">
       International students in Sweden can work part-time while studying, with no official limit on hours, 
       though balancing work and studies is advised. After graduation, non-EU/EEA students can apply for a 
       residence permit to stay for six months to job hunt. The minimum hourly wage is around INR 1.2K for 
       those without professional experience.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "What is the cost of living for students in Sweden?",
    children: (
      <p className="textContent">
        The cost of living for students in Sweden ranges from INR 60K to INR 1L per month, covering 
        accommodation, food, transport, and utilities. Expenses vary by city, with Stockholm and 
        Gothenburg being more expensive, but Sweden offers a high quality of life and excellent public services.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: "How can I prove my financial support for a residence permit?",
    children: (
      <p className="textContent">
        {" "}
        You can prove financial support with bank statements, a scholarship letter, or a sponsor's declaration. 
        The Swedish Migration Agency requires proof of at least INR 80K per month for your stay. Ensure your 
        documents are current and show your ability to cover expenses during your studies.
      </p>
    ),
    style: panelStyle,
  },
  
];
const SwedenCountry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <Helmet>
        <title>Study in Sweden | Sweden Universities, Intakes & Admissions</title>
        <meta 
          name="description" 
          content="Studying in Sweden is not as tough as you might think. With the guidance of our expert counsellors, you can easily learn about the top Sweden universities, student visa requirements, and other details for your study abroad dream." />
      </Helmet> */}
      <Hero />
      <State />
      {/* <UnitedState />
      <Univercity />
      <TrendingCourse /> */}
      {/* <AdmitionRequired /> */}
      <StudyAbroad />
      {/* <Admissiontimeline /> */}
      {/* <Personalized /> */}
      <CountryFaq getItems={getItems} />
    </>
  );
};

export default SwedenCountry;
