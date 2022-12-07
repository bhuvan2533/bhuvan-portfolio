import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Submit = () => {
  return (
    <>
      <div className="submitModal">
        <CheckCircleIcon
          style={{ color: "rgba(255,255,255,0.9)", fontSize: "17px" }}
        />
        <p style={{ margin: "0 7px", fontSize: "13px", fontFamily: "poppins" }}>
          {" "}
          Sent Successfully
        </p>
      </div>
    </>
  );
};

export default Submit;
