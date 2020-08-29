import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Context from '../../context/petfulcontext';
import PetfulApiService from '../../services/petful-api-service';
import Header from '../header/header';
import Footer from '../footer/footer';
import AdoptionPage from '../../pages/adoption/adoption';
import LandingPage from '../../pages/landing/landing';
import RegistrationPage from '../../pages/registration/registration';
import './app.css';

class App extends Component{
	static contextType=Context;

	componentDidMount(){
		this.context.clearError();
		PetfulApiService.getPeople().then(data=>this.context.setPeople(data));
		PetfulApiService.getDogs().then(data=>{
			this.context.setDogs(data);
			this.context.setLandingPicture(1,data[0].imageURL);
		});
		PetfulApiService.getCats().then(data=>{
			this.context.setCats(data);
			this.context.setLandingPicture(2,data[0].imageURL);
		});
	}

	render(){
		const {error}=this.context;
		return(
			<div id='app'>
				<Header/>
				<main id='main'>
					<Switch>
						<Route exact path={'/adoptions'} component={AdoptionPage}/>
						<Route exact path={'/'} component={LandingPage}/>
						<Route exact path={'/home'} component={LandingPage}/>
						<Route exact path={'/landing'} component={LandingPage}/>
						<Route exact path={'/registration'} component={RegistrationPage}/>
					</Switch>
				</main>
				<Footer/>
			</div>
		);
	}
}

export default App;
