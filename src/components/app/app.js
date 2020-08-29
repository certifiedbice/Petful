import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import LandingPage from '../../pages/landing/landing';
import AdoptionPage from '../../pages/adoption/adoption';
import './app.css';

class App extends Component{
	state={error:false};

	static getDerivedStateFromError(error){
		console.error(error);
		return {error:true};
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}

	logoutFromIdle = () => {
		
	}
	
	render(){
		return(
			<div className='app'>
				<Header/>
				<main className='main'>
					{this.state.error && <p className='red'>There was an error! Oh no!</p>}
					<Switch>
						<Route exact path={'/adoptions'} component={AdoptionPage}/>
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
