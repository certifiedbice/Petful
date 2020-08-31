import React,{Component} from 'react';

const PetfulContext=React.createContext({
	user:null,
	people:null,
	dogs:null,
	cats:null,
	landingPicture1:null,
	landingPicture2:null,
	error:null,
	setError:()=>{},
	clearError:()=>{},
	setPeople:()=>{},
	setPerson:()=>{},
	setDogs:()=>{},
	setCats:()=>{},
	setLandingPicture:()=>{},
});
export default PetfulContext;

export class PetfulProvider extends Component {
	state={
		user:'',
		isInLine: false,
		people:[],
		dogs:[],
		cats:[],
		landingPicture1:null,
		landingPicture2:null,
		error:null,
	}

	setUser=user=>{
		this.setState({user:user})
	}

	setIsInLine=value=>{
		this.setState({isInLine:value})
	}

	setPeople=people=>{
		this.setState({people:people})
	}

	addPerson=person=>{
		this.setState({people:[...this.state.people,person]})
	}

	setDogs=dogs=>{
		this.setState({dogs:dogs.dogs})
	}

	setCats=cats=>{
		this.setState({cats:cats.cats})
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
			people:this.state.people,
			dogs:this.state.dogs,
			cats:this.state.cats,
			landingPicture1:this.state.landingPicture1,
			landingPicture2:this.state.landingPicture2,
			error:this.state.error,
			setError:this.setError,
			clearError:this.clearError,
			setPeople:this.setPeople,
			setPerson:this.setPerson,
			setDogs:this.setDogs,
			setCats:this.setCats,
			setLandingPicture:this.setLandingPicture,
		};
		return(
			<PetfulContext.Provider value={value}>
				{this.props.children}
			</PetfulContext.Provider>
		);
	};
}
