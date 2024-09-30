import "./ADS.css";

const servicesData = [
    {
        id:1,
        img: "https://strapi.orientspectra.com/uploads/graduation_hat_transformed_c164cd6474.webp",
        title: "Public & Private Universities ",
    },
    {
        id:2,
        img: "https://strapi.orientspectra.com/uploads/graduation_hat_transformed_c164cd6474.webp",
        title: "Top Ranked Universities, Business & Design Schools",
    },
    {
        id:3,
        img: "https://strapi.orientspectra.com/uploads/graduation_hat_transformed_c164cd6474.webp",
        title: "Latest Courses in Demand",
    },
    {
        id:4,
        img: "https://strapi.orientspectra.com/uploads/graduation_hat_transformed_c164cd6474.webp",
        title: "Huge Scholarships",
    },
    {
        id:5,
        img: "https://strapi.orientspectra.com/uploads/graduation_hat_transformed_c164cd6474.webp",
        title: "Bachelor & Master programs",
    },
    {
        id:6,
        img: "https://strapi.orientspectra.com/uploads/graduation_hat_transformed_c164cd6474.webp",
        title: "Early bord discounts upto 2  Lakhs* on the tuition fees ",
    }
]

const EventDetails =()=>{
    return(
        <div className="Event_container">
            <div className="Event_content">
                <div className="Event_details">
                <h1>Planning to Study in Europe ?</h1>
                <h3><span>Orient Spectra - </span>Your Ultimate Destination for European Education</h3>
                <p>It is a unique opportunity for students to meet representatives from top universities worldwide, 
                    explore diverse courses, and gain insights into admission processes.Our counseling process is carefully 
                    crafted to help you identify the ideal university and course that match your profile, goals, and financial plan. 
                    We providing exclusive Opportunities like</p>
                {servicesData.map((item)=> (  
                    <div className="Benifits_Box">
                        <img src={item.img} alt="" />
                        <p>{item.title}</p>
                    </div>
                ))}
                </div>
                <div className="Image_container">
                <img src="https://strapi.orientspectra.com/uploads/GERMANY_refd_a4808e5eae.jpg" alt=""/>
                </div>
            </div>
            
        </div>
    )
}

export default EventDetails;


// SNY Cosmos – Your Ultimate Destination for European Education