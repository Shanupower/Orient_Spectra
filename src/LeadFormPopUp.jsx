import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, IconButton, Tab, Tabs, useMediaQuery } from '@mui/material';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import "./index.css";
import CommonEvent from './assets/Home_page/Common_Event.webp';
import Img1 from "./assets/Unvercity/Euschool-Poster-1.webp";
import Img2 from "./assets/Unvercity/Event1.webp";
import Img3 from "./assets/Success.webp";
const LeadFormPopUp = () => {
  const isSm = useMediaQuery("(max-width:986px)");
  const isMd = useMediaQuery("(max-width:1024px)");
  const isLg = useMediaQuery("(max-width: 1280px)");
  const [open, setOpen] = useState(false); // Open the dialog by default
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    intake_year: "",
    source: "Education Fair Khamam - Website PopUp",
  });
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    // const newSource =
    //   activeTab === 0
    //     ? "Education Fair Khamam - Website PopUp"
    //     : "EU-Business School - Website PopUp";
    // setFormData((prevData) => ({ ...prevData, source: newSource }));

    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  // }, [activeTab]);

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

  const handleSubmitData = async () => {
    const api = "https://send.orientspectra.com/send-email-lead-form-popup";
    try {
      const response = await axios.post(api, formData, {
        headers: {
          "Content-Type": "application/json",  // Ensure content type is JSON
        }
      });
      if (response.status === 200) {
        setFormData({
          name: "",
          email: "",
          mobile: "",
          intake_year: "",
          source: "Education Fair Khamam - Website PopUp",
          // source: activeTab  === 0 ? "Education Fair Khamam - Website PopUp" : "EU-Business School - Website PopUp",

        });
        setFormSubmitted(true); // Set formSubmitted to true upon successful submission
      }
    } catch (errors) {
      console.log(errors);
    }
  };

  const Validation = () => {
    const newErrors = {};

    if (formData.name === "") {
      newErrors.name = "First Name is Required";
    }
    if (formData.email === "") {
      newErrors.email = "Email Id is Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (formData.mobile === "") {
      newErrors.mobile = "Enter the Mobile Number";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter the valid 10 digit mobile number";
    }
    if (formData.intake_year === "") {
      newErrors.intake_year = "Intake Year is Required";
    }
    if (formData.country === "") {
      newErrors.country = "Select your Destination";
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

  // const handleTabChange = (e, newValue) => {
  //   setActiveTab(newValue); // Change the form based on selected Tab
  // };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="popup-dialog-title"
        maxWidth="lg"
        PaperProps={{
          sx: {
            width: { xs: '90%', sm: '60%', md: '80%', lg: isLg ? "65%" : '51%' },
            maxWidth: 'none',
            position: 'relative',
            overflow: "visible",
          },
        }}
        className='DailogBox'
      >
        {formSubmitted ? (
          <div className="Success-container">
            <div className="success-message">
              <img src={Img3} alt="Success" />
              <h2>Thank you for your response!</h2>
              <p onClick={handleClose}>Back to Home</p>
            </div>
          </div>
        ) : (
          <>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: { xs: '-16px', lg: '-20px' },
                top: { xs: '-16px', lg: '-20px' },
                backgroundColor: '#e37d25',
                borderRadius: { lg: '50%', md: '80%' },
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                color: 'white',
                '&:hover': {
                  backgroundColor: "#306398",
                  zIndex: 2,
                },
                zIndex: 3,
                width: { xs: '30px', sm: '35px', md: '45px' },
                height: { xs: '30px', sm: '35px', md: '45px' },
              }}
            >
              <CloseIcon />
            </IconButton>
            <div className="Dailog-container">
              <div className='DailogContent'>
              {/* <Tabs
                  value={activeTab}
                  onChange={handleTabChange}
                  centered
                  sx={{
                    '.MuiTab-root': {
                      wordWrap: 'break-word', // Break long words
                      maxWidth: isSm ? '145px': '200px', // Adjust as per your design
                      fontSize: '12px', // Adjust font size if needed
                      padding: '10px', // Add padding for better spacing
                      border: "2px solid whiteSmoke",
                      lineHeight: "20px"
                    },
                    marginBottom: '10px',
                    '.MuiTabs-flexContainer': {
                      justifyContent: 'center', // Center align tabs container
                    },
                  }}
                >
                  <Tab label="World Education Fair"/>
                  <Tab label="EU-Business School"/>
                </Tabs> */}
              {/* {activeTab === 0 ? ( */}
                <>
                  <h2 className="DailogTitle"> World <span> Education Fair </span></h2>
                  <h3>on <span>22nd December </span>Hotel Grand Gayathri, Khammam</h3>
                  <p>Register for Personalized Counselling</p>
                </>
              {/* ) : (
                <>
                  <h2 className="DailogTitle">Apply for <span>EU Business School</span></h2>
                  <h3>& Get <span>Rs 2 Lakhs</span> Discount*</h3>
                  <p>Register before 21st December</p>
                </>
              )} */}
                <DialogContent>
                {/* {activeTab === 0 ? ( */}
                  <>
                  <form onSubmit={handleSubmitValidation}>
                    <div className="popup-text-feild">
                      <div className="popup-form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="popup-input-field"
                          onChange={handleChange}
                          value={formData.name}
                        />
                        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                      </div>
                      <div className="popup-form-group">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          className="popup-input-field"
                          onChange={handleChange}
                          value={formData.email}
                        />
                        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                      </div>
                      <div className="popup-form-group">
                        <input
                          type="text"
                          name="mobile"
                          placeholder="Mobile Number"
                          className="popup-input-field"
                          onChange={handleChange}
                          value={formData.mobile}
                        />
                        {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
                      </div>
                      <div className="popup-form-group">
                        <input
                          type="text"
                          name="intake_year"
                          placeholder="Intake Year"
                          className="popup-input-field"
                          onChange={handleChange}
                          value={formData.intake_year}
                        />
                        {errors.intake_year && <p style={{ color: "red" }}>{errors.intake_year}</p>}
                      </div>

                      <input type="hidden" name="source" className="input-field" value={formData.source} />
                      <button className="popup-form-container-button" type="submit">
                        Book A Free Call
                      </button>
                    </div>
                  </form>
                  </>
                  {/* ) : (
                    <>
                    <form onSubmit={handleSubmitValidation}>
                    <div className="popup-text-feild">
                      <div className="popup-form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="popup-input-field"
                          onChange={handleChange}
                          value={formData.name}
                        />
                        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                      </div>
                      <div className="popup-form-group">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          className="popup-input-field"
                          onChange={handleChange}
                          value={formData.email}
                        />
                        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                      </div>
                      <div className="popup-form-group">
                        <input
                          type="text"
                          name="mobile"
                          placeholder="Mobile Number"
                          className="popup-input-field"
                          onChange={handleChange}
                          value={formData.mobile}
                        />
                        {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
                      </div>
                      <div className="popup-form-group">
                        <input
                          type="text"
                          name="intake_year"
                          placeholder="Intake Year"
                          className="popup-input-field"
                          onChange={handleChange}
                          value={formData.intake_year}
                        />
                        {errors.intake_year && <p style={{ color: "red" }}>{errors.intake_year}</p>}
                      </div>

                      <input type="hidden" name="source" className="input-field" value={formData.source} />
                      <button className="popup-form-container-button" type="submit">
                        Book A Free Call
                      </button>
                    </div>
                  </form>
                  </>
                  )} */}
                  <p onClick={handleClose} className='SkipNow'>Skip Now</p>
                </DialogContent>
              </div>
              {/* {activeTab === 0 ? ( */}
              <img src={Img2} alt="EventImage" className='ImageContainer' /> 
              {/* ):(
                <img src={Img1} alt="EventImage" className='ImageContainer' />
              )} */}
            </div>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default LeadFormPopUp;
