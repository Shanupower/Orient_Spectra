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
    label: "What are the language requirements for studying in Switzerland?",
    children: (
      <p className="textContent">
        Most universities in Switzerland offer programs in German, French, or Italian. English-taught programs are also available and typically require proof of English proficiency such as TOEFL or IELTS scores.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "How much does it cost to study in Switzerland?",
    children: (
      <p className="textContent">
        Tuition fees at public universities in Switzerland range from CHF 500 to CHF 2,000 per semester. Living expenses are relatively high, averaging around CHF 1,500 per month.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "Can international students work while studying in Switzerland?",
    children: (
      <p className="textContent">
        Yes, international students in Switzerland can work up to 15 hours per week during semesters and full-time during holidays. However, there are restrictions for non-EU/EFTA students.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "What are the visa requirements for studying in Switzerland?",
    children: (
      <p className="textContent">
        Non-EU/EFTA students need a student visa, proof of financial resources, acceptance from a Swiss university, and health insurance. EU/EFTA students must register with local authorities.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: "Are scholarships available for international students in Switzerland?",
    children: (
      <p className="textContent">
        Yes, international students in Switzerland have access to various scholarships offered by the Swiss government, universities, and private organizations. These scholarships are often based on academic merit or specific criteria.
      </p>
    ),
    style: panelStyle,
  },
];
const SwitzerlandCountry = () => {
  const { usa } = useParams();
  return (
    <>
      <Navbar />
      <Hero />
      <State />
      <UnitedState />
      <Univercity />
      <TrendingCourse />
      <AdmitionRequired />
      <Admissiontimeline />
      <Personalized />
      <CountryFaq getItems={getItems} />
      <Footer />
    </>
  );
};

export default SwitzerlandCountry;
