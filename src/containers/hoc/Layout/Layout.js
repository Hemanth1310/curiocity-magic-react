import React, { Component } from 'react'
import Header from '../../../components/UI/header/header'
import classes from './Layout.module.css'
export class Layout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout
