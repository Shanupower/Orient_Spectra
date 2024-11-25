import { useState } from "react";
import Divider from "../Component/Common/Divider";
import "./index.css";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { Dialog, useMediaQuery } from "@mui/material";
import Badge from "../assets/Home_page/AwardBadge.webp";
import { useLocation } from "react-router-dom";


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
  const isLg = useMediaQuery("(max-width: 1280px)");
  const [open, setOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission
  const location = useLocation();
  const getSourceFromUrl = () => {
    return window.location.href; // Full URL with domain
  };

  const [formData, setFormData] = useState({
    name: "",
        mobile: "",
        email: "",
        intake_year: "",
        country:"",
        source: getSourceFromUrl(),
  });

  const [errors, setErrors] = useState({});

  const handleSubmitData = async () => {
    const api = "https://send.orientspectra.com/send-email-landing-pages";
    try {
      const response = await axios.post(api, formData, {
        headers: {
          "Content-Type": "application/json",  // Ensure content type is JSON
        }
      });
      if (response.status === 200) {
        setFormData({
          name: "",
          mobile: "",
          email: "",
          intake_year: "",
          country:"",
          source: getSourceFromUrl(),
        });
        setFormSubmitted(true); // Set formSubmitted to true upon successful submission
        setOpen(true)
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
      newErrors.name = "Required";
    }
    if (formData.email === "") {
      newErrors.email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (formData.mobile === "") {
      newErrors.mobile = "Required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter the valid mobile number";
    }
    if (formData.intake_year === "") {
      newErrors.intake_year = "Required";
    }
    if (formData.country === "") {
      newErrors.country = "Required";
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

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className=" discovery-section">
      {isSm ? (
        <div className=" discovery_Container">
        {/* <img src="https://strapi.orientspectra.com/uploads/9e03ad56_1b80_4ca6_96b3_da6acc4f738b_removebg_preview_42fd338519.webp" /> */}
        <img src={Badge} alt="Badge" loading="lazy"/>
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
          <img src={Badge} />
          {/* // "https://strapi.orientspectra.com/uploads/9e03ad56_1b80_4ca6_96b3_da6acc4f738b_removebg_preview_42fd338519.webp" /> */}
      </div>
      )}

          <div>
            <Dialog
                open={open}
                // onClose={closePopup}
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
                {formSubmitted && (
                <div className="Success-container">
                    <div className="success-message">
                    <img src="https://strapi.orientspectra.com/uploads/luxa_org_no_background_green_double_circle_check_mark_78370_1749_c6ee2071c0.webp" alt="Success" />
                    <h2>Thank you for your response!</h2>
                    <p onClick={handleClose}>Go Back</p>
                    </div>
                </div>
                )}
            </Dialog>
          </div>
        
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
                name="name"
                placeholder="Name"
                className="input-field"
                onChange={handleChange}
                value={formData.name}
              />
              {errors.name && (
                <p style={{ color: "red" }}>{errors.name}</p>
              )}
            </div>
            <div className="form-group">
            <input
                type="text"
                name="email"
                placeholder="Email"
                className="input-field"
                onChange={handleChange}
                value={formData.email}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div className="form-group">
            <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                className="input-field"
                onChange={handleChange}
                value={formData.mobile}
              />
              {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
            </div>
            <div className="form-group">
            <input
                type="text"
                name="intake_year"
                placeholder="Intake Year" 
                className="input-field"
                onChange={handleChange}
                value={formData.intake_year}
              />
              {errors.intake_year && (
                <p style={{ color: "red" }}>{errors.intake_year}</p>
              )}
            </div>

            <div className="form-group2">
                        <select
                          name="country"
                          className="input-field"
                          placeholder="Select Country" 
                          onChange={handleChange}
                          value={formData.country}
                        >
                          <option value="">Select Country</option>
                          <option value="USA">USA</option>
                          <option value="UK">UK</option>
                          <option value="Germany">Germany</option>
                          <option value="France">France</option>
                          <option value="Australia">Australia</option>
                          <option value="Canada">Canada</option>
                          <option value="Ireland">Ireland</option>
                        </select>
                        {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
                      </div>
            <input type="hidden" name="Source" className="input-field" />
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
