import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import pixaglobeImg from "../../images/06_pixaglobe.webp";
import dictionaryImg from "../../images/05_dictionary.webp";
import weatherImg from "../../images/04_weatherApp.webp";
import sparkImg from "../../images/03_sparksNgo.webp";
// import googleImg from "../../images/02_google.webp";
import omnykImg from "../../images/07_Omnyk.png";
import boatImg from "../../images/01_boat.webp";

import Typography from "@mui/material/Typography";

export default function Cards(props) {
  // switch
  let imgRender;
  switch (props.img) {
    case 1:
      imgRender = pixaglobeImg;

      break;
    case 2:
      imgRender = dictionaryImg;

      break;
    case 3:
      imgRender = weatherImg;

      break;
    case 4:
      imgRender = sparkImg;

      break;
    case 5:
      imgRender = boatImg;

      break;
    case 6:
      imgRender = omnykImg;

      break;

    default:
      break;
  }
  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: { xs: 365, md: 355 } }}
      style={{
        backgroundColor: "rgba(63, 63, 63, 0.19)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 1)",
        backdropFilter: "blur(5.5px)",
        WebkitBackdropFilter: "blur(5.5px)",
      }}
    >
      <CardMedia
        component="img"
        alt={props.alt}
        height="120"
        image={imgRender}
      />
      <CardContent sx={{ paddingBottom: "7px" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          color="rgba(255,255,255,0.62)"
        >
          {props.title}
        </Typography>
        <Typography variant="body2" color="rgba(255, 255, 255, 0.335)">
          {props.caption}
        </Typography>
      </CardContent>
      <CardActions
        className="card"
        sx={{ marginLeft: "5px", paddingBottom: "12px" }}
      >
        {/* <Button size="small">Share</Button> */}
        <Button
          href={props.url}
          className="viewBtn"
          target="__blank"
          size="small"
          variant="outlined"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
