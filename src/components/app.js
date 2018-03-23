import React from 'react';
import Nav from './nav';
import * as BS from 'react-bootstrap';

export default class App extends React.Component {

	render(){
		return (
			<BS.Grid>
				<div>
					<Nav />
					main
				</div>
			</BS.Grid>
		);
	}
}