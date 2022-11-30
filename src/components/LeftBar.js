import React from "react";
import { Fragment } from "react";
import classes from "./LeftBar.module.css";
import hairLogo from '../assets/theHairDig.png';
import dashboard from '../assets/dashboardIco.png';
import clarity from '../assets/mngClarityIco.png';
import prod from '../assets/mngProdctIco.png';
import batches from '../assets/batches.png';
import staff from '../assets/staff.png';
import reports from '../assets/reports.png';
import preferences from '../assets/preferences.png';
import help from '../assets/help.png';
import notification from '../assets/notifications.png';
import logout from '../assets/logout.png';
import sahilImg from '../assets/sahilImg.png';
import rightArrow from '../assets/rightArrow.png';

const LeftBar = (props) => {
  return (
    <Fragment>
      <div className={classes.leftBar}>
        <div>
          <div className={classes.logo}>
            <img alt="" src={hairLogo}></img>
          </div>
          <div className={classes.subheadingOne}>
            <ul className={classes.leftbarContent}>
              <span className={classes.leftTitle}>MAIN MENU</span>
              <li>
                <img alt="" src={dashboard}></img>
                <span>Dashboard</span>
              </li>
              <li>
                <img alt="" src={clarity}></img>
                <span>Manage Clarity</span>
              </li>
              <li>
                <img alt="" src={prod}></img>
                <span>Manage Products</span>
              </li>
              <li>
                <img alt="" src={batches}></img>
                <span>Batches</span>
              </li>
              <li>
                <img alt="" src={staff}></img>
                <span>Manage Staff</span>
                <div className={classes.subOptions}>
                  <span className={classes.internalListone}>Staff Listing</span>
                  
                  <span className={classes.internalListtwo}>Manage Roles</span>
                </div>
              </li>
              <li>
                <img alt="" src={reports}></img>
                <span>Reports</span>
              </li>
            </ul>
          </div>

          <div className={classes.subheadingTwo}>
            <ul>
            <span className={classes.leftTitle}>SUPPORT</span>
              <li>
                <img alt="" src={help}></img>
                <span>Help</span>
              </li>
              <li>
                <img alt="" src={preferences}></img>
                <span>Preferences</span>
              </li>
            </ul>
          </div>

          <div className={classes.subheadingThree}>
            <ul>
            <span className={classes.leftTitle}>MORE</span>
              <li>
                <img alt="" src={notification}></img>
                <span>Notifications</span>
                <span className={classes.badge}></span>
              </li>
              <li>
                <img alt="" src={logout}></img>
                <span>Logout</span>
              </li>
            </ul>
          </div>

          <div className={classes.userLoginDetails}>
            <img className={classes.userPic} src={sahilImg} alt='userImg'></img>
            <li className={classes.userName}>Sahil Shetty</li>
            <li className={classes.userAccess}>Super Admin </li>
            <li className={classes.userId}>THD-0546</li>
            <img className={classes.arrow} alt='' src={rightArrow}></img>
          </div>
        </div>
        <div></div>
      </div>
    </Fragment>
  );
};

export default LeftBar;
