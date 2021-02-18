import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './header.css';

export default class Header extends Component{
	render(){
		return(
			<header className='header'>
				<h1><Link to='/landing'>Petful - FIFO Adoption Service</Link></h1>
				<nav className='nav'>
				</nav>
			</header>
		);
	}
}
