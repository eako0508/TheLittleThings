import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './landing';
import Dashboard from './dashboard';

export default class App extends React.Component {

	render(){
		return (
			<div>
				<Route exact path="/" component={Landing} />
				<Route exact path="/dashboard" component={Dashboard} />
			</div>
		);
	}
}