import React, { Component } from 'react'

export class cities extends Component {
    render() {
        return (
            <div>
                <div className={classes.card}>
                <img src={location} className={classes.logot} alt="logo" />
                <button  className={classes.but} onClick={()=>this.citySelectHandler(key)}>{key}</button>
                </div> 
            </div>
        )
    }
}

export default cities
