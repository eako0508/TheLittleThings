import React from 'react';
import './mainContent.css';
import { Avatar } from 'antd';

export default class MainContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			friends: [
				{ name: 'Josh' },
				{ name: 'Isaac' },
				{ name: 'Ryan' }
			]
		}
	}



	render(){
		return (
			<div className='body-content-div'>
				<div>
					<Avatar shape='square' size='large' icon='user' />
					name: {this.state.friends[0].name}
				</div>
				<div>
					<Avatar shape='square' size='large' icon='user' />
					name: {this.state.friends[1].name}
				</div>
				<div>
					<Avatar shape='square' size='large' icon='user' />
					name: {this.state.friends[2].name}
				</div>
			</div>
		);
	}
}