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
    label: "What are the entry requirements for studying in Australia?",
    children: (
      <p className="textContent">
        Entry requirements vary depending on the course and institution.
        Generally, you will need to provide evidence of your previous academic
        qualifications, English language proficiency (such as IELTS or PTE
        scores), and in some cases, work experience or portfolio submissions.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "How much does it cost to study in Australia?",
    children: (
      <p className="textContent">
        {" "}
        The cost of studying in Australia varies by institution and course. On
        average, undergraduate degrees can range from AUD 20,000 to AUD 45,000
        per year, while postgraduate degrees can range from AUD 22,000 to AUD
        50,000 per year. Additionally, you should budget for living expenses,
        which average around AUD 20,000 per year.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: " Can international students work while studying in Australia?",
    children: (
      <p className="textContent">
        Yes, international students on a Student Visa (Subclass 500) are allowed
        to work up to 40 hours every two weeks while their course is in session
        and unlimited hours during scheduled course breaks. This helps students
        gain work experience and supplement their living expenses.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label:
      "What scholarships are available for international students in Australia?",
    children: (
      <p className="textContent">
        Various scholarships are available for international students, including
        those offered by the Australian government, educational institutions,
        and other organizations. Notable scholarships include the Australia
        Awards, Destination Australia, and institutional scholarships that can
        cover tuition fees, living expenses, and travel costs.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: "How do I apply for an Australian student visa?",
    children: (
      <p className="textContent">
        {" "}
        To apply for an Australian student visa (Subclass 500), you need: <br />
        1. Receive an offer of admission from an Australian educational
        institution.
        <br />
        2. Obtain a Confirmation of Enrolment (CoE).
        <br />
        3. Create an account and apply online through the ImmiAccount portal.
        <br />
        4. Provide required documents, such as your CoE, passport, English
        proficiency test results, financial evidence, and Overseas Student
        Health Cover(OSHC).
        <br />
        5. Pay the visa application fee and attend a visa interview if required.
        The processing time typically ranges from 1 to 3 months.
        <br />
      </p>
    ),
    style: panelStyle,
  },
];
const AustraliaCountry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <Helmet>
        <title>Study in Australia | Australia Universities, Intakes & Admissions</title>
        <meta 
          name="description" 
          content="Wondering how you can study abroad in Australia? Schedule a call with Orient Spectra counsellors to learn about Australia universities admission process, course selection, visa application, and scholarship opportunities." />
      </Helmet> */}
      <Hero />
      <State />
      <UnitedState />
      <Univercity />
      <TrendingCourse />
      <AdmitionRequired />
      <Admissiontimeline />
      <StudyAbroad />
      {/* <Personalized /> */}
      <CountryFaq getItems={getItems} />
    </>
  );
};

export default AustraliaCountry;
