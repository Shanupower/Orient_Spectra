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
    label: "Is UAE a good place to study? ",
    children: (
      <p className="textContent">
        The UAE is a top global destination for study, known for its impressive infrastructure 
        and excellent opportunities. Universities like the University of Wollongong, BITS Pilani 
        Dubai, and Heriot-Watt University offer high-quality education.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label:
      "Which skills are in demand in UAE?",
    children: (
      <p className="textContent">
        {" "}
        Khaleej Times reports that jobs in emerging technologies like AI, machine learning, 
        and digital transformation, as well as roles such as analysts and cybersecurity web designers, 
        will remain in high demand in 2023.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label:
      " How much is the UAE Visa fee for Indian students?",
    children: (
      <p className="textContent">
        The UAE visa fee for Indian students ranges from INR 3,000 to INR 45,000, 
        depending on the visa type. Short-term visas are generally cheaper than long-term 
        ones. The UAE embassy determines the study visa costs, which may change based on their decisions.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Which standardised tests are preferred by universities in Dubai?",
    children: (
      <p className="textContent">
       Students may need to take the GMAT or GRE based on the university 
       and course requirements, while language proficiency tests like IELTS or TOEFL are mandatory.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: "How long can I stay in Dubai after completion of my education?",
    children: (
      <p className="textContent">
        {" "}
        In November 2018, the UAE government decided to grant a 5-year 
        visa to outstanding students meeting the criteria laid down by the government.
      </p>
    ),
    style: panelStyle,
  },
];
const DUBAICountry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <Helmet>
        <title>Study in Dubai | Dubai Universities, Intakes & Admissions</title>
        <meta 
          name="description" 
          content="Get complete guidance to study abroad in Dubai from Orient Spectra experts. Learn top Dubai universities for your higher education, process to get student visa and scholarship opportunities." />
      </Helmet> */}
      <Hero />
      <State />
      {/* <UnitedState />
      <Univercity />
      <TrendingCourse /> */}
      <AdmitionRequired />
      <StudyAbroad />
      {/* <Admissiontimeline /> */}
      {/* <Personalized /> */}
      <CountryFaq getItems={getItems} />
    </>
  );
};

export default DUBAICountry;
