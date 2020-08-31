import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Context from '../../context/petfulcontext';
import './adoption.css';
import PetfulApiService from '../../services/petful-api-service';
import Pet from '../../components/pet/pet';

export default class AdoptionPage extends Component {
  static contextType=Context;

  handleGetInLineButtonClick = () => {
    const user = this.context.user;
    this.context.addPerson(user);
    this.context.setIsInLine(true);
    setInterval(()=>{
      if(this.context.user === this.context.people[0]) {
        clearInterval();
      }      
      PetfulApiService.deleteUser();
    },5000)
  }

	componentDidMount() {
    this.context.clearError();
	}
  	
	render(){
		const {error}=this.context;
		return(
			<section id='adoption-section'>
        <h2>Adoption Page</h2>

        <h3>List of people in line</h3>
        {this.context.people.forEach(person => {
          return (
            <div>{person}</div>
          )
        })}

        {!this.context.isInLine &&
          <button onclick={this.handleGetInLineButtonClick}>Get in line</button>
        }

        <h3>Here are the pets for adoption</h3>

        <Pet type="Cat" pet={this.context.cats[0]}/>

        <Pet type="Dog" pet={this.context.dogs[0]}/>

			</section>
		);
	}
}