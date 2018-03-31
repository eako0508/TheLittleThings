import React from 'react';
import AddToList from './addToList';
import './editPerson.css';
import { List, Divider, Collapse, Avatar } from 'antd';
import { Row, Col, Image } from 'react-bootstrap';

const Panel = Collapse.Panel;

export default class EditPerson extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
	onSubmitHandler = (likey, obj) => {
		if(likey === 'like'){
			console.log('like');
			console.log(obj);
		} else {
			console.log('dislike');
			console.log(obj);
		}
	}
	render(){

		const showQuestionnair = this.props.editPersonData.questionnair.map((item,idx)=>{
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
			<Row className='preference'>
				<Row>
					<Col xs={10} xsOffset={1} md={4} mdOffset={4}>

					<h3 className='block-center'>{this.props.editPersonData.info.name}</h3>
					{/*<Avatar shape='square' size='large' icon='user' className='friendAvatar'/>*/}
					<Row>

							{this.props.editPersonData.info.url === ''
								? <Avatar shape='square' size='large' icon='user' className='friendAvatar'/>
								: <Image className='person-img' alt='img' src={this.props.editPersonData.info.url} responsive />}
					</Row>
					<p className='css-dob'>
						Date of birth: {this.props.editPersonData.info.DOB}
					</p>
					</Col>
				</Row>
				<Divider />
				<Row >
					<h3>Likes</h3>
					<List
					dataSource={this.props.editPersonData.data.likes}
					renderItem={item => (
						<List.Item
						actions={[<a>edit</a>, <a>remove</a>]}
						>
							{item}
						</List.Item>
					)}
					/>
					<AddToList onSubmitHandler={e=>this.onSubmitHandler('like', e)} />
					<Divider />

					<h3>Dislikes</h3>
					<List
					dataSource={this.props.editPersonData.data.dislikes}
					renderItem={item => (
						<List.Item
						actions={[<a>edit</a>, <a>remove</a>]}
						>
							{item}
						</List.Item>
					)}
					/>
					<AddToList onSubmitHandler={e=>this.onSubmitHandler('dislike', e)} />

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
