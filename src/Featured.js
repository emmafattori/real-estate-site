import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class Featured extends Component{

	constructor(){
		super()
		this.state = {
			featuredList: []
		}
	}

	componentDidMount(){

		axios({
			method: 'GET',
			url: "https://api.unsplash.com/search/photos/", 
			dataResponse: 'json',
			params: {
				query: 'house', 
				client_id: '45912bc9b462e37ffa613bca80d77366a74c17579629e7282b92d9cc6b3974a2'
			}
		})
		.then( (data) => {
			console.log(data.data.results);
			this.setState({
				featuredList: data.data.results
			})

			// console.log(this.state.featuredList[0].id);
		})

		
		
	}

	

	render(){
		return(
			<div className="featured__section">
				<h2>Featured Listings</h2>

				<div className="results">
					{this.state.featuredList.map( (singleHome) => {
						return(
							// console.log(singleHome)

							<li key={singleHome.id}>
								<h3>{singleHome.description}</h3>
								<img src={singleHome.urls.small} alt={singleHome.description}/>
							</li>
						)


					})}

				</div>


			</div>






		)
	}
}










export default Featured