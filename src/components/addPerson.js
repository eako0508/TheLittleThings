import React from 'react';	//origin
import { Form, Input, Button } from 'antd';	//origin
import { Layout, Row, DatePicker } from 'antd';
const FormItem = Form.Item;	//origin
const { TextArea } = Input;	//origin

export default class AddPerson extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			questions: [
				'What is your favorite local restaurant and the meal you most enjoy eating when there?',
				'What\'s your favorite drink?',
				'What songs have you completely memorized?',
				'Are you usually early or late?',
				'How do you relax after a hard day of work?',
				'What\'s the farthest you’ve ever been from home?'
			]
		}
	}
	handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted');
	}
	
	render(){
		//const {getFieldDecorator} = this.props.form;
		const questions = this.state.questions.map((item,idx)=>{
			return <FormItem key={idx}>{item}<TextArea rows={4}/></FormItem>;
		});
		return (
			<Row gutter={16}>				
				<Form onSubmit={this.handleSubmit}>
					<FormItem label='Name'>
						<Input placeholder='Name' />
					</FormItem>

					<FormItem label='Note'>
						<TextArea rows={4} placeholder='Note' />
					</FormItem>

					<FormItem>
						Date of birth
						<DatePicker />
					</FormItem>

					{questions}

					<FormItem>
						<Button type='primary' htmlType='submit'>Submit</Button>
					</FormItem>
				</Form>
			</Row>
		);
	}
}