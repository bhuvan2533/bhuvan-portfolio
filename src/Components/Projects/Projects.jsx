import React from "react";
import Grid from "@mui/material/Grid";
import Cards from "./Cards";
import projectData from "./project_data";
import { Box } from "@mui/system";



function cardCreation(data) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Cards
        key={data.id}
        title={data.projectTitle}
        caption={data.projectCaption}
        url={data.projectUrl}
        img={data.projectImage}
        alt={data.imageAlt}
      />
    </Grid>
  );
}
const Projects = () => {
  return (
    <>
      <div id="project" className="sectionStyle">
        <h1 className="sectionH1">
          My{" "}
          <span style={{ color: "#2ee6e3", textTransform: "capitalize" }}>
            Projects
          </span>
        </h1>

        <div className="cardSection">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={6} data-aos="fade-in">
              {projectData.map(cardCreation)}
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Projects;
