import React, {Component} from 'react';
import Context from '../../context/petfulcontext';
import './queue.css';

export default class Queue extends Component {
  	static contextType=Context;

	render(){
		return(
			<div id='queue-container'>
				{this.context.people.map(person=>{return(<div>{person}</div>)})}
			</div>
		);
	}
}

