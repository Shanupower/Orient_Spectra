import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, useMediaQuery } from '@mui/material';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import "./index.css";
import CommonEvent from './assets/Home_page/Common_Event.webp';
import Img1 from "./assets/Unvercity/Euschool-Poster-1.webp";
import Img2 from "./assets/Unvercity/Event1.webp";

const LeadFormPopUp = () => {
  const isSm = useMediaQuery("(max-width:986px)");
  const isMd = useMediaQuery("(max-width:1024px)");
  const isLg = useMediaQuery("(max-width: 1280px)");
  const [open, setOpen] = useState(false); // Open the dialog by default
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission
  const [selectedForm, setSelectedForm] = useState('form1');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    intake_year: "",
    source: "Education Fair Khamam - Website PopUp",
  });
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    const newSource =
      selectedForm === "form1"
        ? "Education Fair Khamam - Website PopUp"
        : "EU-Business School - Website PopUp";
    setFormData((prevData) => ({ ...prevData, source: newSource }));

    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [selectedForm]);

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
          source: selectedForm  === 'form1' ? "Education Fair Khamam - Website PopUp" : "EU-Business School - Website PopUp",
        });
        setFormSubmitted(true); // Set formSubmitted to true upon successful submission
      }
    } catch (errors) {
      console.log(errors);
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

  const handleRadioChange = (e) => {
    setSelectedForm(e.target.value); // Change the form based on selected radio button
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
            width: { xs: '90%', sm: '65%', md: '80%', lg: isLg ? "65%" : '51%' },
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
              <div className="RadioButtons">
                <RadioGroup
                  row
                  aria-labelledby="form-selection-group"
                  value={selectedForm}
                  onChange={handleRadioChange}
                  sx={{justifyContent:"center"}}
                >
                  <FormControlLabel value="form1" control={<Radio />} label="Education Fair" 
                    sx={{
                      fontSize: '13px'
                    }}
                    checked={selectedForm === 'form1'}
                    />
                  <FormControlLabel value="form2" control={<Radio />} label="EU-Business School" sx={{
                      fontSize: '13px'
                    }}
                    checked={selectedForm === 'form2'}/>
                </RadioGroup>
              </div>
              {selectedForm === 'form1' ? (
                <>
                  <h2 className="DailogTitle">Exclusive <span>Abroad Education Fair </span></h2>
                  <h3>on <span>22nd December </span>Hotel Grand Gayathri, Khammam</h3>
                  <p>Register for Personalized Counselling</p>
                </>
              ) : (
                <>
                  <h2 className="DailogTitle">Apply for <span>EU Business School</span></h2>
                  <h3>& Get <span>Rs 2 Lakhs</span> Discount*</h3>
                  <p>Register before 21st December</p>
                </>
              )}
                <DialogContent>
                {selectedForm === 'form1' ? (
                  <>
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
                        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
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
                        {errors.intake_year && <p style={{ color: "red" }}>{errors.intake_year}</p>}
                      </div>

                      <input type="hidden" name="source" className="input-field" value={formData.source} />
                      <button className="popup-form-container-button" type="submit">
                        Book A Free Call
                      </button>
                    </div>
                  </form>
                  </>
                  ) : (
                    <>
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
                        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
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
                        {errors.intake_year && <p style={{ color: "red" }}>{errors.intake_year}</p>}
                      </div>

                      <input type="hidden" name="source" className="input-field" value={formData.source} />
                      <button className="popup-form-container-button" type="submit">
                        Book A Free Call
                      </button>
                    </div>
                  </form>
                  </>
                  )}
                  <p onClick={handleClose} className='SkipNow'>Skip Now</p>
                </DialogContent>
              </div>
              {selectedForm === 'form1' ? (
              <img src={Img2} alt="EventImage" className='ImageContainer' /> ):(
                <img src={Img1} alt="EventImage" className='ImageContainer' />
              )}
            </div>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default LeadFormPopUp;
