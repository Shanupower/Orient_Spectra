import Img1 from "../../assets/Training_Program/Training.webp";
import Img2 from "../../assets/Training_Program/Graduate.webp";
import Img3 from "../../assets/Training_Program/Money.webp";

const Hightlights =()=>{
    return (
        <div className="Highlights-container">
            <div className="Highlights-section">
                <div className="HighlightsBox">
                    <img src={Img1} alt="training"/>
                    <h2>Comprehensive Training</h2>
                    <p>Tailored to equip students with the skills necessary for high-stakes IELTS/TOEFL exams.</p>
                </div>
                <div className="HighlightsBox">
                    <img src={Img3} alt="Graduate" />
                    <h2>No Additional Cost</h2>
                    <p>The deposit will be refunded upon completion of the enrollment and admissions process, making this program financially accessible.</p>
                </div>
                <div className="HighlightsBox">
                    <img src={Img2} alt="Money" />
                    <h2>Enhanced Student Success</h2>
                    <p>By providing structured preparation, we aim to increase the likelihood of student success in both exams and subsequent application stages</p>
                </div>
            </div>
        </div>
    )
}
export default Hightlights;