import React, { useState } from 'react';
import axios from 'axios';
import "./index.css";
const LeadForm = ({ source }) => { 
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Intake_Year: "",
    Source: source,
  });

  const [errors, setErrors] = useState({});

  const handleSubmitData = async () => {
    const api = "https://strapi.orientspectra.com/api/lead-form-hompages";
    try {
      const response = await axios.post(api, {
        data: formData,
      });
      console.log(formData, "formdata");
      if (response.status === 200) {
        alert("Form submitted successfully");
        setFormData({
          Name: "",
          Email: "",
          Mobile: "",
          Intake_Year: "",
          Source: source,
        });
      }
    } catch (error) {
      console.log(error);
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

  const validate = () => {
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
      newErrors.Mobile = "Enter a valid 10-digit mobile number";
    }
    if (formData.Intake_Year === "") {
      newErrors.Intake_Year = "Intake Year is Required";
    }
    return newErrors;
  };

  const handleSubmitValidation = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      handleSubmitData();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
     {/* <div className="lead-form-container"> */}
      <h3>Register for Personalized Counselling</h3>
      <form onSubmit={handleSubmitValidation}>
        <div className="text-field container">
          <div className="form-fields">
            <input
              type="text"
              name="Name"
              placeholder="Name"
              className="input-fields"
              onChange={handleChange}
              value={formData.Name}
            />
            {errors.Name && <p style={{ color: "red" }}>{errors.Name}</p>}
          </div>

          <div className="form-fields">
            <input
              type="text"
              name="Email"
              placeholder="Email"
              className="input-fields"
              onChange={handleChange}
              value={formData.Email}
            />
            {errors.Email && <p style={{ color: "red" }}>{errors.Email}</p>}
          </div>

          <div className="form-fields">
            <input
              type="text"
              name="Mobile"
              placeholder="Mobile Number"
              className="input-fields"
              onChange={handleChange}
              value={formData.Mobile}
            />
            {errors.Mobile && <p style={{ color: "red" }}>{errors.Mobile}</p>}
          </div>

          <div className="form-fields">
            <input
              type="text"
              name="Intake_Year"
              placeholder="Intake Year"
              className="input-fields"
              onChange={handleChange}
              value={formData.Intake_Year}
            />
            {errors.Intake_Year && (
              <p style={{ color: "red" }}>{errors.Intake_Year}</p>
            )}
          </div>
          <input type="hidden" name="Source" className="input-fields" />
          <button className="form-button" type="submit">
            Book A Free Call
          </button>
        </div>
      </form>
      </>
  );
};

export default LeadForm;
