import React from 'react';	//origin
import { Form, Input, Button } from 'antd';	//origin
import { Layout, Row } from 'antd';
const FormItem = Form.Item;	//origin
const { TextArea } = Input;	//origin

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
	goBack = (e) => {
		this.props.onChangeMenu('MainContent');		
	}
	render(){
		return (
			<Row gutter={16}>
				<Row gutter={16}>
					<Button onClick={this.goBack} > Go Back to Dashboard </Button>
				</Row>
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
			</Row>
		);
	}
}