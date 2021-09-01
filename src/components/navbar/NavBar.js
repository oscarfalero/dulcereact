import React from "react";
import styles from "./NavBar.module.css";
import homeLogo from "./icons/bx-home-alt.svg";
import productsLogo from "./icons/bxs-offer.svg";
import receiptsLogo from "./icons/bx-note.svg";
import contactLogo from "./icons/bxs-contact.svg";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.nav_link}>
        <img src={homeLogo} alt="Inicio" />
        <span>Inicio</span>
      </a>
      <a href="#" className={styles.nav_link}>
        <img src={productsLogo} alt="Inicio" />
        <span>Productos</span>
      </a>
      <a href="#" className={styles.nav_link}>
        <img src={receiptsLogo} alt="Inicio" />
        <span>Recetas</span>
      </a>
      <a href="#" className={styles.nav_link}>
        <img src={contactLogo} alt="Inicio" />
        <span>Contacto</span>
      </a>
    </nav>
  );
};

export default Navbar;
