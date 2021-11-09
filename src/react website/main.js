import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Registration from '../Registration';
import Form from './Form'
import { BrowserRouter as Router,Route,Link,NavLink,Switch } from 'react-router-dom';
import './project.css'
const Main=()=>{
 return( 
   <Router ><div className="nav">
     <h1>Welcome To FS Learning...!</h1>
  
     
     < NavLink to="/g" activeStyle={{color:'orange'}}>Home</NavLink> &nbsp;
     < NavLink to="/a" activeStyle={{color:'orange'}}>About</NavLink>&nbsp;
     < NavLink to="/s" activeStyle={{color:'orange'}}>Services</NavLink>&nbsp;
     < NavLink to="/r" activeStyle={{color:'red'}}>SignUp</NavLink>
  
  
</div>
   <div >
      <Route path='/g' component={Home}/>
      <Route path='/a' component={About}/> 
      <Route path='/s' component={Services}/>
      <Route path="/r" component={Form}/>
      </div>
 </Router>);
}
export default Main;
