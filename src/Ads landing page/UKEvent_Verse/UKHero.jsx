import { useEffect, useState } from "react";
import "./index.css";
import { useLocation } from "react-router-dom";
import { Dialog, useMediaQuery } from "@mui/material";
import axios from "axios";
import Img1 from "../../assets/Unvercity/SRH-University.webp";

const UKHero =() =>{
    const isLg = useMediaQuery("(max-width: 1280px)");
    const [open, setOpen] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission
    const location = useLocation();
    const getSourceFromUrl = () => {
        return window.location.href; // Full URL with domain
    };;
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        intake_year: "",
        source: getSourceFromUrl(),
    });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      source: getSourceFromUrl(),
    }));
  }, [location.search, location.pathname]);

  const handleSubmitData = async () => {
    const api = "https://send.orientspectra.com/send-email-ads-landing-page-3";
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
    if (name === "mobile") {
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
      newErrors.name = "Full Name is Required";
    }
    if (formData.mobile === "") {
      newErrors.mobile = "Enter the Mobile Number";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter the valid 10 digit mobile number";
    }
    if (formData.email === "") {
        newErrors.email = "Email Id is Required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is not valid";
      }
    if (formData.intake_year === "") {
      newErrors.intake_year = "Intake Year is Required";
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
    return(
        <>
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
        <div className="UKHero-Container">
            <div className="UKHero-section">
                    <h1>Apply for UK Universities</h1>
                    <h3>Missed USA Student Visa ? </h3>
                    <p>Missed your chance to study in the USA? <br/>Don’t worry! <br/>You can still achieve your academic goals by applying to 
                       top-tier UK universities. With a streamlined application process, you can secure admission in as little as 48 hours*.
                    </p>
            </div>

            <div className="UKHero-right">
                <p>Register For Personalised Counselling</p>
                <form onSubmit={handleSubmitValidation}>
                    <div className="Event-Form-section">
                        <div className="Event-Form-groups">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                className="Event-Form-text-feild"
                                onChange={handleChange}
                                value={formData.name}
                            />
                            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                        </div>
                        <div className="Event-Form-groups">
                            <input
                                type="text"
                                name="mobile"
                                placeholder="Mobile Number"
                                className="Event-Form-text-feild"
                                onChange={handleChange}
                                value={formData.mobile}
                            />
                            {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
                        </div>
                        <div className="Event-Form-groups">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="Event-Form-text-feild"
                                onChange={handleChange}
                                value={formData.email}
                            />
                            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                        </div>
                        <div className="Event-Form-groups">
                            <input
                                type="text"
                                name="intake_year"
                                placeholder="Intake Year"
                                className="Event-Form-text-feild"
                                onChange={handleChange}
                                value={formData.intake_year}
                            />
                            {errors.intake_year && <p style={{ color: "red" }}>{errors.intake_year}</p>}
                        </div>
                            <input type="hidden" name="source" className="Form-text-feild" value={formData.source} />
                            <button className="Event-Form-container-button" type="submit">
                                Book A Free Call
                            </button>
                        </div>
                </form>
            </div>
            </div>
        </>

    )
}
export default UKHero;