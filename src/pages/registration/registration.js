import React, {Component} from 'react';
import Context from '../../context/petfulcontext';
import RegistrationForm from '../../components/registrationform/registrationform';
import './registration.css';

export default class RegistrationPage extends Component {
	static contextType=Context;

	componentDidMount() {
		this.context.clearError();
	}

	render(){
		const {error}=this.context;
		return(
			<section id='registration-section'>
				<div className='section-element' id='registration-form'>
					<RegistrationForm/>
				</div>
			</section>
		);
	}
}