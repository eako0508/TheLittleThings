import React from 'react';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;

class RegisterForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			confirmDirty: false
		}
	}
	submitHandler = (e) =>{
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if(!err){
				console.log(values);
			}
		});		
	}
	handleConfirmBlur = (e) => {
		const value = e.target.value;
		this.setState({
			confirmDirty: this.state.confirmDirty || !!value
		});
	}
	passwordValidator_1 = (rule, value, callback) => {
		const form = this.props.form;
		if(value && this.state.confirmDirty){
			form.validateFields(['confirm-password'], {force: true});
		}
		callback();
	}
	passwordValidator_2 = (rule, value, callback) => {
		const form = this.props.form;
		if(value && value !== form.getFieldValue('password')){
			callback('Password does not match!');
		} else{
			callback();
		}
	}
	render(){
		const { getFieldDecorator } = this.props.form;

		return (
			<Form onSubmit={this.submitHandler}>
				<FormItem label='Username'>
					{getFieldDecorator('username',{
						validateTrigger: ['onChange', 'onBlur'],
						rules: [{
							required: true,
							whitespace: true,
							message: 'Username is required.'
						}]
					})(
						<Input />
					)}
				</FormItem>
				<FormItem label='Password'>
					{getFieldDecorator('password',{
						validateTrigger: ['onChange', 'onBlur'],
						rules: [{
							required: true,							
							message: 'Password is required.'
						},{
							validator: this.passwordValidator_1
						}]
					})(
						<Input type='password'/>
					)}
				</FormItem>
				<FormItem label='Confirm password'>
					{getFieldDecorator('confirm-password',{
						
						rules: [{
							required: true,
							message: 'Confirm the password.'
						}, {
							validator: this.passwordValidator_2
						}]
					})(
						<Input type='password' onBlur={this.handleConfirmBlur}/>
					)}
				</FormItem>
				<FormItem>
					<Button htmlType='submit'>Register</Button>
					<Button type='danger' onClick={this.props.onCancel}>Cancel</Button>
				</FormItem>
			</Form>
		);
	}
}

export default Form.create()(RegisterForm);