import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Context from '../../context/petfulcontext';
import './adoption.css';
import PetfulApiService from '../../services/petful-api-service';
import Pet from '../../components/pet/pet';

export default class AdoptionPage extends Component {
  static contextType=Context;

  state = {
    cats:[],
    dogs:[]
  }

	componentDidMount() {
    this.context.clearError();
    this.setState({
      cats: PetfulApiService.getCats(),
      dogs: PetfulApiService.getDogs()
    })
	}
	
	pictureToDisplay=()=>{
		let randomeNumber=Math.floor((Math.random()*2)+1);
		if(randomeNumber===1){return this.context.landingPicture1;}
		else{return this.context.landingPicture2;}
	}
  	
	render(){
		const {error}=this.context;
		return(
			<section id='adoption-section'>
        <h2>Adoption Page</h2>

        <h3>Here are the pets for adoption</h3>

        <Pet type="Cat" pet={this.state.cats[0]}/>

        <Pet type="Dog" pet={this.state.dogs[0]}/>

				{/* <div className='section-element' id='landing-picture'>
					<img src={this.pictureToDisplay()} alt='Adopt a pet'/>
				</div>
				<div className='section-element' id='landing-description'>
					<p>
						Welcome to the Petful FIFO Adoption Service.
						Sign up today, we have someone we would like you to meet. 
					</p>
					<h2>How it works</h2>
					<ol>
						<li>Sign up.</li>
						<li>You are placed onto our waitlist.</li>
						<li>Your name reaches the top of the list.</li>
						<li>You adopt the pet at the top of the list.</li>
						<li>You and your new best friend live happily ever after.</li>
					</ol>
				</div>
				<div className='section-element' id='landing-button'>
					<h2><Link to='/registration'>Sign Up</Link></h2>
				</div> */}
			</section>
		);
	}
}