import React from 'react';

import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;

export default class AddPerson extends React.Component {

	constructor(props){
		super(props);
		this.state = {

		}
	}
	handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted');

	}
	render(){
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormItem label='Name'>
					<Input placeholder='Name' />
				</FormItem>
				<FormItem label='Note'>
					<TextArea rows={4} placeholder='Note' />
				</FormItem>
				<FormItem>
					<Button type='primary' htmlType='submit'>Submit</Button>
				</FormItem>
			</Form>
		);
	}
}