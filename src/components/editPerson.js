import React from 'react';
import { Row, Col, List, Button, Divider, Collapse } from 'antd';
const Panel = Collapse.Panel;

export default class EditPerson extends React.Component {
	constructor(props){
		super(props);
		//this.onChangeMenu = this.onChangeMenu.bind(this);
		this.state = {

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
			return (
				<Panel
				header={item.q}
				key={idx}
				>
					<p>{item.a}</p>
				</Panel>
			);
		});
		return (
			<Row className='preference' gutter={16}>

				<Row gutter={16}>
					<h3>Jessica</h3>
					Date of birth: March 17
				</Row>
				<Divider />
				<Row gutter={16}>

						<h3>Likes</h3>
						<List
						dataSource={this.props.editPersonData.data.likes}
						renderItem={item => (
							<List.Item
							actions={[<a href='#'>edit</a>, <a href='#'>remove</a>]}
							>
								{item}
							</List.Item>
						)}
						/>

						<Divider />

						<h3>Dislikes</h3>
						<List
						dataSource={this.props.editPersonData.data.dislikes}
						renderItem={item => (
							<List.Item
							actions={[<a href='#'>edit</a>, <a href='#'>remove</a>]}
							>
								{item}
							</List.Item>
						)}
						/>

				</Row>
				<Divider />
				<h3>Questionnairs</h3>
				<Row gutter={16}>
					<Collapse>
						{showQuestionnair}
					</Collapse>
				</Row>
			</Row>
		);
	}
}
