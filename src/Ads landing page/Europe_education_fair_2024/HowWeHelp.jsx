import "./ADS.css";

const servicesData = [
    {
        id:1,
        img: "https://strapi.orientspectra.com/uploads/graduation_hat_transformed_c164cd6474.webp",
        title: "Profile Evaluation",
    },
    {
        id:2,
        img: "https://strapi.orientspectra.com/uploads/graduation_hat_transformed_c164cd6474.webp",
        title: "University & Course Selection",
    },
    {
        id:3,
        img: "https://strapi.orientspectra.com/uploads/graduation_hat_transformed_c164cd6474.webp",
        title: "Application Submission",
    },
    {
        id:4,
        img: "https://strapi.orientspectra.com/uploads/graduation_hat_transformed_c164cd6474.webp",
        title: "University Admission Decision",
    },
    {
        id:5,
        img: "https://strapi.orientspectra.com/uploads/graduation_hat_transformed_c164cd6474.webp",
        title: "Visa Application Process",
    },
    {
        id:6,
        img: "https://strapi.orientspectra.com/uploads/graduation_hat_transformed_c164cd6474.webp",
        title: "Visa Guidance",
    },
    {
        id:7,
        img: "https://strapi.orientspectra.com/uploads/graduation_hat_transformed_c164cd6474.webp",
        title: "Education Loan Support",
    },
    {
        id:8,
        img: "https://strapi.orientspectra.com/uploads/graduation_hat_transformed_c164cd6474.webp",
        title: "Pre - Departure Assistance",
    }
]

const HowWeHelp =()=>{
    return(
        <div className="Help_container">
            <div className="Help_content">
            <div className="HelpImage_container">
                <img src="https://strapi.orientspectra.com/uploads/9ef1105f95e5ccfedd230ba0c134d318_a0afcb3b3e.webp" alt=""/>
            </div>
                <div className="Help_details">
                <h1>Guidelines to Achieve Your Dream Destination</h1>
                <p>We providing a step-by-step process to help you achieve admission to your dream university for studying abroad. 
                   Our comprehensive approach ensures that you are fully prepared and guided at every stage of the journey:</p>
                <div className="Help-list">
                    <ul>
                   <li className="Help-list-Box">
                        <img src="https://strapi.orientspectra.com/uploads/graduation_hat_transformeds_14a58fb0ea.webp" alt="" />
                        <p>Profile Evaluation</p>
                    </li>
                    <li className="Help-list-Box">
                        <img src="https://strapi.orientspectra.com/uploads/graduation_hat_transformeds_14a58fb0ea.webp" alt="" />
                        <p>University & Course Selection</p>
                    </li><li className="Help-list-Box">
                        <img src="https://strapi.orientspectra.com/uploads/graduation_hat_transformeds_14a58fb0ea.webp" alt="" />
                        <p>Application Submission
                        </p>
                    </li><li className="Help-list-Box">
                        <img src="https://strapi.orientspectra.com/uploads/graduation_hat_transformeds_14a58fb0ea.webp" alt="" />
                        <p>University Admission Decision</p>
                    </li>
                    </ul>

                    <ul>
                   <li className="Help-list-Box">
                        <img src="https://strapi.orientspectra.com/uploads/graduation_hat_transformeds_14a58fb0ea.webp" alt="" />
                        <p>Visa Application Process</p>
                    </li>
                    <li className="Help-list-Box">
                        <img src="https://strapi.orientspectra.com/uploads/graduation_hat_transformeds_14a58fb0ea.webp" alt="" />
                        <p>Visa Guidance</p>
                    </li><li className="Help-list-Box">
                        <img src="https://strapi.orientspectra.com/uploads/graduation_hat_transformeds_14a58fb0ea.webp" alt="" />
                        <p>Education Loan Support</p>
                    </li><li className="Help-list-Box">
                        <img src="https://strapi.orientspectra.com/uploads/graduation_hat_transformeds_14a58fb0ea.webp" alt="" />
                        <p>Pre - Departure Assistance</p>
                    </li>
                    </ul>
                </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default HowWeHelp;