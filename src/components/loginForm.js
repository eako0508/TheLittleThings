import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

class LoginForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
		
	}
	render(){
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<FormItem>
					{getFieldDecorator('username',{
						validateTrigger: ['onChange', 'onBlur'],
						rules: [{
							required: true,
							whitespace: true,
							message: 'Username is required'
						}]
					})(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
						placeholder="Username" />
					)}					
				</FormItem>
				<FormItem>
					{getFieldDecorator('password',{
						validateTrigger: ['onChange', 'onBlur'],
						rules: [{
							required: true,
							whitespace: true,
							message: 'password is required'
						}]
					})(
						<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
						type="password" placeholder="Password" />
					)}					
				</FormItem>
				<FormItem>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Log in
					</Button>
					<Button type="primary" htmlType="button" className=""
					onClick={this.props.onClick} >
						Register
					</Button>
					<Button type='danger' onClick={this.props.handleLoginCancel}>Cancel</Button>					
				</FormItem>
			</Form>
		);
	}
}

export default Form.create()(LoginForm);