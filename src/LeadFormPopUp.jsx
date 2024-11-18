import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, IconButton, useMediaQuery } from '@mui/material';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import "./index.css";
import CommonEvent from './assets/Home_page/Common_Event.webp';

const LeadFormPopUp = () => {
  const isMd = useMediaQuery("(max-width:1024px)");
  const isLg = useMediaQuery("(max-width: 1280px)");
  const [open, setOpen] = useState(false); // Open the dialog by default
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    intake_year: "",
    country: "",
    source: "Walk- In Invitation - Orientspectra Website",
  });
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmitData = async () => {
    const api = "https://send.orientspectra.com/send-email-lead-form-popup";
    try {
      const response = await axios.post(api, formData, {
        headers: {
          "Content-Type": "application/json",  // Ensure content type is JSON
        }
      });
      if (response.status === 200) {
        setFormData({
          name: "",
          email: "",
          mobile: "",
          intake_year: "",
          country: "",
          source: "Walk- In Invitation - Orientspectra Website",
        });
        setFormSubmitted(true); // Set formSubmitted to true upon successful submission
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
    const validationErrors = Validation();

    if (Object.keys(validationErrors).length === 0) {
      handleSubmitData();
    } else {
      setErrors(validationErrors);
    }
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
        maxWidth="lg"
        PaperProps={{
          sx: {
            width: { xs: '90%', sm: '75%', md: '80%', lg: isLg ? "65%" : '51%' },
            maxWidth: 'none',
            position: 'relative',
            overflow: "visible",
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
        ) : (
          <>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: { xs: '-16px', lg: '-20px' },
                top: { xs: '-16px', lg: '-20px' },
                backgroundColor: '#e37d25',
                borderRadius: { lg: '50%', md: '80%' },
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
                <h2 className="DailogTitle">First Step to Study Abroad <span>2024</span></h2>
                <h3>Walk - In Invitation for Spot Profile Evaluation</h3>
                <h3 style={{colro:"black"}}>Orient Spectra, Himayatnagar - Hyderabad</h3>
                <p>Register now for Personalized Counselling</p>
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
                          value={formData.Name}
                        />
                        {errors.Name && <p style={{ color: "red" }}>{errors.Name}</p>}
                      </div>
                      <div className="popup-form-group">
                        <input
                          type="text"
                          name="email"
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
                          name="mobile"
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
                          name="intake_year"
                          placeholder="Intake Year"
                          className="popup-input-field"
                          onChange={handleChange}
                          value={formData.Intake_Year}
                        />
                        {errors.Intake_Year && <p style={{ color: "red" }}>{errors.Intake_Year}</p>}
                      </div>
                      <div className="popup-form-group">
                        <select
                          name="country"
                          className="popup-input-dropdown"
                          onChange={handleChange}
                          value={formData.Country}
                        >
                          <option value="">Select Country</option>
                          <option value="UK">USA</option>
                          <option value="UK">UK</option>
                          <option value="Germany">Germany</option>
                          <option value="France">France</option>
                          <option value="Australia">Australia</option>
                          <option value="Canada">Canada</option>
                          <option value="Ireland">Ireland</option>
                        </select>
                        {errors.Country && <p style={{ color: "red" }}>{errors.Country}</p>}
                      </div>

                      <input type="hidden" name="source" className="input-field" value={formData.Source} />
                      <button className="popup-form-container-button" type="submit">
                        Book A Free Call
                      </button>
                    </div>
                  </form>
                  <p onClick={handleClose} className='SkipNow'>Skip Now</p>
                </DialogContent>
              </div>
              <img src={CommonEvent} alt="EventImage" className='ImageContainer' />
            </div>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default LeadFormPopUp;
