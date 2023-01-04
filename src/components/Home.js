import React from "react";
import styles from "../styles/home.module.css";
import NavBar from "./NavBar";
import {
  arrowImg,
  threeLines,
  profileImg,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
} from "../static";
import { Link } from "react-router-dom";
import Register from "./Register";

const Home = () => {
  return (
    <div className={styles.homePageContainer}>
    <NavBar />
      <div className={styles.pageContentContainer}>
        <div className={styles.pageContent}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              Consolidate your restaurants' insights in one place. Unlock
              growth.
            </div>
            <div className={styles.subtitle}>
              Your one stop solution to view mission-critical data and insights
              from all your locations in one place.
            </div>
            <div className={styles.btnArrowContainer}>
              <div className={styles.registerButton}>
                <Link to='/register'>
                  <div>
                    <span className={styles.registerButtonText}>Book Demo</span>
                  </div>
                </Link>
              </div>
              <div className={styles.arrowImgContainer}>
                <img src={arrowImg} />
              </div>
            </div>
          </div>
          <div className={styles.profileContainer}>
            <div className={styles.outletContainer}>
              <img src={logo2} />
              <img src={logo1} />
              <img src={logo3} />
              <img src={logo4} />
              <img src={logo5} />
              <img src={logo6} />
            </div>
            <div>
              <img src={threeLines} className={styles.threeLines} />
              <img src={profileImg} className={styles.myProfileIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
