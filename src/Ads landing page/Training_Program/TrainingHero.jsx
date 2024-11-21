import "./index.css";
import { useState } from "react";
import axios from "axios";
import { Dialog, useMediaQuery } from "@mui/material";

const TrainingHero =() =>{
    const isLg = useMediaQuery("(max-width: 1280px)");
    const [open, setOpen] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        preferred_exam: "",
        source: "",
    });
  const [errors, setErrors] = useState({});

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
          mobile: "",
          email: "",
          preferred_exam: "",
          source: "",
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
      newErrors.name = "First Name is Required";
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
    if (formData.preferred_exam === "") {
      newErrors.preferred_exam = "Select your Preferred Exam";
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
        <div className="hero-container">
            <div className="hero-section">
                    <h1>No-Cost  <span> IELTS/TOEFL </span> <br />Training Program</h1>
                    <p>We are excited to announce a new initiative designed to enhance our support for 
                       students preparing for overseas education.
                    </p>

                    <form onSubmit={handleSubmitValidation}>
                        <div className="Form-section">
                            <div className="Form-groups">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className="Form-text-feild"
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                            </div>
                            <div className="Form-groups">
                                <input
                                    type="text"
                                    name="mobile"
                                    placeholder="Mobile Number"
                                    className="Form-text-feild"
                                    onChange={handleChange}
                                    value={formData.mobile}
                                />
                                {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
                            </div>
                            <div className="Form-groups">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    className="Form-text-feild"
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                            </div>
                            <div className="Form-groups">
                            <select
                                name="preferred_exam"
                                className="Form-input-dropdown"
                                onChange={handleChange}
                                value={formData.preferred_exam}
                                >
                                <option value="">Select Exam</option>
                                <option value="UK">IELTS</option>
                                <option value="UK">TOEFL</option>
                                </select>
                                {errors.preferred_exam && <p style={{ color: "red" }}>{errors.preferred_exam}</p>}
                            </div>
                            <input type="hidden" name="source" className="Form-text-feild" value={formData.source} />
                            <button className="Form-container-button" type="submit">
                                Register for Free Training
                            </button>
                        </div>
                    </form>
                    </div>
        </div>
        </>
    )
}

export default TrainingHero;