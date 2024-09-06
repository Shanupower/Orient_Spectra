import { useEffect, useState } from "react";
import "./ADS.css";
import { event } from "jquery";
import { useMediaQuery } from "@mui/material";
import { maxWidth } from "@mui/system";
import { Link } from "react-router-dom";


const Hero =()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        intakeYear: '',
        intakeMonth: '',
        course: '',
        comments: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "mobile") {
            if (/^\d*$/.test(value) && value.length <= 10) {  // Allow only numeric characters and limit to 10 digits
                setFormData(prevFormData => ({
                    ...prevFormData,
                    [name]: value
                }));
            }
        } else {
            setFormData ({
              ...formData,
              [name]: value,
            });
        }  
      };

      const Validation = () =>{
        const newErrors = {};

        if(formData.firstName === "") {
            newErrors.firstName = "First Name is Required";
        }
        if(formData.lastName === "") {
            newErrors.lastName = "Last Name is Required"
        }
        if(formData.email === ""){
            newErrors.email = "Email Id is Required";
        } else if(!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email ="Email is not valid";
        }
        if(formData.mobile === ""){
            newErrors.mobile = "Enter the Mobile Number";
        } else if(!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Enter the valid 10 digit mobile number"
        }
        if(formData.intakeYear === "") {
            newErrors.intakeYear = "Intake Year is Required"
        }
        if(formData.intakeMonth === ""){
            newErrors.intakeMonth = "Intake Month is Required"
        }
        if(formData.course === "") {
            newErrors.course = "Course is Required"
        }
        return newErrors;
      }

      const handleValidation = (event) => {
        event.preventDefault();
        const validationErrors = Validation();
        if (Object.keys(validationErrors).length === 0) {
            // No errors, form can be submitted
            console.log(formData);
            // You can also submit the form data or perform any other action here
        } else {
            // There are errors, update the errors state
            setErrors(validationErrors);
        }
    };
      
    return(
        <div className="Leadgeneration-container section">
            <div className="Leadgeneration-content section">
            <h1>November 2024 Intake for UK is Now Open</h1>
            <p>This is the last opportunity for students to begin their UK study journey this year.
            Attend our UK Education Fair 2024 to talk directly with university delegates and select the best university and course for your career goal. 
            Our experts will walk you through application process, scholarship and loan opportunities, and guide you through visa process.</p>

              <ul>
                <li>Direct interaction with University representatives</li>
                <li>Application submission within 24 hours</li>
                <li>Affordable tuition fees</li>
                <li>Scholarship opportunities</li>
              </ul>
           
            </div>
            <div className="form-container" >
                <p>Fill out the form below to register now:</p>
                <form onSubmit={handleValidation}>
                <div className="text-feild-container"> 
                    <div className="form-group">  
                        <input type="text" name="firstName" placeholder="First Name" className="input-field" onChange={handleChange}  value={formData.firstName} />
                        {errors.firstName && <p style={{color:"red"}} >{errors.firstName}</p>}
                    </div>
                    <div className="form-group">  
                        <input type="text" name="lastName" placeholder="last Name" className="input-field" onChange={handleChange}  value={formData.lastName} />
                        {errors.lastName && <p style={{color:"red"}} >{errors.lastName}</p>}
                    </div>
                    <div className="form-group">
                        <input type="text" name="email" placeholder="Email" className="input-field"  onChange={handleChange} value={formData.email}/>
                        {errors.email && <p style={{color:"red"}} >{errors.email}</p>}
                    </div>
                    <div className="form-group">
                        <input type="text" name="mobile" placeholder="Mobile Number" className="input-field" onChange={handleChange} value={formData.mobile}/>
                        {errors.mobile && <p style={{color:"red"}} >{errors.mobile}</p>}

                    </div>
                    <div className="form-group">
                        <input type="text" name="intakeYear" placeholder="Intake Year" className="input-field" onChange={handleChange}value={formData.intakeYear}/>
                        {errors.intakeYear && <p style={{color:"red"}} >{errors.intakeYear}</p>}

                    </div>
                    <div className="form-group">
                         <input type="text" name="intakeMonth" placeholder="Intake Month" className="input-field" onChange={handleChange} value={formData.intakeMonth}/>
                        {errors.intakeMonth && <p style={{color:"red"}} >{errors.intakeMonth}</p>}
                    </div>
                </div>
                    <button className="form-container-button" type="submit">GET ASSISTANCE</button>
                </form>
            </div>
            
        </div>
    );
};
export default Hero;