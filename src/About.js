import React, { Component } from 'react';
import './App.css';

class About extends Component{

	render(){
		return(
		
			<div className="about__section">
			
				<h2>About Me</h2>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi velit repellat veritatis quibusdam? Repellendus, quidem accusamus quisquam animi illum ipsam totam fuga ullam hic, perferendis doloremque. Tenetur nesciunt veritatis dolores magni delectus? Itaque illo, incidunt eveniet ipsam blanditiis eum possimus.</p>

				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi corrupti nobis eligendi rerum consectetur ut odit magnam illo ipsam eveniet, optio numquam mollitia earum. Vero hic fugit repellendus possimus cum.</p>

				<div>
					<img src="http://placekitten.com/g/200/300" alt=""/>
				</div>
			</div>

		)
	}
}

export default About