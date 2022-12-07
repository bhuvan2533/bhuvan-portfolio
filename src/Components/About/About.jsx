import { Button, Grid } from "@mui/material";
import React from "react";
import "./About.css";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import resumeDoc from "../../images/resume.pdf";
import aboutImg from "../../images/aboutImg.webp";

const About = () => {
  return (
    <>
      <div id="about" className="sectionStyle">
        <h1 className="sectionH1">
          About <span style={{ color: "#2ee6e3" }}>ME</span>
        </h1>

        <Grid container spacing={2} data-aos="fade-up">
          <Grid item xs={12} md={5}>
            <div className="about__image">
              <img className="about__img" src={aboutImg} alt="" />
            </div>
          </Grid>

          <Grid item xs={12} md={7}>
            <div className="about__content">
              <h2 className="about__header">
                Web developer creating thoughtful, interactive interfaces.
              </h2>
              <hr className="header_underline" />
              <br />
              <p className="about_para">
                I'm Bhuvan S, I am currently pursuing my Bachelor of
                Engineering (BE) from RNS Institute of Technology, Bangalore.{" "}
                <br /> I love my work and enjoy each project as I get it. Feel
                free to have a look at my portfolio and don't hesitate to
                contact me if you think I can be a service of you. <br /> Thanks
                for stopping by!! <span> Here's my CV !</span> <br />
                <br />
              </p>

              <div className="btnGrp">
                <Button
                  variant="outlined"
                  href={resumeDoc}
                  download="Resume"
                  target="_blank"
                  className="btnGrp__1"
                  size="medium"
                >
                  Download{" "}
                  <FileDownloadOutlinedIcon
                    sx={{
                      marginLeft: { xs: "3px", md: "5px" },
                      paddingBottom: "1.3px",
                    }}
                  />
                </Button>

                <Button
                  variant="contained"
                  className="btnGrp__2"
                  href="#contact"
                  size="medium"
                >
                  Contact{" "}
                  <EmailIcon
                    sx={{
                      marginLeft: { xs: "6px", md: "5px" },
                      paddingBottom: "1.3px",
                    }}
                  />
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default About;
