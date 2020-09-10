import React, {Component} from 'react';
import Context from '../../context/petfulcontext';
import './adoptionbutton.css';

export default class AdoptionButton extends Component{
	static contextType=Context;
	
	handleButtonClick = () => {
		// if(props.type === 'Cat') {
		//   PetfulApiService.deleteCat();
		// }
		// if(props.type === 'Dog') {
		//   PetfulApiService.deleteDog();
		// }
		// context.setIsInLine(false);
		// window.alert("Congrats! You've adopted this pet!");
	}
	
	render(){
		const {error}=this.context;
		return (
			<>
				<input type='button' value='Adopt'/>
			</>
		)
	}
}