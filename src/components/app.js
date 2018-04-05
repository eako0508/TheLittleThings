import React from 'react';
import Landing from './landing';
import Dashboard from './dashboard';

export default class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			login: false
		}
	}

	loginHandler = () => {
		this.setState({
			login: true
		});
	}
	logoutHandler = () => {
		this.setState({
			login: false
		});
	}
	render(){
		let page;
		if(!this.state.login){
			page = <Landing loginHandler={this.loginHandler} />;
		} else{
			page = <Dashboard logoutHandler={this.logoutHandler}/>;
		}
		return (
			<div>
				{page}				
			</div>
		);
	}
}