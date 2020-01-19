import React, { Component }from 'react';
import About from './About.js';
import Featured from './Featured.js';
import { 
BrowserRouter as Router, 
Route, Link } from 'react-router-dom';
import './App.css';



class App extends Component {


	
	render(){
		return (
		<Router>
  		  <div className="App">
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>	
						<li><Link to="/featured">Featured Listings</Link></li>
					</ul>	
				</nav>	
				
					<h1>Susanne Worona Real Estate</h1>
				<div className="main__content">
					<Route path="/about" component={About} />
					<Route path="/featured" component={Featured} />


				</div>





			
               
              
          
             
  		  </div>
		</Router>	
  		);
	}
  
}

export default App;
