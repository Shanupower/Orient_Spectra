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
    label: "Top University in Ireland",
    children: (
      <p className="textContent">
        Trinity College Dublin is ranked as the leading university in Ireland by
        both the QS World Ranking and Times Higher Education ranking. It offers
        extensive opportunities for research and innovation, enhancing career
        prospects for students.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "Popular Courses for International Students in Ireland",
    children: (
      <p className="textContent">
        Popular courses for international students include business, computer
        science, engineering, medicine, pharmacy, and data science. The choice
        of course should align with individual interests, strengths, and career
        aspirations.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "Top Universities for the 2024-25 Intake in Ireland",
    children: (
      <p className="textContent">
        Apart from Trinity College Dublin, other prominent universities include
        University College Dublin, recognized as Ireland’s Global University,
        and RCSI University of Medicine and Health Sciences. These institutions
        provide diverse undergraduate and postgraduate programs.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Tuition Fees for International Students in Ireland",
    children: (
      <p className="textContent">
        Tuition fees vary depending on the university, program, and level of
        study. Generally, undergraduate programs range from €10,000 to €25,000
        per year, while postgraduate programs can cost between €10,000 and
        €35,000. Prospective students should verify specific fees for their
        chosen courses.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: "Part-Time Work Opportunities for Students in Ireland",
    children: (
      <p className="textContent">
        International students studying on a Stamp 2 visa (typically held by
        full-time students) can work part-time, up to 20 hours per week during
        term time, and full-time during holidays. It is important to manage work
        commitments alongside academic responsibilities effectively.
      </p>
    ),
    style: panelStyle,
  },
];
const IrelandCountry = () => {
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

export default IrelandCountry;
