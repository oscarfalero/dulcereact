import React from "react";
import "./TopHeader.css";
import fbLogo from "./icons/fb.png";
import inLogo from "./icons/in.png";

// Contact Info
let fbLink = "https://www.facebook.com/dulcecocina.uy";
let instaLink = "https://www.instagram.com/dulcecocina.uy";
let emailLink = "lucymarisel@gmail.com";
let phoneLink = "[UY +598] 094.050.650";

const TopHeader = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="icon_area">
          <a href={fbLink} target="_blank" rel="noreferrer noopener">
            <img src={fbLogo} alt="facebook" />
          </a>
          <a href={instaLink} target="_blank" rel="noreferrer noopener">
            <img src={inLogo} alt="instagram" />
          </a>
        </div>
        <div class="log_area">
          <a href={emailLink}>{emailLink}</a>
          <a href={phoneLink}>{phoneLink}</a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
