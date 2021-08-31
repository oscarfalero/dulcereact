import React from "react";
import styles from "./TopHeader.module.css";
import fbLogo from "./icons/fb.svg";
import instLogo from "./icons/inst.svg";
import mailLogo from "./icons/mail.svg";
import waLogo from "./icons/wa.svg";

// Contact Info
let fbLink = "https://www.facebook.com/dulcecocina.uy";
let instaLink = "https://www.instagram.com/dulcecocina.uy";
let emailLink = "lucymarisel@gmail.com";
let phoneLink = "[UY +598]094.050.650";

const TopHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.icon_area}>
          <a href={fbLink} target="_blank" rel="noreferrer noopener">
            <img src={fbLogo} alt="facebook" />
          </a>
          <a href={instaLink} target="_blank" rel="noreferrer noopener">
            <img src={instLogo} alt="instagram" />
          </a>
          <a
            className={styles.mail_logo}
            href={emailLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={mailLogo} alt="email" />
          </a>
          <a
            className={styles.wp_Logo}
            href={phoneLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={waLogo} alt="whatsapp" />
          </a>
        </div>
        <div className={styles.log_area}>
          <a href={emailLink}>{emailLink}</a>
          <a href={phoneLink}>{phoneLink}</a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
