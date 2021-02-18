import React,{Component} from 'react';
import PetfulApiService from '../services/petful-api-service';

const PetfulContext=React.createContext({
	init:false,
	queueIntervalState:null,
	user:null,
	people:null,
	dogs:null,
	cats:null,
	landingPicture1:null,
	landingPicture2:null,
	error:null,
	setError:()=>{},
	clearError:()=>{},
	queueInterval:()=>{},
	setInit:()=>{},
	setPeople:()=>{},
	setUser:()=>{},
	addUserToQueue:()=>{},
	deleteUserFromQueue:()=>{},
	setDogs:()=>{},
	deleteDog:()=>{},
	setCats:()=>{},
	deleteCat:()=>{},
	setLandingPicture:()=>{},
});
export default PetfulContext;

export class PetfulProvider extends Component {
	state={
		init:false,
		user:null,
		queueIntervalState:null,
		people:[],
		dogs:[],
		cats:[],
		landingPicture1:null,
		landingPicture2:null,
		error:null,
	}

	addUserToQueue=user=>{
		this.setState({people:[...this.state.people,user]})
	}

	deleteUserFromQueue=user=>{
		let tmpArray=[...this.state.people];
		tmpArray.shift();
		this.setState({people:[...tmpArray]})
	}

	updateQueue=()=>{
		//store the user at the front of queue in a variable
		let user=this.state.people[0];
		//send the delete request to the api
		PetfulApiService.deleteUser(user);
		//send the post request to the api with the stored user
		PetfulApiService.postUser({name:user});
		//update context/state?
		this.deleteUserFromQueue(user);
		this.addUserToQueue(user);
		//delete the head of the list either dog or cat, chosen at random
		const petToDelete=Math.floor(Math.random()*2);
		if(petToDelete===0){this.deleteDog();}
		else{this.deleteCat();}
	}

	queueInterval=()=>{
		let interval=setInterval(this.updateQueue,15000)
		this.setState({queueIntervalState:interval})
	}

	setInit=init=>{this.setState({init:init})}
	
	setUser=user=>{this.setState({user:user.name})}

	setPeople=people=>{this.setState({people:people})}

	setDogs=dogs=>{this.setState({dogs:dogs})}

	deleteDog=dog=>{
		let tmpArray=[...this.state.dogs];
		tmpArray.shift();
		this.setState({dogs:[...tmpArray]})
	}
	
	setCats=cats=>{this.setState({cats:cats})}

	deleteCat=cat=>{
		let tmpArray=[...this.state.cats];
		tmpArray.shift();
		this.setState({cats:[...tmpArray]})
	}

	setLandingPicture=(num,imageURL)=>{
		if(num===1){this.setState({landingPicture1:imageURL})}
		else{this.setState({landingPicture2:imageURL})}
	}

	setError=error=>{
		console.error(error);
		this.setState({error});
	};

	clearError=()=>{
		this.setState({error:null})
	};

	render(){
		const value={
			init:this.state.init,
			queueIntervalState:this.state.queueIntervalState,
			user:this.state.user,
			people:this.state.people,
			dogs:this.state.dogs,
			cats:this.state.cats,
			landingPicture1:this.state.landingPicture1,
			landingPicture2:this.state.landingPicture2,
			error:this.state.error,
			setError:this.setError,
			clearError:this.clearError,
			queueInterval:this.queueInterval,
			setInit:this.setInit,
			setPeople:this.setPeople,
			setUser:this.setUser,
			addUserToQueue:this.addUserToQueue,
			deleteUserFromQueue:this.deleteUserFromQueue,
			setDogs:this.setDogs,
			deleteDog:this.deleteDog,
			setCats:this.setCats,
			deleteCat:this.deleteCat,
			setLandingPicture:this.setLandingPicture,
		};
		return(
			<PetfulContext.Provider value={value}>
				{this.props.children}
			</PetfulContext.Provider>
		);
	};
}
