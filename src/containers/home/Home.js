import React, { Component } from 'react'
import classes from './Home.module.css'
import axios from 'axios'
import Button from '../../components/UI/Button/Button'
import location from '../../assets/location.png'
import Spinner from '../../components/UI/Spinner/Spinner'
import homeload from '../../assets/homeload.png'
export class Home extends Component {

    state={
        cities:[],
        loading:true,
        date: new Date()
    }


    componentDidMount(){
        axios.get('https://curiosdata-73c25.firebaseio.com/posts/cities.json')
        .then(resp=>{
           
            // console.log(resp.data.posts)
              console.log(Object.keys(resp.data))
             
             let items=resp.data
            //             .map(key=>{

            //             })
        this.setState({
            loading:false,
            cities:items
        })
    //    console.log( "fetched data"+fetchedData)
        })
        .catch(err=>{
            this.setState({
                loading:false
            })
        })
        
    }
   

    citySelectHandler=(key)=>{
        
        this.props.history.push({
            pathname:'/timeline',
            search:'?'+key
        })
    }

    render() {

         let newData = Object.keys(this.state.cities)
                        .map(key=>(
                            <div className={classes.frame}>
                            <div className={classes.card}>
                            <img src={location} className={classes.logot} alt="logo" />
                            <button className={classes.but}  onClick={()=>this.citySelectHandler(key)}>{key}</button>

                            </div>
                            </div>   
                            //  console.log(key)
                        ))
                        
              let fetchedData= this.state.loading ? <Spinner></Spinner> :null;       
            let dt=this.state.date.toLocaleDateString()
        return (


            <div className={classes.wel}>
                <p style={{font:"AR-BARKELY"}}>Pick One</p>
                {/* <p>  {this.state.date.toLocaleDateString()}</p>
                <p>{this.state.date.getDate()}</p>
                <p>{parseInt(this.state.date.getMonth()+1)}</p>
                <p>{this.state.date.getFullYear()}</p> */}
                {/* <p>{dt.getDate()}</p>                 */}
                <div className={classes.flexy}>
                {fetchedData}
               {newData}
               </div> 
               <div>
                   
                   <img src={homeload} className={classes.load} alt="home"></img>
                <div className={classes.loader}>
                   <p style={{fontSize:"30px",lineHeight: "1s"}}><span className='left'>more</span></p>
                   <p style={{fontSize:"50px",lineHeight: "1s"}}><span className='right'>SOON.</span></p>
                 </div>
               </div>
            </div>
        )
    }
}

export default Home
