import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Context from '../../context/petfulcontext';
import PetfulApiService from '../../services/petful-api-service';
import Header from '../header/header';
import Footer from '../footer/footer';
import AdoptionPage from '../../pages/adoption/adoption';
import LandingPage from '../../pages/landing/landing';

import './app.css';

class App extends Component{
	static contextType=Context;

	async componentDidMount(){
		this.context.clearError();
		if(this.context.init===false){
			const peopleList= await PetfulApiService.getPeople();
				this.context.setPeople(peopleList)

			const dogList= await PetfulApiService.getDogs();
				this.context.setDogs(dogList);
				this.context.setLandingPicture(1,dogList[0].imageURL);

			const catList= await PetfulApiService.getCats();
				this.context.setCats(catList);
				this.context.setLandingPicture(2,catList[0].imageURL);

			this.context.setInit(true);
		}
	}

	render(){
		const {error}=this.context;
		return(
			<div id='app'>
				<Header/>
				<main id='main'>
					<Switch>
						<Route exact path={'/adoption'} component={AdoptionPage}/>
						<Route exact path={'/'} component={LandingPage}/>
						<Route exact path={'/home'} component={LandingPage}/>
						<Route exact path={'/landing'} component={LandingPage}/>
					</Switch>
				</main>
				<Footer/>
			</div>
		);
	}
}

export default App;
