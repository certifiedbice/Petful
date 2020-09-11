import React, {Component} from 'react';
import Context from '../../context/petfulcontext';
import PetfulApiService from '../../services/petful-api-service';
import './adoptionbutton.css';

export default class AdoptionButton extends Component{
	static contextType=Context;
	
	handleButtonClick = () => {
		if(this.props.type === 'cat') {
			PetfulApiService.deleteCat();
			this.context.deleteCat();
		}
		if(this.props.type === 'dog') {
			PetfulApiService.deleteDog();
			this.context.deleteDog();
		}
		this.context.deleteUserFromQueue(this.context.user);
		this.context.setUser({name:null});
		clearInterval(this.context.queueIntervalState);
		window.alert("Congrats! You've adopted this pet!");
	}
	
	render(){
		const {error}=this.context;
		let rando=()=>{Math.floor(Math.random() * Math.floor(2));};
		return (
			<input key={rando} type='button' onClick={this.handleButtonClick} value='Adopt'/>
		)
	}
}