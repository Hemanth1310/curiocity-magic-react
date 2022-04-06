import React, { Component } from 'react'
import classes from './Sharing.module.css'
import axios from 'axios'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import postback from '../../assets/postback.png'
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Dropdown,
    DropdownButton
    // Button,
    // ButtonGroup
    
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';   
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

export class Sharing extends Component {

    state={
        shareForm:{
          
            title:{
                elementType: "input",
                elementConfig:{
                    type:'text',
                    placeholder:"Post Line"
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            discription:{
                elementType: "input",
                elementConfig:{
                    type:'text',
                    placeholder:"Post Discription"
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            author:{
                elementType: "input",
                elementConfig:{
                    type:'text',
                    placeholder:"Your Name"
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },},
            formIsValid: false,
            loading: false,
            city:"Pick a City",
            cities:[],
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

        this.setState({
            city:key
        })
    }



    sharingHandler= (event) =>{
        event.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for(let forElementIdentifier in this.state.shareForm){
            formData[forElementIdentifier]= this.state.shareForm[forElementIdentifier]
        }

        const post={
            title:formData.title.value,
            discription:formData.discription.value,
            author:formData.author.value,
            date:this.state.date.getDate(),
            month:this.state.date.getMonth(),
            year:this.state.date.getFullYear()
        }

        axios.post(`https://curiosdata-73c25.firebaseio.com/posts/cities/${this.state.city}.json`,post)
            .then(response =>{
                this.setState({loading:false})
                // this.props.history.push('/')
            })
            .catch(error=>{
                this.setState({loading:false})
            });

    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.shareForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        let citySelected=false;
        if(this.state.city !=null)
        {
            citySelected=true;
        }

        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid && citySelected;
        }
        this.setState({shareForm: updatedOrderForm, formIsValid: formIsValid});
    }

    

    render() {
        const formElementsArray = [];
        for (let key in this.state.shareForm) {
            formElementsArray.push({
                id: key,
                config: this.state.shareForm[key]
            });
        }


        let form = null
        let background=<img src={postback} alt="back" className={classes.imgBack}></img>

        if(this.state.city!="Pick a City")
        {
         form = (
            <form onSubmit={this.sharingHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>POST</Button>
            </form>
        );
                
                   
    }
        if ( this.state.loading ) {
            form = <Spinner />;
        }

        let newData = Object.keys(this.state.cities)
                        .map(key=>(
                            
                           <div className={classes.outer}>

                            <button  className={classes.but} onClick={()=>this.citySelectHandler(key)}>{key}</button>
                            {/* <a class="dropdown-item" href="#">Action</a> */}
                            </div>
                               
                            //  console.log(key)
                        ))


        let dropData=   Object.keys(this.state.cities)
                        .map(key=>(
                            
                        // <div className={classes.outer}>

                            // <button  className={classes.but} onClick={()=>this.citySelectHandler(key)}>{key}</button>
                            <Dropdown.Item  href="#" onClick={()=>this.citySelectHandler(key) }>{key}</Dropdown.Item >
                            // </div>
                            
                            //  console.log(key)
                        ))     
        
                        

        return (
            <div className={classes.wel}>
            <div className={classes.ContactData}>
                <h4><u>Share with every one</u></h4>

                {/* <p style={{font:"AR BARKLEY"}}>Pick One</p> */}
                <br></br>
                <div className={classes.flexy}>
                
                <DropdownButton varient="danger" id="dropdown-varient-danger" title={this.state.city}>
                {dropData}
                </DropdownButton>
                

               {/* {newData} */}
               </div> 
                {form}
                
            </div>
            {background}
            </div>

        );
    }
}

export default Sharing
