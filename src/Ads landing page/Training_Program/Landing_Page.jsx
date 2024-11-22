import { useEffect } from "react";
import Accredations from "./Accredations";
import Hightlights from "./Highlights";
import Overview from "./Overview";
import TrainingHero from "./TrainingHero";
import WhyChoose from "./WhyChoose";
import Testimonials from "../../Landing_page/Testimonial"
import TopDestinations from "./TopDestinations";
import LSQPortalWidget from "./LSQ_widget";

const TrainingProgram =() =>{
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <LSQPortalWidget/>
            <TrainingHero />
            <WhyChoose />
            <Overview />
            <Hightlights />
            <TopDestinations />
            <Testimonials />
            <Accredations />
        </>
    )
}

export default TrainingProgram;