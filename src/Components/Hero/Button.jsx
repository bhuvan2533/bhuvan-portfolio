import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./Hero.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const btnStyle = {
  borderRadius: "40px",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  border: "solid 1px #2ee6e3",
  color: "#2ee6e3",
  fontSize: "14px",
};
export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        href="#about"
 
        variant="contained"
        className="hero__btn__style"
        style={btnStyle}
        sx={{
          "&:hover": {
            backgroundColor: "#2ee6e322 !important",
            color: "white !important",
          },
        }}
        endIcon={
          <ArrowForwardIcon
            sx={{
              transition: "209ms",
              "&:hover": {
                transform: "translateX(4px)",
              },
            }}
          />
        }
      >
        Know more
      </Button>
    </Stack>
  );
}
