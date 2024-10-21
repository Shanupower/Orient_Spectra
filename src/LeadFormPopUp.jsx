import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, IconButton, useMediaQuery } from '@mui/material';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import "./index.css";

const LeadFormPopUp = () => {
  const isMd = useMediaQuery("(max-width:1024px)");
  const isLg = useMediaQuery("(max-width: 1280px)");
  const [open, setOpen] = useState(true); // Open the dialog by default
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Intake_Year: "",
    Country: "",
    Source: "UK & EU EDU FAIR",
  });
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    setOpen(true);
  }, []);

  const handleSubmitData = async () => {
    const api = "https://strapi.orientspectra.com/api/leadform-popups";
    try {
      const response = await axios.post(api, {
        data: formData,
      });
      if (response.status === 200) {
        setFormData({
          Name: "",
          Email: "",
          Mobile: "",
          Intake_Year: "",
          Country: "",
          Source: "UK & EU EDU FAIR",
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
                        {errors.Name && <p style={{ color: "red" }}>{errors.Name}</p>}
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
                        {errors.Intake_Year && <p style={{ color: "red" }}>{errors.Intake_Year}</p>}
                      </div>
                      <div className="popup-form-group">
                        <select
                          name="Country"
                          className="popup-input-dropdown"
                          onChange={handleChange}
                          value={formData.Country}
                        >
                          <option value="">Select Country</option>
                          <option value="UK">UK</option>
                          <option value="Europe">Europe</option>
                        </select>
                        {errors.Country && <p style={{ color: "red" }}>{errors.Country}</p>}
                      </div>

                      <input type="hidden" name="Source" className="input-field" value={formData.Source} />
                      <button className="popup-form-container-button" type="submit">
                        Book A Free Call
                      </button>
                    </div>
                  </form>
                  <p onClick={handleClose} className='SkipNow'>Skip Now</p>
                </DialogContent>
              </div>
              <img src="https://strapi.orientspectra.com/uploads/388_X_516_uk_eu_58507af29d.webp" alt="EventImage" className='ImageContainer' />
            </div>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default LeadFormPopUp;
