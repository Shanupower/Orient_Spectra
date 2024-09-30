import "./ADS.css";


const servicesData = [
    {
        id:1,
        img: "https://strapi.orientspectra.com/uploads/0d611578_798d_418d_bd15_4e5ee5488f3f_copy_6f22f967a4.png",
        title: "Apply now get early bird scholarships",
    },
    {
        id:2,
        img: "https://strapi.orientspectra.com/uploads/0d611578_798d_418d_bd15_4e5ee5488f3f_copy_6f22f967a4.png",
        title: "No IELTS or English language test ",
    },
    {
        id:3,
        img: "https://strapi.orientspectra.com/uploads/0d611578_798d_418d_bd15_4e5ee5488f3f_copy_6f22f967a4.png",
        title: "2 year courses with 1 year internship’s",
    },
    {
        id:4,
        img: "https://strapi.orientspectra.com/uploads/0d611578_798d_418d_bd15_4e5ee5488f3f_copy_6f22f967a4.png",
        title: "2 years stay back option",
    },
    {
        id:5,
        img: "https://strapi.orientspectra.com/uploads/0d611578_798d_418d_bd15_4e5ee5488f3f_copy_6f22f967a4.png",
        title: "One-on-one interaction with University delegates",
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
            <h1>Why Should You Attend</h1>
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