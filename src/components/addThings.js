import React from 'react';
import Lookup from './lookup';
import { Row, Col } from 'react-bootstrap';

export default class AddThings extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			
		}
	}

	render(){
		return (
			<div>
				<Row>
					<Col xs={10} xsOffset={1} md={8} mdOffset={2}>
						<h1>Add Things</h1>
						<Lookup/>
						<div className='displayNames'>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}