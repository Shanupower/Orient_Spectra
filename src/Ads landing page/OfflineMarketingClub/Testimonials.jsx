import Marquee from "react-fast-marquee";
import "./ADS.css";
import Quote from "../../assets/Country/quote.png";
import Button from "../../Component/Common/Button";

const Testimonials =() =>{
    const TestimonialData = [
        {
            id: 1,
            name: "RamaKrishna",
            description: "Hello everyone ! I'm Ramakrishna Gandikota. I recommend Orient Spectra Consultancy for abroad studies. After years of visa rejections, they helped me secure my visa with excellent service."
        },
        {
            id: 2,
            name: "RamaKrishna",
            description: "Hiii everyone ! I'm Ramakrishna Gandikota. I recommend Orient Spectra Consultancy for abroad studies. After years of visa rejections, they helped me secure my visa with excellent service."
        },
        {
            id: 3,
            name: "RamaKrishna",
            description: "Hello everyone ! I'm Ramakrishna Gandikota. I recommend Orient Spectra Consultancy for abroad studies. After years of visa rejections, they helped me secure my visa with excellent service."
        },
        {
            id: 4,
            name: "RamaKrishna",
            description: "Hello everyone ! I'm Ramakrishna Gandikota. I recommend Orient Spectra Consultancy for abroad studies. After years of visa rejections, they helped me secure my visa with excellent service."
        },
        {
            id: 5,
            name: "RamaKrishna",
            description: "Hello everyone ! I'm Ramakrishna Gandikota. I recommend Orient Spectra Consultancy for abroad studies. After years of visa rejections, they helped me secure my visa with excellent service."
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