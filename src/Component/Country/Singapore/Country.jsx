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
    label: "What are the language requirements?",
    children: (
      <p className="textContent">
        Most universities in Singapore require proficiency in English, typically demonstrated through TOEFL or IELTS scores.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "What is the cost of living in Singapore?",
    children: (
      <p className="textContent">
        Monthly expenses for international students in Singapore range from SGD 1,000 to SGD 2,500. This includes accommodation, food, transport, and other personal expenses.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "Are scholarships available for international students?",
    children: (
      <p className="textContent">
        Yes, international students in Singapore have access to various scholarships offered by universities, the Singapore government, and private organizations.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Can international students work part-time?",
    children: (
      <p className="textContent">
        Yes, international students in Singapore can work up to 16 hours per week during term time and full-time during vacations.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: "What are the accommodation options?",
    children: (
      <p className="textContent">
        Accommodation options for students in Singapore include on-campus hostels, off-campus private housing, and shared apartments. Costs vary depending on the type and location of accommodation.
      </p>
    ),
    style: panelStyle,
  },
];
const SingaporeCountry = () => {
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

export default SingaporeCountry;
