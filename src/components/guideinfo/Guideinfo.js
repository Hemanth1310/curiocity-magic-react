import React, { Component } from 'react'
import classes from './Guideinfo.module.css'
import unkal from '../../assets/unkal.jpg'
import hbx from '../../assets/hbx.jpg'

export class Post extends Component {
    render() {

        var m = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

        return (
        // <div className={classes.outer}>
        <div className={classes.frame1}>
           <div className={classes.end} >
                <p>Contact:</p>
                <p><b>{this.props.contact}</b></p>
            </div>
            <div className={classes.frame2}>
                <img src={this.props.image} className={classes.img} alt="unkal"></img></div>
            <p className={classes.title}>{this.props.name}</p>
            <p className={classes.discription}>{this.props.discription}</p>
            <p className={classes.author}>{this.props.address}</p>
            {/* <img src ={this.props.image} className={classes.img} alt="unkal1"></img> */}

        </div>
        // </div>
        )
    }
}

export default Post
