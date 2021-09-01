import React from "react";
import styles from "./NavBar.module.css";
import 'boxicons';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="#">
      <i class='bx bxs-dashboard' ></i>
      </a>
    </nav>
  );
};

export default Navbar;
