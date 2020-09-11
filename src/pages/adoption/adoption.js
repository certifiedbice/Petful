import React, {Component} from 'react';
import Context from '../../context/petfulcontext';
import PetfulApiService from '../../services/petful-api-service';
import Pet from '../../components/pet/pet';
import RegistrationForm from '../../components/registrationform/registrationform';
import Queue from '../../components/queue/queue';
import './adoption.css';

export default class AdoptionPage extends Component {
  static contextType=Context;

  	componentDidMount() {
    	this.context.clearError();
		this.context.queueInterval()
	}
  	
	componentWillUnmount() {
		clearInterval(this.context.queueIntervalState);
	}

	render(){
		const {error}=this.context;
		return(
			<section id='adoption-section'>
				<h2>Adoption Page</h2>

				<h3>People currently in line</h3>
				<Queue/>

				<h3>Here are the pets for adoption</h3>

				<Pet key='cat' type='cat'/>
				<Pet key='dog' type='dog'/>
				{
					this.context.user===null
						?<RegistrationForm key='regForm'/>
						:<></>
				}
			</section>
		);
	}
}