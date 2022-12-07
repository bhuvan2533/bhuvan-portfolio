import React, { useState } from "react";
import { Grid } from "@mui/material";
import "./Contact.css";
import TextfiledCt from "./TextfieldCt";
const axios = require("axios");

const centerBlock = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Contact = () => {
  const [quote, setQuote] = useState("");

  function generateQuote() {
    // axios.get("http://localhost:5000/", { crossDomain: true }).then((res) => {
    //   setQuote(res.data);
    // });
    let quoteRes, quoteNumber;
    axios
      .get("https://type.fit/api/quotes", { crossDomain: true })
      .then((response) => {
        quoteNumber = Math.floor(Math.random() * 1500);
        quoteRes = response.data[quoteNumber].text;
        setQuote(quoteRes)
      });
  }
  return (
    <>
      <div id="contact" className="sectionStyle">
        <h1 className="sectionH1">
          Contact
          <span style={{ color: "#2ee6e3", textTransform: "capitalize" }}>
            {" "}
            Me
          </span>
        </h1>
        <Grid container style={centerBlock} spacing={2}>
          <Grid className="ctLtContent" item xs={12} md={6}>
            <div className="leftCt">
              <div className="quote">
                <h5 onClick={generateQuote}>Get a quote</h5>
                <p>{quote}</p>
              </div>
              <h2>We'd love to hear from you</h2>
              <p className="email">bhuvn2582@gmail.com</p>
            </div>
          </Grid>
          <Grid className="ctRtContent" item xs={12} md={6}>
            <div
              className="rightCt"
              style={{ color: "white", width: "100%", position: "relative" }}
            >
              <TextfiledCt />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Contact;
