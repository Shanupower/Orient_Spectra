import { useEffect } from "react";
import EUHero from "./Hero.jsx";
import WhyWe_Attend from "./WhyWe_Attend.jsx";
import WhyChoose from "../Training_Program/WhyChoose";
import Accredations from "../Training_Program/Accredations";
import TestimonialsCarousel from "../SrhUniversityEvent/TestimonialCarousal.jsx";


const EU_LandingPage =() =>{
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <EUHero />
            <WhyWe_Attend />
            <WhyChoose />
            <TestimonialsCarousel />
            <Accredations />
        </>

    )
}
export default EU_LandingPage;