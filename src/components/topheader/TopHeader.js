import React from "react";
import "./TopHeader.css";
import fbLogo from "./icons/fb.png";
import inLogo from "./icons/in.png";

const TopHeader = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="icon_area">
          <a href="#">
            <img src={fbLogo} alt="facebook" />
          </a>
          <a href="#">
            <img src={inLogo} alt="instagram" />
          </a>
        </div>
        <div class="log_area">
          <a href="#">lucymarisel@gmail.com</a>
          <a href="#">[UY +598] 094.050.650</a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
