import React, { Component } from 'react'
import apnahubli from '../../../assets/apnahubli.png'
import classes from './Siderbar.module.css'
import spoons from '../../../assets/spoons2.png'
import bed from '../../../assets/bed3.png'
import car from '../../../assets/car2.png'
import {NavLink} from 'react-router-dom'
import Aux from '../../../containers/hoc/Auxilary/Auxilary'
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    OverlayTrigger,
    Tooltip,
    Image,
    Container,
   

   } from "react-bootstrap";
   import 'bootstrap/dist/css/bootstrap.min.css';   
export class Siderbar extends Component {




    render() {
        return (
            <Aux>
                 <div > 
                <img src={apnahubli} className={classes.imgHubli} ></img></div>
                
               <div className={classes.sidy}> 
                    <p style={{fontFamily: "ariel"}}>{this.props.city}, Karnataka</p>
                    <p>India</p>
               <Button className="btn btn-danger">Tourism</Button>
               <br></br>
                 
               <div className="d-flex flex-column ">
                <br></br>
                <div className={classes.ded}  onClick={this.props.navi} >
                <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip id="button-tooltip-2">Tourism guide</Tooltip>
                             
                            }
                             
                        >
                            {({ ref, ...triggerHandler }) => (
                            <div
                                // variant="light"
                                {...triggerHandler}
                                className="d-flex align-items-center p-3 order-3"
                                
                            >
                               

                                <Image
                                ref={ref}
                                roundedCircle
                                src={car}

                                />
                                
                                <span className="ml-2">
                                {/* <NavLink 
                                to="/guide"            
                                >Tour Guide</NavLink> */}
                                Tour Guide
                                </span>
                                     
                            </div>
                            )}
                        </OverlayTrigger>
                        </div>
                        <div className={classes.ded}>  
                      <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip id="button-tooltip-2">Places to Eat : Will Be updated Soon</Tooltip>

                            }
                        >
                            {({ ref, ...triggerHandler }) => (
                            <div
                                variant="light"
                                {...triggerHandler}
                                className="d-flex align-items-center p-3 order-3"
                            >
                                <Image
                                ref={ref}
                                roundedCircle
                                src={spoons}

                                />
                                <span className="ml-2">Restaurants</span>
                            </div>
                            )}
                        </OverlayTrigger></div>
                        <div className={classes.ded}>    
                      <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip id="button-tooltip-2">Places to stay : Will Be updated Soon</Tooltip>}
                        >
                            {({ ref, ...triggerHandler }) => (
                            <div
                                variant="light"
                                {...triggerHandler}
                                className="d-flex align-items-center p-3 order-3"
                                
                            >
                                <Image
                                ref={ref}
                                roundedCircle
                                src={bed}

                                />
                                <span className="ml-2">Where To stay </span>
                            </div>
                            )}
                        </OverlayTrigger>
                        </div>
                      {/* <div className="p-3 bg-info order-3 border"><div className={classes.fet}>Where to stay</div></div>
                      <div className="p-3 bg-info order-3 border"><div className={classes.fet}>Resturents </div></div> */}
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Siderbar
