import React,{Component} from 'react';

const PetfulContext=React.createContext({
	error:null,
	setError:()=>{},
	clearError:()=>{},
});
export default PetfulContext;

export class PetfulProvider extends Component {
	state={
		people:[],
		dogs:[],
		cats:[],
		error:null,
	};

	// setArticleList=articleList=> {
	// 	this.setState({ articleList })
	// };

	setError=error=>{
		console.error(error);
		this.setState({error});
	};

	clearError=()=>{
		this.setState({error:null})
	};

	render(){
		const value={
			// articleList: this.state.articleList,
			error:this.state.error,
			setError:this.setError,
			clearError:this.clearError,
			//setArticleList: this.setArticleList,
		};
		return(
			<PetfulContext.Provider value={value}>
				{this.props.children}
			</PetfulContext.Provider>
		);
	};
}
