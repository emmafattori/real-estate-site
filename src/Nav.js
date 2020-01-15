import React, { Component } from 'react';
import './App.css';

class Nav extends Component{

	render(){
		return(
			<div>
				<nav>
					<ul>
						<li><a href="">Home</a></li>
						<li><a href="">Featured Listings</a></li>
						<li><a href="">Find Property</a></li>
						<li><a href="">Find Commercial</a></li>
						<li><a href="">Contact Me</a></li>
						<li><a href="">Visitor Tools</a></li>
					</ul>
				</nav>
			</div>
		)
	}

}




export default Nav