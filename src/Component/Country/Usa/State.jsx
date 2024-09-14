import "./Country.css";
import { Link } from "react-router-dom";
import Img1 from "../../../assets/Country/Group 6-2.png";
import Img2 from "../../../assets/Country/graph.png";
import { useState } from "react";
import axios from "axios";

const State = () => {

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Intake_Year: "",
    Source: "USA",
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
          Source: "USA",
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
    <div className="section">
      <div className="state-container ">
        <h1><span>Study Abroad in </span>United State of America</h1>
        <p>Get expert guidance to help you get closer to your dream of studying in the 
          USA and fastrack your US visa application process.{" "}</p>
        <div className="lead-form-container">
        <h3>Register for Personalized Counselling</h3>
        <form onSubmit={handleSubmitValidation}>
          <div className="text-feild container">
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
        </div>
      </div>

      <div className="capital-container1">
        <div className="leftcapital-container">
          <span>Capital</span>
          <h3>Washinton D.C.</h3>
        </div>
        <div className="Rightcapital-container">
          <div className="about-capital-card1">
            <span>Population </span>
            <h2>33.33 crores</h2>
          </div>
          <div className="about-capital-card1">
            <span>Language </span>
            <h2>English</h2>
          </div>
          <div className="about-capital-card1">
            <span>Currency </span>
            <h2>United States Dollar</h2>
          </div>
        </div>
      </div>

      <div className="GDP-container">
        <div className="gdp-card">
          <span>GDP</span>
          <h3>$ 1.74 Trillion</h3>
          <div className="imageCardGdp">
            <img src={Img2} alt="" />
          </div>
        </div>
        <div className="univercity-container">
          <div className="imageCardGdp2">
            <img src={Img1} alt="" />
          </div>

          <div className="univercity-card2">
            <p>Universities</p>
            <h2>43</h2>
          </div>
        </div>
        <div className="International-conatiner">
          <p>Indian Students in US: </p>
          <h1>465,700</h1>
        </div>
      </div>
    </div>
  );
};

export default State;
