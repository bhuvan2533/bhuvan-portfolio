import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton, Stack } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div
        className="sectionStyle"
        style={{
          textAlign: "center",
          display: "flex",
          background: "#040407",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack direction="row" spacing={2}>
          <IconButton
            href="https://www.linkedin.com/in/bhuvan2533/"
            target="__blank"
          >
            <LinkedInIcon className="socialIcons" />
          </IconButton>
          <IconButton href="https://github.com/bhuvan2533" target="__blank">
            <GitHubIcon className="socialIcons" />
          </IconButton>
          <IconButton>
            <InstagramIcon className="socialIcons" />
          </IconButton>
        </Stack>
      </div>
      <footer>
        <div className="cpy">
          <p> &diams; Copyright &copy; 2022 All rights reserved &diams;</p>
          <p>Created by Bhuvan 😇</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
