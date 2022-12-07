import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Submit from "./Submit";

const axios = require("axios");

export default function TextfiledCt() {
  const [modal, setModal] = React.useState(false);
  function sendEmail(e) {
    e.preventDefault();
    setModal(true);
    const inputData = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value,
    };

    // axios
    //   .post("https://bhuvan-portfolio.herokuapp.com/", inputData)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    if (
      inputData.name === "" ||
      inputData.email === "" ||
      inputData.message === ""
    ) {
      setModal(false);
    } else {
      e.target.reset();
    }

    setTimeout(() => {
      setModal(false);
    }, 2800);
  }

  return (
    <>
      <form onSubmit={sendEmail}>
        <Box
          sx={{
            color: "white",
            margin: "5px",
            overflow: "hidden",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
          Validate
          autoComplete="off"
        >
          <Grid
            container
            spacing={5}
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Grid item md={12} style={{ width: "100%" }}>
              <TextField
                id="name"
                name="name"
                label="Name"
                InputLabelProps={{ className: "textfield__label" }}
                fullWidth
                type="text"
                inputProps={{ className: "textfield__background" }}
                variant="filled"
              />
            </Grid>
            <Grid item md={12} style={{ width: "100%" }}>
              <TextField
                id="email"
                label="Email"
                fullWidth
                type="email"
                name="email"
                InputLabelProps={{ className: "textfield__label" }}
                inputProps={{ className: "textfield__background" }}
                variant="filled"
              />
            </Grid>
            <Grid item md={12} style={{ width: "100%" }}>
              <TextField
                id="message"
                label="Your Message"
                fullWidth
                InputLabelProps={{ className: "textfield__label" }}
                type="text"
                name="message"
                inputProps={{ className: "textfield__background" }}
                variant="filled"
              />
            </Grid>
            <Grid item>
              <Button
                aria-label="send"
                variant="outlined"
                type="submit"
                endIcon={
                  <SendIcon style={{ color: "white", fontSize: "17px" }} />
                }
                style={{ color: "white" }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
          {modal ? <Submit /> : null}
        </Box>
      </form>
    </>
  );
}
