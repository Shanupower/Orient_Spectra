import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, IconButton, useMediaQuery } from '@mui/material';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import "./index.css";

const Popup_Form = ({closePopup}) => {
  const isMd = useMediaQuery("(max-width:1024px)");
  const isLg = useMediaQuery("(max-width: 1280px)");
  const [open, setOpen] = useState(false); // Open the dialog by default
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    preferred_exam: "",
    intake_year: "",
    country: "",
    source: "No cost IELTS/TOEFL Training Program - Orientspectra Website",
  });
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    setOpen(true);
  }, []);

  const handleSubmitData = async () => {
    const api = "https://send.orientspectra.com/send-email-nocost-ielts-toefl-training-program";
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
          preferred_exam: "",
          intake_year: "",
          country: "",
          source: "No cost IELTS/TOEFL Training Program - Orientspectra Website",
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
    if (formData.preferred_exam === "") {
      newErrors.preferred_exam = "Select your Preferred Exam";
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
        onClose={closePopup}
        aria-labelledby="popup-dialog-title"
        maxWidth="lg"
        PaperProps={{
          sx: {
            width: { xs: '90%', sm: '65%', md: '60%', lg: isLg ? "40%" : '30%' },
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
              onClick={closePopup}
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
                <h2 className="Dailog_Title">No-Cost <span>IELTS/TOEFL</span>Training Program</h2>
                {/* <h3>Walk - In Invitation for Spot Profile Evaluation</h3> */}
                <h3 style={{colro:"black"}}>Himayatnagar, Hyderabad</h3>
                <p>Register for Free IELTS/TOEFL Training</p>
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
                        <select
                          name="preferred_exam"
                          className="popup-input-dropdown"
                          onChange={handleChange}
                          value={formData.preferred_exam}
                        >
                          <option value="">Select Exam</option>
                          <option value="UK">IELTS</option>
                          <option value="UK">TOEFL</option>
                        </select>
                        {errors.preferred_exam && <p style={{ color: "red" }}>{errors.preferred_exam}</p>}
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
                      <div className="popup-form-group">
                        <select
                          name="country"
                          className="popup-input-dropdown"
                          onChange={handleChange}
                          value={formData.country}
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
                        {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
                      </div>

                      <input type="hidden" name="source" className="input-field" value={formData.source} />
                      <button className="popup-form-container-button" type="submit">
                        Book A Free Call
                      </button>
                    </div>
                  </form>
                  <p onClick={closePopup} className='SkipNow'>Skip Now</p>
                </DialogContent>
              </div>
            </div>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default Popup_Form;
