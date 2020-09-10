import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import Context from '../../context/petfulcontext';
import PetfulApiService from '../../services/petful-api-service';
import './registrationform.css';

export default class RegistrationForm extends Component {
	static contextType=Context;

	componentDidMount() {
		this.context.clearError()
	}

  	handleSubmit=e=>{
		e.preventDefault();
		const {name}=e.target;
		this.setState({error:null});
	    PetfulApiService.postUser({name:name.value})
		.then(user=>{
			name.value='';
			this.context.setUser(user);
			this.context.addUserToQueue(user.name);
		})
		.catch(res=>{this.setState({error:res.error});});
    }
	
	render(){
		const {error}=this.context;
		return(
			<div>
				<form id='registration-form' name='registration-form' onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor='registration-form-name'><h2>Full name required</h2></label>
						<input name='name' id='registration-form-name' type='text' required/>
					</div>
					<div>
						<input name='submit' id='registration-form-submit' type='submit' value='SignUp'/>
					</div>
				</form>
			</div>
		);
	}
}