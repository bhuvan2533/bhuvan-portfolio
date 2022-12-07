import React from "react";
import "./Hero.css";
import IconLabelButtons from "./Button";

function detectMob() {
  return window.innerWidth <= 800;
}
console.log(detectMob());
const Hero = () => {
  return (
    <>
      <div class="hero_content">
        <div className="hero_center">
          <h1>
            Hello I'm <span>Bhuvan</span>
          </h1>
          <p>A Full Stack Web Developer</p>
        </div>

        {(!detectMob() === true) && (
          <div className="hero__btn" >
            <IconLabelButtons />
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
