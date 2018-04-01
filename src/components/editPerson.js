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

				<Col xs={10} xsOffset={1}>

					<h3 className='block-center'>{this.props.editPersonData.info.name}</h3>
					{/*<Avatar shape='square' size='large' icon='user' className='friendAvatar'/>*/}
					<Row>
						<Col xs={12} sm={6} smOffset={3}>
						{this.props.editPersonData.info.url === ''
							? <Avatar shape='square' size='large' icon='user' className='friendAvatar'/>
							: <Image className='person-img' alt='img' src={this.props.editPersonData.info.url} responsive rounded />}
						</Col>
					</Row>
					<h4>Date of birth</h4>
					<p>
						{this.props.editPersonData.info.DOB}
					</p>


					<Divider />

					{/*<Col xs={10} xsOffset={1}>*/}
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
						<Divider />

						<h3>Questionnairs</h3>
						<Collapse>
							{showQuestionnair}
						</Collapse>
				</Col>





			</Row>
		);
	}
}
