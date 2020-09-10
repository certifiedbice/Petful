import React, {Component} from 'react';
import Context from '../../context/petfulcontext';
import PetfulApiService from '../../services/petful-api-service';
import './adoptionbutton.css';

export default class AdoptionButton extends Component{
	static contextType=Context;
	
	handleButtonClick = () => {
		if(this.props.type === 'Cat') {
			PetfulApiService.deleteCat();
			this.context.deleteCat();
		}
		if(this.props.type === 'Dog') {
			PetfulApiService.deleteDog();
			this.context.deleteDog();
		}
		this.context.setIsInLine(false);
		window.alert("Congrats! You've adopted this pet!");
	}
	
	render(){
		const {error}=this.context;
		return (
			<>
				<input type='button' onClick={this.handleButtonClick} value='Adopt'/>
			</>
		)
	}
}