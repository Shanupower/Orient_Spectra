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
    label: "What are the general steps to apply to a university in the USA?",
    children: (
      <p className="textContent">
        The general steps include researching universities, preparing for
        standardized tests (like SAT, ACT, GRE, GMAT), obtaining recommendation
        letters, writing personal statements, completing the application forms,
        submitting transcripts, and applying for a student visa.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label:
      "What types of student visas are available for international students?",
    children: (
      <p className="textContent">
        {" "}
        The most common student visas are the F-1 visa for academic studies and
        the J-1 visa for exchange programs. The M-1 visa is for vocational or
        non-academic programs.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label:
      " How important are standardized tests for admission to U.S. universities?",
    children: (
      <p className="textContent">
        : Standardized tests like the SAT, ACT, GRE, and GMAT are important as
        they are often required by universities as part of the admissions
        process. However, their importance can vary by institution and program
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "What are the English language proficiency requirements?",
    children: (
      <p className="textContent">
        Most universities require international students to demonstrate English
        proficiency through tests such as TOEFL or IELTS. Minimum score
        requirements vary by institution.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: "Are there scholarships available for international students?",
    children: (
      <p className="textContent">
        {" "}
        Yes, many universities offer scholarships for international students
        based on merit, need, or specific talents. Additionally, there are
        external scholarships and grants available from various organizations.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "6",
    label: "What is the typical academic year like in U.S. universities?",
    children: (
      <p className="textContent">
        {" "}
        The academic year is typically divided into two semesters (fall and
        spring) or quarters, depending on the institution. There may also be a
        summer session for additional courses.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "7",
    label:
      "What kind of academic support is available for international students?",
    children: (
      <p className="textContent">
        {" "}
        Universities offer various support services, including tutoring centers,
        writing labs, academic advising, and international student offices to
        help with academic and cultural adjustment
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "8",
    label: "What are the options for staying in the USA after graduation?",
    children: (
      <p className="textContent">
        International students can apply for Optional Practical Training (OPT),
        which allows them to work in their field of study for up to 12 months
        (or up to 36 months for STEM graduates). Additionally, some may pursue
        H-1B work visas if they secure a job offer from a U.S. employer.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "9",
    label: "How can I build a professional network while studying in the USA?",
    children: (
      <p className="textContent">
        {" "}
        Students can build their network by joining student organizations,
        participating in internships, attending career fairs, engaging in
        on-campus events, and connecting with alumni through university career
        services.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "10",
    label: "Can international students work while studying in the USA?",
    children: (
      <p className="textContent">
        Yes, international students with an F-1 visa can work on-campus for up
        to 20 hours per week during the academic year and full-time during
        breaks. Off-campus work is permitted under certain conditions, such as
        Curricular Practical Training (CPT) and Optional Practical Training
        (OPT).
      </p>
    ),
    style: panelStyle,
  },
];
const IrelandCountry = () => {
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

export default IrelandCountry;
