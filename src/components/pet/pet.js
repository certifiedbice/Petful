import React, {Component} from 'react';
import Context from '../../context/petfulcontext';
import AdoptionButton from '../adoptionbutton/adoptionbutton';
import './pet.css';
export default class Pet extends Component{
	static contextType=Context;
	
	componentDidMount() {
    	this.context.clearError();
	}

	render(){
		let age=null;
		let breed=null;
		let description=null;
		let gender=null;
		let imageURL=null;
		let name=null;
		let story=null;
		const {error}=this.context;
		if(this.props.type==='cat'){
			if(this.context.cats!==undefined&&this.context.cats.length>0){
				console.log(this.context.cats)
				age = this.context.cats[0].age;
				breed = this.context.cats[0].breed;
				description = this.context.cats[0].description;
				gender = this.context.cats[0].gender;
				imageURL = this.context.cats[0].imageURL;
				name = this.context.cats[0].name;
				story = this.context.cats[0].story;
			}
		}
		else{
			if(this.context.dogs!==undefined&&this.context.dogs.length>0){
				age = this.context.dogs[0].age;
				breed = this.context.dogs[0].breed;
				description = this.context.dogs[0].description;
				gender = this.context.dogs[0].gender;
				imageURL = this.context.dogs[0].imageURL;
				name = this.context.dogs[0].name;
				story = this.context.dogs[0].story;
			}	
		}
		return (
			<>
				<h3>{this.props.type}</h3>
				<div><img src={imageURL} alt="cute kitty" /></div>
				<div><span>Name: </span><span>{name}</span></div>
				<div><span>Gender: </span><span>{gender}</span></div>
				<div><span>Age: </span><span>{age}</span></div>
				<div><span>Breed: </span><span>{breed}</span></div>
				<div><span>Description: </span><span>{description}</span></div>
				<div><span>{name}'s story: </span><span>{story}</span></div>
				{
					this.context.user===this.context.people[0]
						? <AdoptionButton type={this.props.type}/>
						: <></>
				}
			</>
		)
	}
}