import "./ADS.css";


const servicesData = [
    {
        id:1,
        img: "https://strapi.orientspectra.com/uploads/0d611578_798d_418d_bd15_4e5ee5488f3f_copy_6f22f967a4.png",
        title: "Direct access to University delegates",
    },
    {
        id:2,
        img: "https://strapi.orientspectra.com/uploads/0d611578_798d_418d_bd15_4e5ee5488f3f_copy_6f22f967a4.png",
        title: "On spot profile evaluation",
    },
    {
        id:3,
        img: "https://strapi.orientspectra.com/uploads/0d611578_798d_418d_bd15_4e5ee5488f3f_copy_6f22f967a4.png",
        title: "Opportunity to get scholarships of over $12,000",
    },
    {
        id:4,
        img: "https://strapi.orientspectra.com/uploads/0d611578_798d_418d_bd15_4e5ee5488f3f_copy_6f22f967a4.png",
        title: "Get application fee waivers",
    },
    {
        id:5,
        img: "https://strapi.orientspectra.com/uploads/0d611578_798d_418d_bd15_4e5ee5488f3f_copy_6f22f967a4.png",
        title: "Register to get free IELTS coaching",
    },
    {
        id:6,
        img: "https://strapi.orientspectra.com/uploads/0d611578_798d_418d_bd15_4e5ee5488f3f_copy_6f22f967a4.png",
        title: "Complete guidance from university selection to visa process",
    }
]
const Benifits = () => {
    return(
        <div className="Benifts_container">
            <h1>Why You Should Attend</h1>
            <div className="Benifits_content">
            {servicesData.map((item)=> (  
                <div className="Benifits_Box">
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                </div>
            ))}
             </div> 
        </div>
    )
}

export default Benifits;