import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <a href="/">
        <h1>Dulce Cocina</h1>
      </a>
    </div>
  );
};

export default Header;
