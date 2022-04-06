import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/UI/header/header'
import  Timeline  from './containers/timeline/Timeline';
import {Route , Switch } from 'react-router-dom'
import Sharing from './containers/Sharing/Sharing'
import Home from './containers/home/Home'
import  Guide  from './containers/timeline/Guide/guide';
import Layout from './containers/hoc/Layout/Layout'
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Layout>
      {/* <Timeline></Timeline> */}
      <Switch>
            {/* {/* <Route path="/checkout" component={Checkout} /> */}
           {/* <Route path="/timeline/guide" component={Guide}></Route> */}
            <Route path="/timeline" component={Timeline} />
            <Route path="/share" component={Sharing} /> 
            <Route path="/" exact component={Home} />
            {/* <Route 
                    path= '/guide'
                    // render={(props) => (<Guide {...props} />)}
                     
                    component={Guide}
                     /> */}
      </Switch>
      </Layout>
      
    </div>
  );
}

export default App;
