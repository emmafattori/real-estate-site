import React, { Component }from 'react';
import { 
BrowserRouter as Router, 
Route, Link } from 'react-router-dom';
import Nav from './Nav.js';
import './App.css';


class App extends Component {
	render(){
		return (
  		  <div className="App">

				<Nav />

				<h1>Susanne Worona Real Estate</h1>
  		  </div>
  		);
	}
  
}

export default App;
