import React from 'react';
import { Row, Col, List, Button } from 'antd';

export default class EditPerson extends React.Component {
	constructor(props){
		super(props);
		//this.onChangeMenu = this.onChangeMenu.bind(this);
		this.state = {			
			data: {
				likes: [
					'cooking Italian food',
					'shopping from Macy\'s',
					'she likes to be recognized with her hard work and efforts',
					'likes those who are kind to others'
				],
				dislikes: [
					'She hates when people taker her food away without asking, like snacks',
					'she doesn\'t like rude people'
				]
			}
		}
	}
	/* 
	this doesn't work

	goBack(e){
		console.log(e);
		if(this.props.onChangeMenu){
			this.props.onChangeMenu('MainContent');
		} else{
			console.log('no');
		}
	}	
	*/

	goBack = (e) => {
		this.props.onChangeMenu('MainContent');		
	}

	render(){
		return (
			
			<Row className='preference' gutter={16}>				
				<Row gutter={16}>
					<Button onClick={this.goBack} > Go Back to Dashboard </Button>
				</Row>
				<Col span={12} className='Likes'>
					<h3>Likes</h3>
					<List
					bordered
					dataSource={this.state.data.likes}
					renderItem={item => (<List.Item>{item}</List.Item>)}
					/>
				</Col>
				<Col span={12} className='Dislikes'>
					<h3>Dislikes</h3>
					<List
					bordered
					dataSource={this.state.data.dislikes}
					renderItem={item => (<List.Item>{item}</List.Item>)}
					/>
				</Col>
			</Row>
		);
	}
}