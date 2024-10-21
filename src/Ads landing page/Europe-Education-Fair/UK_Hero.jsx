import { useEffect, useState } from "react";
import "./ADS.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
// import emailjs from "emailjs-com";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const [formData, setFormData] = useState({
    Full_name: "",
    Last_name: "",
    Email: "",
    Mobile: "",
    Intake_year: "",
    Source:location.pathname,
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

        // Reset form data
        setFormData({
          Full_name: "",
          Last_name: "",
          Email: "",
          Mobile: "",
          Intake_year: "",
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

    if (formData.Full_name === "") {
      newErrors.Full_name = "Full Name is Required";
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
        <h1>Europe Education Fair</h1>
        <p>
        Attend our Europe Education Fair 2024 to talk directly with university delegates and select the best 
        university and course for your career goal. Our experts will walk you through 
        application process, scholarship and loan opportunities, and guide you through visa process.
        </p>

        <ul>
          <li>Early-bird scholarship opportunities</li>
          <li>Direct interaction with University delegates</li>
          <li>Application submission within 24 hours</li>
          <li>Affordable tuition fees</li>
        </ul>
      </div>
      <div className="form-container1">
        <p>Fill out the form below to register now:</p>
        <form onSubmit={handleSubmitValidation}>
          <div className="text-feild-containers">
            <div className="form-groups">
              <input
                type="text"
                name="Full_name"
                placeholder="First Name"
                className="input-feild"
                onChange={handleChange}
                value={formData.Full_name}
              />
              {errors.Full_name && (
                <p style={{ color: "red" }}>{errors.Full_name}</p>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Email"
                placeholder="Email"
                className="input-feild"
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
                className="input-feild"
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
                className="input-feild"
                onChange={handleChange}
                value={formData.Intake_year}
              />
              {errors.Intake_year && (
                <p style={{ color: "red" }}>{errors.Intake_year}</p>
              )}
            </div>
            <input type="hidden" name="source" className="input-feild" value={formData.Source} />
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