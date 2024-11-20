import "./index.css";
import Button from "../../Component/Common/Button";
import Popup_Form from "./Popup_Form";
import { useState } from "react";

const TrainingHero =() =>{
const [isOpen, setIsOpen] = useState(false);
const handleClick = () => {
    window.open('https://wa.me/+919281161858?text', '_blank');
  };
  
//   const closePopup = () => {
//     setIsOpen(false); 
//   };

    return(
        <div className="hero-container">
            <div className="hero-section">
                    <h1>No-Cost  <span> IELTS/TOEFL </span> <br />Training Program</h1>
                    <p>We are excited to announce a new initiative designed to enhance our support for 
                       students preparing for overseas education.
                    </p>
                    <Button
                        text="Register for Free Training"
                        arrow={true}
                        onClick={() => handleClick()}
                        className="StudyButtonCard"
                    />
            </div>
            {/* {isOpen &&  (
                <Popup_Form closePopup={closePopup} />
            )} */}
        </div>
    )
}

export default TrainingHero;