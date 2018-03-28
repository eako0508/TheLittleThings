import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './landing';
import Dashboard from './dashboard';
import AddPerson from './addPerson';
import EditPerson from './editPerson';

export default class App extends React.Component {

	render(){
		return (
			<div>
				<Route exact path="/" component={Landing} />
				<Route exact path="/dashboard" component={Dashboard} />
				{/*<Route path="/add" component={AddPerson} />
				<Route path="/edit" component={EditPerson} />*/}
			</div>
		);
	}
}