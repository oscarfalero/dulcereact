import React from "react";
import styles from "./NavBar.module.css";
import homeLogo from "./icons/bx-home-alt.svg";
import productsLogo from "./icons/bxs-offer.svg";
import receiptsLogo from "./icons/bx-note.svg";
import contactLogo from "./icons/bxs-contact.svg";
import { Link, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.nav_link}>
        <img src={homeLogo} alt="Inicio" />
        <span>Inicio</span>
      </Link>
      <Link to="/productos" className={styles.nav_link}>
        <img src={productsLogo} alt="Inicio" />
        <span>Productos</span>
      </Link>
      <Link to="/recetas" className={styles.nav_link}>
        <img src={receiptsLogo} alt="Inicio" />
        <span>Recetas</span>
      </Link>
      <Link to="/contacto" className={styles.nav_link}>
        <img src={contactLogo} alt="Inicio" />
        <span>Contacto</span>
      </Link>
    </nav>
  );
};

export default withRouter(Navbar);
