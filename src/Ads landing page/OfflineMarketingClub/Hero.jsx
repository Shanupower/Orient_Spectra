import { useEffect, useState } from "react";
import "./ADS.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
// import emailjs from "emailjs-com";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location =useLocation();

  const [formData, setFormData] = useState({
    First_name: "",
    Last_name: "",
    Email: "",
    Mobile: "",
    Intake_year: "",
    Intake_month: "",
    Source: location.pathname,
  });

  const [errors, setErrors] = useState({});

  const handleSubmitData = async () => {
    const api = "https://strapi.orientspectra.com/api/ads-landing-pages/";
    try {
      const response = await axios.post(api, {
        data: formData,
      });
      if (response.status === 200) {
        alert("Form submitted successfully");

        // Send email via EmailJS
        // emailjs
        //   .send(
        //     "service_28ul4yvw",
        //     "template_7z0xwsi1",
        //     {
        //       First_name: formData.First_name,
        //       Last_name: formData.Last_name,
        //       Email: formData.Email,
        //       Mobile: formData.Mobile,
        //       Intake_year: formData.Intake_year,
        //       Intake_month: formData.Intake_month,
        //     },
        //     "6612831"
        //   )
        //   .then((result) => {
        //     console.log("Email sent successfully:", result.text);
        //   })
        //   .catch((error) => {
        //     console.error("Failed to send email:", error);
        //   });

        // Reset form data
        setFormData({
          First_name: "",
          Last_name: "",
          Email: "",
          Mobile: "",
          Intake_year: "",
          Intake_month: "",
          Source: location.pathname,
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

    if (formData.First_name === "") {
      newErrors.First_name = "First Name is Required";
    }
    if (formData.Last_name === "") {
      newErrors.Last_name = "Last Name is Required";
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
    if (formData.Intake_year === "") {
      newErrors.Intake_year = "Intake Year is Required";
    }
    if (formData.Intake_month === "") {
      newErrors.Intake_month = "Intake Month is Required";
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

  return (
    <div className="Leadgeneration-container section">
      <div className="Leadgeneration-content section">
        <h1>January  2025 Intake for Germany & France  is Now Open</h1>
        <p>
        Attend our Europe  Education Fair 2024 to talk directly with university delegates and select the best university 
        and course for your career goal. Our experts will walk you through application process, scholarship and loan opportunities, 
        and guide you through visa process.
        </p>

        <ul>
          <li>Direct interaction with University representatives</li>
          <li>Application submission within 24 hours</li>
          <li>Affordable tuition fees</li>
          <li>Scholarship opportunities</li>
        </ul>
      </div>
      <div className="form-container">
        <p>Fill out the form below to register now:</p>
        <form onSubmit={handleSubmitValidation}>
          <div className="text-container">
            <div className="form-group">
              <input
                type="text"
                name="First_name"
                placeholder="First Name"
                className="input-field"
                onChange={handleChange}
                value={formData.First_name}
              />
              {errors.First_name && (
                <p style={{ color: "red" }}>{errors.First_name}</p>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Last_name"
                placeholder="Last Name"
                className="input-field"
                onChange={handleChange}
                value={formData.Last_name}
              />
              {errors.Last_name && (
                <p style={{ color: "red" }}>{errors.Last_name}</p>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Email"
                placeholder="Email"
                className="input-field"
                onChange={handleChange}
                value={formData.Email}
              />
              {errors.Email && <p style={{ color: "red" }}>{errors.Email}</p>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Mobile"
                placeholder="Mobile Number"
                className="input-field"
                onChange={handleChange}
                value={formData.Mobile}
              />
              {errors.Mobile && <p style={{ color: "red" }}>{errors.Mobile}</p>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Intake_year"
                placeholder="Intake Year"
                className="input-field"
                onChange={handleChange}
                value={formData.Intake_year}
              />
              {errors.Intake_year && (
                <p style={{ color: "red" }}>{errors.Intake_year}</p>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Intake_month"
                placeholder="Intake Month"
                className="input-field"
                onChange={handleChange}
                value={formData.Intake_month}
              />
              {errors.Intake_month && (
                <p style={{ color: "red" }}>{errors.Intake_month}</p>
              )}
            </div>
            <input type="hidden" name="source" className="input-field" value={formData.Source} />
          </div>
          <button className="form-container-button" type="submit">
            REGISTER NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;