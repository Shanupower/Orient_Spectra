import { useState } from "react";
import Divider from "../Component/Common/Divider";
import "./index.css";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { useMediaQuery } from "@mui/material";


const DiscoveryData = [
  {
    id: 1,
    count: "19+",
    title: "Years of Experiences"
  },
  {
    id: 2,
    count: "15000+",
    title: "Successful Admits"
  },
  {
    id: 3,
    count: "10+",
    title: "Study Destinations"
  },
  {
    id: 4,
    count: "500+",
    title: "Global Universities"
  },
  {
    id: 5,
    count: "98%",
    title: "Visa Success Rate"
  },
]
const Discovery = () => {

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Intake_Year: "",
    Country: "",
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
          Country: "",
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
      newErrors.Name = "Required";
    }
    if (formData.Email === "") {
      newErrors.Email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      newErrors.Email = "Email is not valid";
    }
    if (formData.Mobile === "") {
      newErrors.Mobile = "Required";
    } else if (!/^\d{10}$/.test(formData.Mobile)) {
      newErrors.Mobile = "Enter the valid mobile number";
    }
    if (formData.Intake_Year === "") {
      newErrors.Intake_Year = "Required";
    }
    if (formData.Country === "") {
      newErrors.Country = "Required";
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
  const isSm = useMediaQuery("(max-width:986px)");
  return (
    <div className=" discovery-section">
      {isSm ? (
        <div className=" discovery_Container">
        <img src="https://strapi.orientspectra.com/uploads/9e03ad56_1b80_4ca6_96b3_da6acc4f738b_removebg_preview_42fd338519.webp" />
        <div className="discovery_content">
          {DiscoveryData.map((item)=> (
            <div className="dicovery_card" key={item.id}>
            <h1>{item.count}</h1>
            <p>{item.title}</p>
        </div>
          ))}
        </div>
    </div>
      ):(
        <div className=" discovery_Container">
          <div className="discovery_content">
            {DiscoveryData.map((item)=> (
              <div className="dicovery_card" key={item.id}>
              <h1>{item.count}</h1>
              <p>{item.title}</p>
          </div>
            ))}
          </div>
          <img src="https://strapi.orientspectra.com/uploads/9e03ad56_1b80_4ca6_96b3_da6acc4f738b_removebg_preview_42fd338519.webp" />
      </div>
      )}
        
      <div className="discoverTextCard">
        <p>
        Orient Spectra provides end-to-end guidance with your study abroad goal across university connects, visa application, 
        and loan assistance. Our student-focussed offerings and expert counselling has made us one of the top overseas education consultants 
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

            <div className="form-group2">
                        <select
                          name="Country"
                          className="input-field"
                          placeholder="Select Country" 
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
            <button className="form-container-button" type="submit">
            Book A Free Call
          </button>
          </div>   
        </form>
        </div>
      </div>
    </div>
  );
};

export default Discovery;
