import React from 'react';
import AddToList from './addToList';
import { Row, List, Divider, Collapse } from 'antd';
//import { Button as ButtonBS, FormGroup, InputGroup, FormControl } from 'react-bootstrap';
//const FormItem = Form.Item;
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
