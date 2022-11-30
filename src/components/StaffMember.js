import React from 'react';
// import { useContext } from 'react';
// import CartContext from '../../../Store/cart-context';
import classes from './rightBar.module.css';
import viewIcon from '../assets/burgerMenu.png';
import userIcon from '../assets/userIcon.png';

const StaffMember = props => {

    // const cartCtx = useContext(CartContext);
    
    // const addToCartHandler = amount => {
    //     cartCtx.addItem({
    //         id: props.id,
    //         name: props.name,
    //         amount: amount,
    //         price: props.price
    //     });
    // };
    
    return <li className={classes.members}>
        <div className={classes.memberWrap}>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.id}>{props.id}</div>
            <div className={classes.role}>{props.role}</div>
            <div className={classes.email}>{props.email}</div>
            <div className={classes.status}><button className={classes.statusBtn}>{props.status}</button></div>
            <div className={classes.actionBtn}>
                <button className={classes.viewBtn}><img alt='' src={viewIcon}></img>View</button>
                <button className={classes.contactBtn}><img alt='' src={userIcon}></img>Contact</button>
            </div>
            
        </div>
        
    </li>

}

export default StaffMember;