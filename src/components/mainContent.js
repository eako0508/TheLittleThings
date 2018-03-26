import React from 'react';
import './mainContent.css';
import { Redirect } from 'react-router-dom';
import { Avatar, Card, Icon } from 'antd';
const { Meta } = Card;

export default class MainContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			friends: [
				{ name: 'Josh', description: 'he\'s alright' },
				{ name: 'Isaac', description: 'Small asian guy from office' },
				{ name: 'Ryan', description: 'A guy from New Hampshire' }
			]
		}
	}

	handleClickEdit = (e) => {
		e.preventDefault();
		console.log('Edit clicked');
		console.log(e);
		window.location = '/edit';
	}

	render(){
		return (
			<div className='body-content-div'>
				<Card
				hoverable
				style={{ width: 240 }}
				cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
				actions={[<Icon type="edit" onClick={this.handleClickEdit}/>, <Icon type="ellipsis" />]}
				className='friendCards'
				>
					<Meta
					title="Jessica"
					description="Cool girl"
					/>
				</Card>
				<Card
				hoverable
				style={{ width: 240 }}
				cover={<Avatar shape='square' size='large' icon='user' className='friendAvatar'/>}
				actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}
				className='friendCards'
				>
					<Meta
					title={this.state.friends[0].name}
					description={this.state.friends[0].description}
					/>
				</Card>
				<Card
				hoverable
				style={{ width: 240 }}
				cover={<Avatar shape='square' size='large' icon='user' className='friendAvatar'/>}
				actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}
				className='friendCards'
				>
					<Meta
					title={this.state.friends[1].name}
					description={this.state.friends[1].description}
					/>
				</Card>
				<Card
				hoverable
				style={{ width: 240 }}
				cover={<Avatar shape='square' size='large' icon='user' className='friendAvatar'/>}
				actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}
				className='friendCards'
				>
					<Meta
					title={this.state.friends[2].name}
					description={this.state.friends[2].description}
					/>
				</Card>
			</div>
		);
	}
}