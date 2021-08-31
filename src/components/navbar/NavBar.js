import React from "react";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className={styles.container}>
        <nav>
          <ul className="nav-ul">
            <li>
              <a href="index.html">Inicio</a>
            </li>
            <li>
              <a href="index.html">Funciones</a>
            </li>
            <li>
              <a href="index.html">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
