import React, {Component} from 'react';
import Context from '../../context/petfulcontext';
import PetfulApiService from '../../services/petful-api-service';
import Pet from '../../components/pet/pet';
import RegistrationForm from '../../components/registrationform/registrationform';
import Queue from '../../components/queue/queue';
import './adoption.css';

export default class AdoptionPage extends Component {
  static contextType=Context;

  	updateQueue=()=>{
		//store the user at the front of queue in a variable
		let user=this.context.people[0];
		//send the delete request to the api
		PetfulApiService.deleteUser(user);
		//send the post request to the api with the stored user
		PetfulApiService.postUser({name:user});
		//update context/state?
		this.context.deleteUserFromQueue(user);
		this.context.addUserToQueue(user);
		//delete the head of the list either dog or cat, chosen at random
		const petToDelete=Math.floor(Math.random()*2);
		if(petToDelete===0){this.context.deleteDog();}
		else{this.context.deleteCat();}
	}

	queueUpdater=()=>{
		let queueInterval=setInterval(this.updateQueue,15000);
	}
	
	componentDidMount() {
    	this.context.clearError();
		this.queueUpdater()
	}
  	
	componentWillUnmount() {
		clearInterval(this.queueInterval);
	}

	render(){
		console.log(this.context.user)
		const {error}=this.context;
		return(
			<section id='adoption-section'>
				<h2>Adoption Page</h2>

				<h3>People currently in line</h3>
				<Queue/>

				<h3>Here are the pets for adoption</h3>

				<Pet type='cat'/>
				<Pet type='dog'/>
				{
					this.context.user===null
						?<RegistrationForm/>
						:<></>
				}
				

			</section>
		);
	}
}