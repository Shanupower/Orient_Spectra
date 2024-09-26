import "./ADS.css";


const servicesData = [
    {
        id:1,
        img: "https://strapi.orientspectra.com/uploads/0d611578_798d_418d_bd15_4e5ee5488f3f_copy_6f22f967a4.png",
        title: "One to one interaction with the University ",
    },
    {
        id:2,
        img: "https://strapi.orientspectra.com/uploads/0d611578_798d_418d_bd15_4e5ee5488f3f_copy_6f22f967a4.png",
        title: "Low Tuition Fee",
    },
    {
        id:3,
        img: "https://strapi.orientspectra.com/uploads/0d611578_798d_418d_bd15_4e5ee5488f3f_copy_6f22f967a4.png",
        title: "Spot offer confirmation",
    },
    {
        id:4,
        img: "https://strapi.orientspectra.com/uploads/0d611578_798d_418d_bd15_4e5ee5488f3f_copy_6f22f967a4.png",
        title: "Apply with IELTS/TOEFL ",
    },
    {
        id:5,
        img: "https://strapi.orientspectra.com/uploads/0d611578_798d_418d_bd15_4e5ee5488f3f_copy_6f22f967a4.png",
        title: "Free IELTS Coaching*( after  registration)",
    },
    {
        id:6,
        img: "https://strapi.orientspectra.com/uploads/0d611578_798d_418d_bd15_4e5ee5488f3f_copy_6f22f967a4.png",
        title: "Early bord discounts upto 2  Lakhs* on the tuition fees ",
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