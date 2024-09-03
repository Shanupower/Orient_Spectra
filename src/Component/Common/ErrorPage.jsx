import React from "react";
import Button from "./Button";

const Error = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "104vh",
          marginBottom: "-1.6rem",
          backgroundColor: "#0b66ef",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          paddingTop: "3.8rem",
        }}
      >
        <h1 style={{ fontSize: "26px" }}>We’re unable to find </h1>
        <p style={{ fontSize: "14px" }}>what you were looking for</p>
        <div
          style={{
            width: "50%",
            height: "50vh",
          }}
        >
          <img
            src="https://strapi.orientspectra.com/uploads/Orient_Spectra_404_Page55_1_c3fba418e6.svg"
            alt=""
          />
        </div>
        <h1 style={{ fontSize: "24px", marginBottom: "2rem" }}>
          Page not found!
        </h1>
        <Button text="Back to Home" link="/" />
      </div>
    </>
  );
};

export default Error;
