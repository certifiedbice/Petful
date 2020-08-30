import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Context from '../../context/petfulcontext';
import PetfulApiService from '../../services/petful-api-service';
import './registrationform.css';

export default class RegistrationForm extends Component {
	static contextType=Context;

	state = {
		shouldRedirect: false
	}

	renderRedirect=()=>{
		return(
			<Redirect to="/adoptions" />
		)
	}

	onRegistrationSuccess=()=>{
		console.log('Success')
		this.setState({shouldRedirect: true})
	}

	componentDidMount() {
		this.context.clearError()
	}

  	handleSubmit=e=>{
		e.preventDefault();
		const {full_name}=e.target;
		this.setState({error:null});
	    PetfulApiService.postUser({
		 	full_name:full_name.value,
		})
		.then(user=>{
			console.log(user)
			full_name.value='';
			this.context.setPerson(user);
			this.onRegistrationSuccess();
  		})
		.catch(res=>{this.setState({error:res.error});});
    }

	render(){
		const {error}=this.context;
		return(
			<div>
				{this.state.shouldRedirect && this.renderRedirect()}
				<form id='registration-form' name='registration-form' onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor='registration-form-full-name'><h2>Full name required</h2></label>
						<input name='full_name' id='registration-form-full-name' type='text' required/>
					</div>
					<div>
						<input name='submit' id='registration-form-submit' type='submit' value='Register'/>
					</div>
				</form>
			</div>
		);
	}
}