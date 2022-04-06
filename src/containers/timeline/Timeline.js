import React, { Component } from 'react'
import * as classes from './Timeline.module.css'
import Spinner from '../../components/UI/Spinner/Spinner'
import apnahubli from '../../assets/apnahubli.png'
import axios from 'axios'
import withErrorHandler from '../hoc/WithErrorHandler/WithErrorHandler';
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    SideNav
   } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aux from '../hoc/Auxilary/Auxilary'
import Post from '../../components/post/Post'
import Siderbar from '../../components/UI/Sidebar/Siderbar'
import NavigationItems from '../../components/UI/header/navigationItems/NavigationItems'
import Guide from './Guide/guide'
import Share from '../Sharing/Sharing.js'
import {Route} from 'react-router-dom'

class Timeline extends Component {
    
    state={
        // post:{
        // title:"Unkal Lake reopens to visitors after being evacuated",

        // discription:"Hubli's unkal lake reopened to visitors on Wednesday shortly after being evacuated, Reuters witness said.A police source said the tower was evacuated after police received a call suggesting a bomb had been placed there",
        // author:"Shared By-Hemanth"}
        posts:[], 
        loading:true,
        cityName:null,
        sideNavLeft: false,
        display:false,
        clicked:false
    }
    

    componentDidMount(){
       
        if(this.state.cityName == null)
        {
        this.setState({
            display:true
        })
        let city;
       const query = new URLSearchParams( this.props.location.search );
       for ( let param of query.entries() ) {
        // ['salad', '1']
        city=param[0]
         }

         axios.get(`https://curiosdata-73c25.firebaseio.com/posts/cities/${city}.json`)
            .then(resp=>{
                const fetchedData=[];
                for(let key in resp.data){
                    fetchedData.push({
                        ...resp.data[key],
                        id:key
                    })
                }
                console.log(resp.data)
                console.log("reloded")

            this.setState({
                loading:false,
                posts:fetchedData,
                cityName:city,
                display:true
            })
             
            })
            .catch(err=>{
                this.setState({
                    loading:false
                })
            })
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[App.js] shouldComponentUpdate');
    //     if(nextState.display != this.state.display)
      
    //     return false;
    //     else
    //     return true;
    //   }

    //   getSnapshotBeforeUpdate(prevProps, prevState) {
    //     // Are we adding new items to the list?
    //     // Capture the scroll position so we can adjust scroll later.
    //     // if (prevState == this.state) {
    //     //   const list = this.listRef.current;
    //     //   return list.scrollHeight - list.scrollTop;
    //     // }
    //     return null;
    //   }

    tourGuideHandle=(key)=>{
        
        this.setState({
            display:false,
            clicked:true
        })
        
        this.props.history.push({
            pathname: this.props.match.path+'/guide',
            search:'?'+key
        });



        // this.props.history.replace('/timeline/guide')
    }

    // componentDidMount(){
    //     axios.get('https://curiocity-bf93e.firebaseio.com/posts-hubli.json')
    //         .then(resp=>{
    //             console.log(resp.data);
    //             }
            
    //         )
    //         .catch(err=>{
    //             console.log(err)
    //             this.setState({
    //                 loading:false
    //             })
    //         })
            
    // }

    sidenavToggle = sidenavId => () => {
        const sidenavNr = `sideNav${sidenavId}`
        this.setState({
          [sidenavNr]: !this.state[sidenavNr]
        });
      };
    
    render() {


        let postfetched= this.state.loading ? <Spinner /> : null;
        let posts= null
        let heading=null
        let touring=null
        if(this.state.display==true && this.state.clicked==false){

         posts=(
            
            this.state.posts.map(post=>(

                <Post
                key={post.id}
                date={post.date}
                month={post.month}
                year={post.year}
                title={post.title}
                discription={post.discription}
                author={post.author}
                image={post.image}></Post>
            ))
        )
        
         heading =<p className={classes.wel}>Whats happening in {this.state.cityName} !!! Know it ALL </p>

        }
           
        

        if(this.state.clicked==true){
            posts=(
                <Route 
                path= '/timeline/guide' 
             render={(props) => (<Guide {...props} />)}
                 
                // component={Guide}
                 />
             )
        }


        
        return (
            <Aux>
            {/* <p className={classes.wel}>Whats happening in {this.state.cityName} !!! Know it ALL </p> */}
            {heading}
            <div className={classes.sidebar}>
                
                <Siderbar city={this.state.cityName} navi={()=>this.tourGuideHandle(this.state.cityName)}></Siderbar>
            </div>
            <div className={classes.frame}>
              {postfetched} 
            {
               posts
            }
            {touring}
            
            </div>
           
            {/* <Route 
                    path= '/timeline/guide' 
                 render={(props) => (<Guide {...props} />)}
                     
                    // component={Guide}
                     /> */}
            </Aux>


        )
    }
}

// export default  connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( Timeline, axios ))
export default withErrorHandler( Timeline, axios )
