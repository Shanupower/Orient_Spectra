import { useEffect } from "react";
import Accredations from "../Training_Program/Accredations";
import TestimonialsCarousel from "../SrhUniversityEvent/TestimonialCarousal";
import UKHero from "./UKHero";
import Why_Attend from "./Why_Attend";
import WhyChoose from "../Training_Program/WhyChoose";


const UK_LandingPage =() =>{
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <UKHero />
            <Why_Attend />
            <WhyChoose />
            <TestimonialsCarousel />
            <Accredations /> 
        </>

    )
}
export default UK_LandingPage;