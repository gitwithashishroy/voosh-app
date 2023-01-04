import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";
import logo from "../static/voosh_logo.webp";
import {
  getItemFromLocalStorage,
  LOCALSTORAGE_KEY,
  removeItemFromLocalStorage,
} from "../utils";
import { useState } from "react";

const NavBar = () => {
  
  return (
    <div className={styles.nav}>
      <div className={styles.navLogo}>
        <img src={logo} />
      </div>
    </div>
  );
};

export default NavBar;
