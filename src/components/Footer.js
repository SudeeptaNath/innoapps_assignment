import React, { Fragment } from "react";
import rightArrow from '../assets/rightArrow.png';
import classes from './rightBar.module.css'

const Footer = () =>{

    return (
        <Fragment>
            <div className={classes.footerPager}>
            <div className={classes.leftNavi}>
                <div>Page 1 to 10</div>
            </div>
            <div className={classes.rightNavi}>
                <li className={classes.firstPageLink}>1</li>
                <li>2</li>
                <li>3</li>
                <li className={classes.pagerDots}>...</li>
                <li className={classes.lastPageLink}>10</li>
                <img alt='' src={rightArrow}></img>
            </div>
            </div>
        </Fragment>
    )
}

export default Footer;



