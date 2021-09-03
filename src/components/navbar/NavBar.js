import React from "react";
import styles from "./NavBar.module.css";
import { BiHomeAlt , BiFile, BiStore, BiMobileAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="#" className={`${styles.nav_link} ${styles.nav_link_active}`}>
        <BiHomeAlt />    
        <span className={styles.nav_text}>Inicio</span>
      </a>
      <a href="#" className={styles.nav_link}>
        <BiStore />    
        <span className={styles.nav_text}>Productos</span>
      </a>
      <a href="#" className={styles.nav_link}>
        <BiFile />    
        <span className={styles.nav_text}>Recetas</span>
      </a>
      <a href="#" className={styles.nav_link}>
        <BiMobileAlt />    
        <span className={styles.nav_text}>Contacto</span>
      </a>
    </nav>
  );
};

export default Navbar;
