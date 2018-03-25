//TODO: implement redux-form..?

import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

export default class LoginForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		/*
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
		*/
	}
	render(){

		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<FormItem>
					<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
					placeholder="Username" />
				</FormItem>
				<FormItem>
					<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
					type="password" placeholder="Password" />
				</FormItem>
				<FormItem>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Log in
					</Button>
					<Button type="primary" htmlType="button" className=""
					onClick={this.props.onClick} >
						Register
					</Button>
				</FormItem>
			</Form>
		);
	}
}