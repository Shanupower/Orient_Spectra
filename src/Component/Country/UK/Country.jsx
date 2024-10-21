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
    label: "How much will it cost to study in the UK?",
    children: (
      <p className="textContent">
        Undergraduate and graduate tuition costs in the UK typically vary from
        $17,000 to $25,000. (depending on the exchange rate at the time of
        study).
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: " What is a CAS letter?",
    children: (
      <p className="textContent">
        {" "}
        The university issues a CAS (Confirmation of Acceptance for Studies)
        letter to assist your student visa application. The CAS letter is
        usually sent after you have accepted an offer and paid the necessary
        deposit to guarantee your position.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: " How can I go to the UK from India to Study?",
    children: (
      <p className="textContent">
        Indian students need a student visa to study in the UK.
        <ul>
          <li>Student visas</li>
          <li>True Passport.</li>
          <li>Proof of English Proficiency.</li>
          <li>Proof of funds to finance your stay in the UK.</li>
          <li>Tuberculosis Test result</li>
          <li>Minors must provide parental or legal guardian proof.</li>
        </ul>
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Is there any age limit to study in the UK?",
    children: (
      <p className="textContent">
        The candidate must be at least 16 years old. Tier 4 (Child) Student Visa
        – This visa category is for students aged 4 to 15. Only independent
        fee-paying schools may teach children aged 4 to 15.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: "Can I Settle in the UK after Study?",
    children: (
      <p className="textContent">
        {" "}
        After 5 years of graduate employment, you may apply for a permanent
        residency permit. The candidate should get an “indefinite permission to
        stay (ILR) Visa”.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "6",
    label: " Can I study in the UK for free?",
    children: (
      <p className="textContent">
        {" "}
        You may study in the UK for free by obtaining the following full
        scholarships for international undergraduate students provided by the
        University of St. Andrews.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "7",
    label: "Can one work part-time while studying in the UK?",
    children: (
      <p className="textContent">
        {" "}
        You’re permitted to work in the UK while studying, just part-time. There
        are numerous employment offers and possibilities for foreign students in
        the UK. As an international student, you’ll work up to twenty (20) hours
        per week throughout your study term.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "8",
    label: "How long can one stay after studying in the UK?",
    children: (
      <p className="textContent">
        The UK post-study work visa enables foreign students to remain in the
        United Kingdom after graduation in order to find employment, for up to 2
        years.
      </p>
    ),
    style: panelStyle,
  },
];
const UKCountry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    {/* <Helmet>
          <title>Study in UK | UK Universities, Intakes & Admissions</title>
          <meta 
            name="description" 
            content="Dreaming of getting a degree from UK? With Orient Spectra, you get complete study abroad in UK guidance from selecting universities, courses to identifying scholarship and loan opportunities with expert guidance." />
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

export default UKCountry;
