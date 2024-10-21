import Marquee from "react-fast-marquee";
import "./ADS.css";
import Quote from "../../assets/Country/quote.png";
import Button from "../../Component/Common/Button";

const Testimonials =() =>{
    const TestimonialData = [
        {
            id: 1,
            name: "JayaSri",
            description: "Orient spectra has helped me a lot in my master's process. My university offer letter came within five days and I got my visa within 15 days."
        },
        {
            id: 2,
            name: "Shashi Kumar",
            description: "Student mother extends her appreciation to Orient Spectra! Here is her heartfelt thanks as we helped to achieve her son's dream of studying in US. Your success stories inspire us every day!"
        },
        {
            id: 3,
            name: "Alekhya",
            description: "I've got to know about Orient Spectra from my brother who's doing his Master's in London, University of East London. They have helped me with the university listings and admission process."
        },
        {
            id: 4,
            name: "Swetha Sree",
            description: "I got admission at University of Europe in Berlin for an MBA International Business. I would like to thank Ramya and Nandini actually for providing me complete support since the beginning of the application process then getting to the visa documents."
        },

    ]
    return(
        <div className="Testimonial_section">
            <Marquee  speed={100}>
                <div className="Testimonial_Box_Container">
                {TestimonialData.map((item)=>(
                <div className="Testimonial_Box" key={item.id}>
                    <div className="quoteImge">
                    <img src={Quote} alt="" />
                    </div>
                    <p>{item.description}</p>
                    <h1>- {item.name}</h1>
                </div>
                ))}
                </div>
            </Marquee>

            <div className="Acedemic_cantainer__header">
        <p>Fastrack your Admission to Leading <br/>Global Universities</p>
        <div className="discovermoreButton">
          <Button text="Schedule A Call" arrow={true} />
        </div>
        </div>
            </div>
    )
}

export default Testimonials;