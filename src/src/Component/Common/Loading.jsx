import React from "react";
import LoadImg from "../../assets/Loading_Anim.gif";
const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={LoadImg} alt="" style={{ width: "220px", height: "120px" ,objectFit:"contain"}} />
    </div>
  );
};

export default Loading;
