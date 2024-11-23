import { useEffect } from "react";
import EventHero from "./EventHero";
import WhyChoose from "../Training_Program/WhyChoose";
import Accredations from "../Training_Program/Accredations";
import Event_Details from "./Event_Details";
import WhyShould_Attend from "./WhyWe_Attend";
import TestimonialsCarousel from "./TestimonialCarousal";


const Event_LandingPage =() =>{
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <EventHero />
            <Event_Details />
            <WhyShould_Attend />
            <WhyChoose />
            <TestimonialsCarousel />
            <Accredations />
        </>

    )
}
export default Event_LandingPage;