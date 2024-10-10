import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, IconButton, useMediaQuery } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import "./index.css";
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

const LeadFormPopUp = () => {
  const isMd = useMediaQuery("(max-width:1024px)");
  const isSm = useMediaQuery("(max-width:986px)");
  const isLg = useMediaQuery("(max-width: 1280px)");
  const [open, setOpen] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null); // reCAPTCHA token

  useEffect(() => {
    setOpen(true);
  }, []);

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Intake_Year: "",
    Country:"",
    Source: "UK & EU EDU FAIR",
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitData = async () => {
    const api = "https://strapi.orientspectra.com/api/leadform-popups";
    try {
      const response = await axios.post(api, {
        data: formData,
        captchaToken, // Send reCAPTCHA token to backend
      });
      if (response.status === 200) {
        setFormSubmitted(true);
        setFormData({
          Name: "",
          Email: "",
          Mobile: "",
          Intake_Year: "",
          Country: "",
          Source: "UK & EU EDU FAIR",
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

    if (formData.Name === "") {
      newErrors.Name = "First Name is Required";
    }
    if (formData.Email === "") {
      newErrors.Email = "Email Id is Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      newErrors.Email = "Email is not valid";
    }
    if (formData.Mobile === "") {
      newErrors.Mobile = "Enter the Mobile Number";
    } else if (!/^\d{10}$/.test(formData.Mobile)) {
      newErrors.Mobile = "Enter the valid 10 digit mobile number";
    }
    if (formData.Intake_Year === "") {
      newErrors.Intake_Year = "Intake Year is Required";
    }
    if (formData.Country === "") {
      newErrors.Country = "Select your Destination";
    }
    return newErrors;
  };

  const handleSubmitValidation = (event) => {
    event.preventDefault();
    const validationErrors = Validation();
    if (Object.keys(validationErrors).length === 0 && captchaToken) {
      handleSubmitData();
    } else {
      setErrors(validationErrors);
      if (!captchaToken) {
        alert('Please complete the CAPTCHA');
      }
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
        onClose={handleClose}
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
              onClick={handleClose}
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
          <h2 className="DailogTitle">Europe & UK Education Fair <span>2024</span></h2>
          <h3>09th Nov | Hyatt Place, Banjara Hills</h3>
          <p>Register now & get free TOEFL coaching</p>
          <DialogContent>
            <form onSubmit={handleSubmitValidation}>
            <div className="popup-text-feild">
              <div className="popup-form-group">
              <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  className="popup-input-field"
                  onChange={handleChange}
                  value={formData.Name}
                />
                {errors.Name && (
                  <p style={{ color: "red" }}>{errors.Name}</p>
                )}
              </div>
              <div className="popup-form-group">
              <input
                  type="text"
                  name="Email"
                  placeholder="Email"
                  className="popup-input-field"
                  onChange={handleChange}
                  value={formData.Email}
                />
                {errors.Email && <p style={{ color: "red" }}>{errors.Email}</p>}
              </div>
              <div className="popup-form-group">
              <input
                  type="text"
                  name="Mobile"
                  placeholder="Mobile Number"
                  className="popup-input-field"
                  onChange={handleChange}
                  value={formData.Mobile}
                />
                {errors.Mobile && <p style={{ color: "red" }}>{errors.Mobile}</p>}
              </div>
              <div className="popup-form-group">
              <input
                  type="text"
                  name="Intake_Year"
                  placeholder="Intake Year" 
                  className="popup-input-field"
                  onChange={handleChange}
                  value={formData.Intake_Year}
                />
                {errors.Intake_Year && (
                  <p style={{ color: "red" }}>{errors.Intake_Year}</p>
                )}
              </div>

              <div className="popup-form-group">
              <select
                type="text"
                name="Country"
                className="popup-input-field"
                onChange={handleChange}
                value={formData.Country} >

                <option value="">Select Country</option>
                  <option value="UK">UK</option>
                  <option value="Europe">Europe</option>

              </select>
                {errors.Country && (
                  <p style={{ color: "red" }}>{errors.Country}</p>
                )}
            </div>

              {/* reCAPTCHA component */}
              {/* <div style={{ transform: 'scale(0.85)', transformOrigin: '0 0' }}>
              <ReCAPTCHA
                sitekey="6LcXTF0qAAAAACZ0_JszhJnIkkhyi6P9bF-zEPm6" // Replace with your site key
                onChange={handleCaptchaChange}
              />
              </div> */}
              
              <input type="hidden" name="Source" className="input-field" value={formData.Source} />
              <button className="popup-form-container-button" type="submit">
              Book A Free Call
            </button>
            </div>  
            </form>
            <p onClick={handleClose} className='SkipNow'>Skip Now </p>
          </DialogContent>
          </div>
          <img src="https://strapi.orientspectra.com/uploads/388_X_516_a4d2a9e44a.jpg" alt="EventImage" className='ImageContainer'/>
          </div>
           
          </>
        )}
      </Dialog>
    </div>
  );
};

export default LeadFormPopUp;
