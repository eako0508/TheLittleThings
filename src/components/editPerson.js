import React from 'react';
import { Row, Col, List, Button, Divider, Collapse } from 'antd';
const Panel = Collapse.Panel;

export default class EditPerson extends React.Component {
	constructor(props){
		super(props);
		//this.onChangeMenu = this.onChangeMenu.bind(this);
		this.state = {
			/*
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
			},
			questionnair: [
				{
					q:'What is your favorite local restaurant and the meal you most enjoy eating when there?',
					a: 'There\'s a vietnamese restaurant in the flushing and I always eat Pho and summer roll from there every time I visit.'
				},{
					q: 'What\'s your favorite drink?',
					a: 'Lately it\'s black coffee.'
				},{
					q: 'What songs have you completely memorized?',
					a: 'Lot of songs from Seo Taiji from South Korea.'
				},{
					q: 'Are you usually early or late?',
					a: 'I am an early bird at the beginning, but then ...'
				},{
					q: 'How do you relax after a hard day of work?',
					a: 'I used to play computer games, or watch TV shows.'
				}
			]
			*/
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

	render(){
		console.log(this.props.editPersonData);
		const showQuestionnair = this.props.editPersonData.questionnair.map((item,idx)=>{
			console.log(item);
			return <Panel header={item.q} key={idx}><p>{item.a}</p></Panel>;
		});
		return (
			<Row className='preference' gutter={16}>
				
				<Divider />
				<Row gutter={16}>
					<h3>Jessica</h3>
					Date of birth: March 17
				</Row>
				<Divider />
				<Row gutter={16}>
					<Col span={12} className='Likes'>
						<h3>Likes</h3>
						<List
						dataSource={this.props.editPersonData.data.likes}
						renderItem={item => (<List.Item>{item}</List.Item>)}
						/>
					</Col>
					<Col span={12} className='Dislikes'>
						<h3>Dislikes</h3>
						<List
						dataSource={this.props.editPersonData.data.dislikes}
						renderItem={item => (<List.Item>{item}</List.Item>)}
						/>
					</Col>
				</Row>
				<Divider><h3>Questionnairs</h3></Divider>
				<Row gutter={16}>
					{/*<List
					bordered
					dataSource={this.state.questionnair}
					renderItem={item=> (<List.Item><List.Item>Q: {item.q}</List.Item><List.Item>A: {item.a}</List.Item></List.Item>)}
					/>*/}
					<Collapse>
						{showQuestionnair}
					</Collapse>
				</Row>
			</Row>
		);
	}
}