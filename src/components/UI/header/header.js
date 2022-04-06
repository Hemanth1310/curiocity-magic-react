import React, { Component } from 'react'
import classes from './header.module.css'
import logo from '../../../assets/logo.png'
import ccd1 from '../../../assets/ccd1.png'
import {NavLink} from 'react-router-dom'
import NavigationItems from './navigationItems/NavigationItems'
export class Header extends Component {
    render() {
        return (
            <div className={classes.Box}>
                 <img src={ccd1} className={classes.ccdt} alt="title" />
                 <img src={logo} className={classes.logot} alt="logo" />
                
                <ul className={classes.NavigationItems}>
                <NavigationItems link='/' exact="true">Home</NavigationItems> 
                <NavigationItems link='/timeline'>Timeline</NavigationItems>
                {/* <NavigationItems link='/share'  >Share</NavigationItems> */}
               
                </ul>
                {/* <div className={classes.costomizetab}>Costomize</div> */}
            </div>
        )
    }
}

export default Header
