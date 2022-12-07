import { Grid } from "@mui/material";
import React from "react";
import "./Skills.css";
import react_icon from "../../images/react_icon.svg";
import express_icon from "../../images/express_icon.svg";
import node_icon from "../../images/node_icon.svg";
import mongo_icon from "../../images/mongo_icon.png";
import git_icon from "../../images/git_icon.svg";
import js_icon from "../../images/js_icon.svg";

const imgBlock = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Skills = () => {
  return (
    <div id="skills" className="sectionStyle">
      <h1 className="sectionH1">
        Tech
        <span style={{ color: "#2ee6e3", textTransform: "capitalize" }}>
          {" "}
          stack
        </span>
      </h1>
      <Grid container spacing={3} data-aos="zoom-in">
        <Grid item style={imgBlock} xs={6} md={2}>
          <img className="skillImg" src={react_icon} alt="" />
        </Grid>
          <Grid item style={imgBlock} xs={6} md={2}>
            <img className="skillImg" src={git_icon} alt="" />
          </Grid>
        <Grid item style={imgBlock} xs={6} md={2}>
          <img className="skillImg" src={js_icon} alt="" />
        </Grid>
        <Grid item style={imgBlock} xs={6} md={2}>
          <img className="skillImg" src={node_icon} alt="" />
        </Grid>
        <Grid item style={imgBlock} xs={6} md={2}>
          <img className="skillImg" src={mongo_icon} alt="" />
        </Grid>
        <Grid item style={imgBlock} xs={6} md={2}>
          <img className="skillImg" src={express_icon} alt="" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
