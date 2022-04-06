import React, { Component } from 'react'
import classes from './Post.module.css'
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
                <p style={{fontSize:"60px",lineHeight:"50px",marginTop:"30px"}}>{this.props.date}</p>
                <p style={{fontSize:"20px",lineHeight:"10px",marginTop:"10px"}}>{m[this.props.month]}</p>
                <p style={{fontSize:"20px"}}>{this.props.year}</p>
            </div>
            <div className={classes.frame2}>
                <img src={this.props.image} className={classes.img} alt="unkal"></img></div>
            <p className={classes.title}>{this.props.title}</p>
            <p className={classes.discription}>{this.props.discription}</p>
            <p className={classes.author}>{this.props.author}</p>
            {/* <img src ={this.props.image} className={classes.img} alt="unkal1"></img> */}

        </div>
        // </div>
        )
    }
}

export default Post
