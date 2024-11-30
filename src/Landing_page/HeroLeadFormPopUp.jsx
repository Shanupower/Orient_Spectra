import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, IconButton, useMediaQuery } from '@mui/material';
// import ReCAPTCHA from "react-google-recaptcha";
import "./index.css";
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import CommonEvent from '../assets/Home_page/Common_Event.webp';
import Img1 from "../assets/Unvercity/Euschool-Poster-1.webp";


const LeadFormPopUp = ({closePopup}) => {
  const isMd = useMediaQuery("(max-width:1024px)");
  const isSm = useMediaQuery("(max-width:986px)");
  const isLg = useMediaQuery("(max-width: 1280px)");
  const [open, setOpen] = useState(false);
  // const [captchaToken, setCaptchaToken] = useState(null); // reCAPTCHA token

  useEffect(() => {
    setOpen(true);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    intake_year: "",
    // country: "",
    source: "SPOT Assesment for SRH University - Orientspectra Website",
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitData = async () => {
    console.log("Sending data to API...");
   
    const api = "https://send.orientspectra.com/send-email-lead-form-popup";
    try {
      const response = await axios.post(api, formData, {
        headers: {
          "Content-Type": "application/json",  // Ensure content type is JSON
          // If you are using a CAPTCHA, include the token here
          // captchaToken: captchaToken
        }
      });
      // const response = await axios.post(api, {
      //   data: formData,
      //   // captchaToken, // Send reCAPTCHA token to backend
      // });
      if (response.status === 200) {
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          intake_Year: "",
          country: "",
          source: "SPOT Assesment for SRH University",
        });
      }
    } catch (errors) {
      console.log(errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Mobile") {
      if (/^\d*$/.test(value) && value.length <= 10) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const Validation = () => {
    const newErrors = {};

    if (formData.name === "") {
      newErrors.name = "First Name is Required";
    }
    if (formData.email === "") {
      newErrors.email = "Email Id is Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (formData.mobile === "") {
      newErrors.mobile = "Enter the Mobile Number";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter the valid 10 digit mobile number";
    }
    if (formData.intake_year === "") {
      newErrors.intake_year = "Intake Year is Required";
    }
    if (formData.country === "") {
      newErrors.country = "Select your Destination";
    }
    return newErrors;
  };

  const handleSubmitValidation = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    const validationErrors = Validation();
    // if (Object.keys(validationErrors).length === 0 && captchaToken) {
    //   handleSubmitData();
    // } else {
    //   setErrors(validationErrors);
    //   if (!captchaToken) {
    //     alert('Please complete the CAPTCHA');
    //   }
    // }

    if (Object.keys(validationErrors).length === 0) {
      handleSubmitData();
    } else {
      setErrors(validationErrors);
      // if (!captchaToken) {
        // alert('Please complete the CAPTCHA');
      // }
    }
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token); // Store reCAPTCHA token in state
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={closePopup}
        aria-labelledby="popup-dialog-title"
        aria-describedby="popup-dialog-description"
        maxWidth="lg"
        PaperProps={{
          sx: {
            width: { xs: '90%', sm: '75%', md: '80%', lg: isLg ? "65%" : '51%' },
            // width: { xs: '100%', sm: '80%', md: '70%', lg: '50%' },
            maxWidth: 'none',
            position: 'relative',
            overflow:  "visible",
          },
        }}
        className='DailogBox'
      >
        {formSubmitted ? (
        <div className="Success-container">
          <div className="success-message">
            <img src="https://strapi.orientspectra.com/uploads/luxa_org_no_background_green_double_circle_check_mark_78370_1749_c6ee2071c0.webp" alt="Success" />
            <h2>Thank you for your response!</h2>
            <p onClick={handleClose}>Back to Home</p>
          </div>
        </div>
        ):(
          <>
           <IconButton
              aria-label="close"
              onClick={closePopup}
              sx={{
                position: 'absolute',
                right: {xs: '-16px', lg:'-20px'},
                top: {xs: '-16px', lg:'-20px'},
                backgroundColor: '#e37d25',
                borderRadius: {lg: '50%', md: '80%'},
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                color: 'white', 
                '&:hover': {
                  backgroundColor: "#306398",
                  zIndex: 2,
                },
                zIndex: 3,
                width: { xs: '30px', sm: '35px', md: '45px' },
                height: { xs: '30px', sm: '35px', md: '45px' },
              }}
              >
              <CloseIcon />
            </IconButton>
          <div className="Dailog-container">
          <div className='DailogContent'>
          <h2 className="DailogTitle">Apply for <span>EU Business School </span></h2>
          <h3>& Get <span>Rs 2 Lakhs</span> Discount*</h3>
          <p>Register before 21st December</p>
          <DialogContent>
            <form onSubmit={handleSubmitValidation}>
            <div className="popup-text-feild">
              <div className="popup-form-group">
              <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="popup-input-field"
                  onChange={handleChange}
                  value={formData.name}
                />
                {errors.name && (
                  <p style={{ color: "red" }}>{errors.name}</p>
                )}
              </div>
              <div className="popup-form-group">
              <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="popup-input-field"
                  onChange={handleChange}
                  value={formData.email}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </div>
              <div className="popup-form-group">
              <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="popup-input-field"
                  onChange={handleChange}
                  value={formData.mobile}
                />
                {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
              </div>
              <div className="popup-form-group">
              <input
                  type="text"
                  name="intake_year"
                  placeholder="Intake Year" 
                  className="popup-input-field"
                  onChange={handleChange}
                  value={formData.intake_year}
                />
                {errors.intake_year && (
                  <p style={{ color: "red" }}>{errors.intake_year}</p>
                )}
              </div>

              {/* <div className="popup-form-group">
              <select
                type="text"
                name="country"
                className="popup-input-dropdown"
                onChange={handleChange}
                value={formData.country} >

                  <option value="">Select Country</option>
                  <option value="UK">USA</option>
                  <option value="UK">UK</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="Ireland">Ireland</option>
              </select>
                {errors.country && (
                  <p style={{ color: "red" }}>{errors.country}</p>
                )}
            </div> */}

              {/* reCAPTCHA component */}
              {/* <div style={{ transform: 'scale(0.85)', transformOrigin: '0 0' }}>
              <ReCAPTCHA
                sitekey="6LdjSl0qAAAAAOxzA0J_HjvwPIxua1iY0jdAFO4E" // Replace with your site key
                onChange={handleCaptchaChange}
              />
              </div> */}
              
              <input type="hidden" name="source" className="input-field" value={formData.source} />
              <button className="popup-form-container-button" type="submit">
              Book A Free Call
            </button>
            </div>  
            </form>
            <p onClick={closePopup} className='SkipNow'>Skip Now </p>
          </DialogContent>
          </div>
          <img src={Img1} alt="EventImage" className='ImageContainer'/>
          </div>
           
          </>
        )}
      </Dialog>
    </div>
  );
};

export default LeadFormPopUp;
