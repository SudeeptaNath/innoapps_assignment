import React from "react";
import { Fragment } from "react";
import iconOne from '../assets/menuIcon1.png';
import icontwo from '../assets/menuIcon2.png';
import sortIcon from '../assets/sortIcon.png';
import stafflistIcon from '../assets/menuIcon4.png';
import searchIcon from '../assets/searchIcon.png';
import rightArrow from '../assets/rightArrow.png';
import classes from './rightBar.module.css';


const PageHeader = () => {

    return <Fragment>
        <div>
            <div className={classes.pageTitle}>Manage Staff</div>
            <div className={classes.breadcrumbs}>
                <li className={classes.active}>
                    Manage Staff
                    <img alt='' src={rightArrow}></img>
                </li>
                <li className="inactive">
                    Staff Listing
                </li>
            </div>

            <div className={classes.manageDisplay}>
                <div className={classes.searchBox}>
                    <img className={classes.searchIcon} alt='' src={searchIcon}></img>
                    <input className={classes.searchBar} placeholder="Search by Scan/Report ID, Batch Number..."></input>
                </div>
            <div className={classes.displayControls}>
                <div className="iconOne"><img alt='' src={iconOne}></img></div>
                <div className="icontwo"><img alt='' src={icontwo}></img></div>
                <div className="sortIcon"><img alt='' src={sortIcon}></img></div>
                <div className="stafflistIcon"><img alt='' src={stafflistIcon}></img></div>
            </div>
            </div>
        </div>
    </Fragment>
}

export default PageHeader;