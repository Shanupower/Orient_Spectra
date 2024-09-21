import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import "./index.css";
import axios from 'axios';

const LeadFormPopUp = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Open the dialog when the component mounts (when the page loads)
    setOpen(true);
  }, []);

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Intake_Year: "",
    Source: "Eroupe EDU FAIR",
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitData = async () => {
    const api = "https://strapi.orientspectra.com/api/leadform-popups";
    try {
      const response = await axios.post(api, {
        data: formData,
      });
      console.log(formData,"formdata");
      if (response.status === 200) {
        setFormSubmitted(true);
       
        setFormData({
          Name: "",
          Email: "",
          Mobile: "",
          Intake_Year: "",
          Source: "Eroupe EDU FAIR",
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
        aria-describedby="popup-dialog-description"
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
          <div className="Dailog-container">
          <h2 className="DailogTitle">Europe Education Fair 2024</h2>
          <h3>5th Oct 2024 | Hyatt Palace Hyderabad</h3>
          <p>Fill out the form below to register now:</p>
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
              <input type="hidden" name="Source" className="input-field" value={formData.Source} />
              <button className="popup-form-container-button" type="submit">
              Book A Free Call
            </button>
            </div>  
            </form>
            <p onClick={handleClose} className='SkipNow'>Skip Now </p>
          </DialogContent>
          
          </div>

        )}
      </Dialog>
    </div>
  );
};

export default LeadFormPopUp;
