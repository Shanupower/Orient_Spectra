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
    label: "Why should I consider Canada for my study abroad destination?",
    children: (
      <p className="textContent">
        Canada is known for its high-quality education system, diverse and
        inclusive society, and beautiful natural landscapes. It's an ideal
        destination for students seeking a well-rounded overseas education
        experience.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "What are the benefits of studying abroad in Canada?",
    children: (
      <p className="textContent">
        Studying abroad in Canada offers numerous benefits, including access to
        world-class universities, diverse cultural experiences, opportunities
        for research and development, and pathways to permanent residency.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label:
      "What are the general admission requirements for international students in Canada?",
    children: (
      <p className="textContent">
        Admission requirements vary by institution and program, but typically
        include academic transcripts, proof of language proficiency (such as
        IELTS or TOEFL scores), a statement of purpose, and letters of
        recommendation.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "How do I apply to Canadian universities for overseas education?",
    children: (
      <p className="textContent">
        The application process generally involves selecting your desired
        program, meeting the eligibility criteria, submitting an online
        application through the university's portal, and providing necessary
        documents such as transcripts and language test scores.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label:
      "When should I start my application process to study abroad in Canada?",
    children: (
      <p className="textContent">
        It is advisable to start the application process at least 12-18 months
        before the intended start date to ensure ample time for gathering
        documents, fulfilling requirements, and obtaining a study permit.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "6",
    label: "How much does it cost to study in Canada?",
    children: (
      <p className="textContent">
        Tuition fees vary depending on the program and institution, but
        international students can expect to pay between CAD 15,000 to CAD
        30,000 per year. Additionally, living expenses can range from CAD 10,000
        to CAD 15,000 annually.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "7",
    label:
      "Are there scholarships available for international students in Canada?",
    children: (
      <p className="textContent">
        Yes, many Canadian universities and government programs offer
        scholarships for international students based on academic merit,
        financial need, and specific fields of study.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "8",
    label: "What is the process for obtaining a Canadian study permit?",
    children: (
      <p className="textContent">
        To obtain a study permit, you need an acceptance letter from a
        designated learning institution (DLI), proof of sufficient financial
        resources, and a clean criminal record. You must apply online or at a
        visa application center.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "9",
    label: "Can I work while studying abroad in Canada?",
    children: (
      <p className="textContent">
        Yes, international students in Canada can work up to 20 hours per week
        during regular academic sessions and full-time during scheduled breaks,
        provided they hold a valid study permit and are enrolled full-time at a
        DLI.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "10",
    label:
      "What is the accommodation situation for international students in Canada?",
    children: (
      <p className="textContent">
        International students can choose from on-campus housing, off-campus
        apartments, or homestays. It is recommended to arrange accommodation in
        advance to secure a place that fits your budget and preferences.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "11",
    label:
      "How can I adjust to the cultural differences while studying overseas in Canada?",
    children: (
      <p className="textContent">
        Embracing cultural differences involves participating in campus
        activities, joining student organizations, making friends from diverse
        backgrounds, and seeking support from international student services.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "12",
    label:
      "What healthcare options are available for international students in Canada?",
    children: (
      <p className="textContent">
        International students must have health insurance. Some provinces
        provide healthcare coverage to international students, while others
        require students to purchase private health insurance.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "13",
    label: "Can I stay in Canada after I graduate?",
    children: (
      <p className="textContent">
        Yes, many international students apply for the Post-Graduation Work
        Permit (PGWP), which allows them to work in Canada for up to three years
        after completing their studies. This experience can also help in
        applying for permanent residency.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "14",
    label:
      "What are the career prospects for international graduates in Canada?",
    children: (
      <p className="textContent">
        Canada has a strong job market with opportunities in various fields such
        as technology, healthcare, engineering, and business. International
        graduates with Canadian education and work experience are highly valued
        by employers.
      </p>
    ),
    style: panelStyle,
  },
];
const CanadaCountry = () => {
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

export default CanadaCountry;
