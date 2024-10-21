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
        <div className="Why-should-attend">
            <div className="Why-should-attend-content">
            <h1>Why Should You Attend ?</h1>
            <p>Orient Spectra provides end-to-end guidance with your study abroad goal across university connects, 
                visa application, and loan assistance. Our student-focussed offerings and expert counselling has made us 
                the top overseas education consultants in Hyderabad.
            </p>
            {servicesData.map((item)=> (  
                <div className="Benifits_Box">
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                </div>
            ))}
            </div>
            <div className="Why-should-attend-Image">
                <img src="https://strapi.orientspectra.com/uploads/Your_Gateway_to_a_World_of_Educational_Opportunities_jpg_a9c225c147.webp" alt=""/>
            </div>
        </div>
    )
}

export default Benifits;