import React from "react";
import styles from "./NavBar.module.css";
import { Link, withRouter } from "react-router-dom";
import { BiHomeAlt, BiFile, BiStore, BiUser } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={`${styles.nav_link} ${styles.nav_link_active}`}>
        <BiHomeAlt />
        <span className={styles.nav_text}>Inicio</span>
      </Link>
      <Link to="/productos" className={styles.nav_link}>
        <BiStore />
        <span className={styles.nav_text}>Productos</span>
      </Link>
      <Link to="/recetas" className={styles.nav_link}>
        <BiFile />
        <span className={styles.nav_text}>Recetas</span>
      </Link>
      <Link to="/contacto" className={styles.nav_link}>
        <BiUser />
        <span className={styles.nav_text}>Contacto</span>
      </Link>
    </nav>
  );
};

export default withRouter(Navbar);
