import { useState } from "react";
import Divider from "../Component/Common/Divider";
import "./index.css";
import Marquee from "react-fast-marquee";
import axios from "axios";

const Discovery = () => {

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Intake_Year: "",
    Source: "Homepage",
  });

  const [errors, setErrors] = useState({});

  const handleSubmitData = async () => {
    const api = "https://strapi.orientspectra.com/api/lead-form-hompages";
    try {
      const response = await axios.post(api, {
        data: formData,
      });
      console.log(formData,"formdata");
      if (response.status === 200) {
        alert("Form submitted successfully");

       
        setFormData({
          Name: "",
          Email: "",
          Mobile: "",
          Intake_Year: "",
          Source: "Homepage",
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

  return (
    <div className=" discovery-section">
      <div className=" discovery_Container">
        <div className="dicovery_card">
          <h1>19+</h1>
          <p>Years Experience</p>
        </div>
        <div className="dicovery_card">
          <h1>15000+</h1>
          <p>Successful Admits</p>
        </div>
        <div className="dicovery_card">
          <h1>10+</h1>
          <p>Study Destinations
          </p>
        </div>
        <div className="dicovery_card">
          <h1>500+</h1>
          <p>Global Universities
          </p>
        </div>
        <div className="dicovery_card">
          <h1>98%</h1>
          <p>Visa Success Rate</p>
        </div>
      </div>
      <div className="discoverTextCard">
        <p>
        Orient Spectra provides end-to-end guidance with your study abroad goal across university connects, visa application, 
        and loan assistance. Our student-focussed offerings and expert counselling has made us the top overseas education consultants 
        in Hyderabad.
        </p>

        <div className="Marguee">
        <h1>Register for Personalized Counselling</h1>
        <form onSubmit={handleSubmitValidation}>
          <div className="text-feild-container">
            <div className="form-group">
            <input
                type="text"
                name="Name"
                placeholder="Name"
                className="input-field"
                onChange={handleChange}
                value={formData.Name}
              />
              {errors.Name && (
                <p style={{ color: "red" }}>{errors.Name}</p>
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
                name="Intake_Year"
                placeholder="Intake Year" 
                className="input-field"
                onChange={handleChange}
                value={formData.Intake_Year}
              />
              {errors.Intake_Year && (
                <p style={{ color: "red" }}>{errors.Intake_Year}</p>
              )}
            </div>
            <input type="hidden" name="Source" className="input-field" value={formData.Source} />
            <button className="form-container-button" type="submit">
            REGISTER NOW
          </button>
          </div>
          
        </form>
          {/* <Marquee className="MargueeText" speed={100}> Start Your Abroad Study Journey. </Marquee> */}
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Discovery;
