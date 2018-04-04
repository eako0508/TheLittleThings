import React from 'react';
import './addPerson.css';
import { Form, Input, Button, Icon, InputNumber } from 'antd';
import { Row, Col } from 'react-bootstrap';
const FormItem = Form.Item;
const { TextArea } = Input;

let uuid = 0;

	const questions_list = [
		'What is your favorite local restaurant and the meal you most enjoy eating when there?',
		'What\'s your favorite drink?',
		'What songs have you completely memorized?',
		'Are you usually early or late?',
		'How do you relax after a hard day of work?',
		'What\'s the farthest you’ve ever been from home?'
	]

class AddPerson extends React.Component {
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

	remove = (k) => {
		const { form } = this.props;
		// can use data-binding to get
		const keys = form.getFieldValue('keys');
		// We need at least one passenger
		if (keys.length === 0) {
			return;
		}
		// can use data-binding to set
		form.setFieldsValue({
			keys: keys.filter(key => key !== k),
		});
	}
	add = () => {
		const { form } = this.props;
		// can use data-binding to get
		const keys = form.getFieldValue('keys');
		const nextKeys = keys.concat(uuid);
		uuid++;
		// can use data-binding to set
		// important! notify form to detect changes
		form.setFieldsValue({
			keys: nextKeys,
		});
	}
	remove_d = (k) => {
		const { form } = this.props;
		// can use data-binding to get
		const keys_d = form.getFieldValue('keys_d');
		// We need at least one passenger
		if (keys_d.length === 0) {
			return;
		}
		// can use data-binding to set
		form.setFieldsValue({
			keys_d: keys_d.filter(key => key !== k),
		});
	}
	add_d = () => {
		const { form } = this.props;
		// can use data-binding to get
		const keys_d = form.getFieldValue('keys_d');
		const nextKeys = keys_d.concat(uuid);
		uuid++;
		// can use data-binding to set
		// important! notify form to detect changes
		form.setFieldsValue({
			keys_d: nextKeys,
		});
	}
	dobCheckDay = (rule, value, callback) => {
		const form = this.props.form;
		
		if(value && form.getFieldValue('DOB_day')===''){
			callback('Day is empty!!!!');
		} else{
			callback();
		}
	}
	dobCheckMonth = (rule, value, callback) => {
		const form = this.props.form;
		
		if(value && form.getFieldValue('DOB_month')===''){
			callback('Day is empty!!!!');
		} else{
			callback();
		}
	}
	render(){
		const { getFieldDecorator, getFieldValue } = this.props.form;
		const questions = questions_list.map((item,idx)=>{
			return <FormItem key={idx}>{item}<TextArea rows={4}/></FormItem>;
		});
		//const questions = this.props.questions;
		console.log(this.props.questinos)
		getFieldDecorator('keys', { initialValue: [] });
		const keys = getFieldValue('keys');

		const formItems = keys.map((k, index) => {
			return (
				<FormItem				
				required='false'
				key={k}
				>
					{getFieldDecorator(`like-${k}`, {
						validateTrigger: ['onChange', 'onBlur'],
						rules: [{
							required: true,
							whitespace: true,
							message: "Please input passenger's name or delete this field.",
						}]
					})(
						<Input placeholder='add Likes' style={{ width: '60%', marginRight: 8 }} />
					)}

					{keys.length > 0 ? (
						<Icon
						type="minus-circle-o"
						onClick={() => this.remove(k)}
						/>
					): null}
				</FormItem>
			);
		});

		getFieldDecorator('keys_d', { initialValue: [] });
		const keys_d = getFieldValue('keys_d');

		const formItems_d = keys_d.map((k, index) => {
			return (
				<FormItem				
				required='false'
				key={`d-${k}`}
				>
					{getFieldDecorator(`dislike-${k}`, {
						validateTrigger: ['onChange', 'onBlur'],
						rules: [{
							required: true,
							whitespace: true,
							message: "Please input passenger's name or delete this field.",
						}]
					})(
						<Input placeholder='add dislikes' style={{ width: '80%', marginRight: 8 }} />
					)}

					{keys_d.length > 0 ? (
						<Icon
						type="minus-circle-o"
						onClick={() => this.remove_d(k)}
						/>
					): null}
				</FormItem>
			);
		});
		
		return (
			<Row>
				<Col xs={10} xsOffset={1}>					
					<Form onSubmit={this.handleSubmit}>
						
						
						<FormItem label='First name'>
						{getFieldDecorator('firstName',{
							validateTrigger: ['onBlur', 'onChange'],
							rules: [{
								required: true,
								whitespace: true,
								message: 'First name is required...'
							}]
						})(<Input className='firstName' placeholder='First name' />)}
						</FormItem>

						<FormItem label='Last Name'>
						{getFieldDecorator('lastName',{
							validateTrigger: ['onBlur'],
							rules: [{								
								whitespace: true
							}]
						})(<Input className='lastName' placeholder='Last name' />)}
						</FormItem>

						<FormItem>
							<h5>Notes</h5>
							<TextArea rows={4} placeholder='Note' />
						</FormItem>

						<FormItem label='Date of birth'>
							{getFieldDecorator('DOB', {	
									validateTrigger: ['onBlur'],
									rules: [{
										pattern: /^(1?9[5-9]|2?0[01])[0-9]\/(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])$/,
										whitespace: true,
										message: 'Please use YYYY/MM/DD format'
									}]
								})(<Input placeholder='YYYY/MM/DD' />)
							}
						</FormItem>
						
						{/*<div className='dob-row'>
							<Row>
								<Col sm={12}>
								<h5>Date of birth</h5>
								</Col>								
								<FormItem>
									{'Month: '}
									{getFieldDecorator('DOB_month', {
											validateTrigger: ['onBlur'],
											rules: [{
												whitespace: true,
												message: 'Month is empty'
											}, {
												validator: this.dobCheckMonth
											}]
										})(<InputNumber className='numInput' />)
									}
								</FormItem>
								<FormItem>
									{'Day: '}
									{getFieldDecorator('DOB_day', {
											validateTrigger: ['onBlur'],
											rules: [{
												whitespace: true,
												message: 'Day is empty'
											}, {
												validator: this.dobCheckDay
											}]
										})(<InputNumber className='numInput' />)
									}
								</FormItem>
								<FormItem>
									{'Year: '}
									{getFieldDecorator('DOB_year', {
											validateTrigger: ['onBlur'],
											rules: [{
												whitespace: true,
												message: 'Year is empty'
											}]
										})(<InputNumber className='numInput' />)
									}
								</FormItem>								
							</Row>
						</div>*/}
						

						<div className='dob-row'>
						<Row>							
							<Col xs={12} md={8}>
								<h5>Likes</h5>
								{formItems}
								<Button type="dashed" onClick={this.add}>
									<Icon type="plus" /> Add Likes
								</Button>
							</Col>
						</Row>
						</div>
						<div className='dob-row'>
						<Row>							
							<Col xs={12} md={8}>
								<h5>Dislikes</h5>
								{formItems_d}
								<Button type="dashed" onClick={this.add_d}>
									<Icon type="plus" /> Add Likes
								</Button>
							</Col>
						</Row>
						</div>
						<FormItem>
							<h5>Questions</h5>
							{questions}
						</FormItem>

						<FormItem>
							<Button type='primary' htmlType='submit'>Submit</Button>
						</FormItem>
					</Form>
				</Col>
			</Row>
		);
	}
}

export default Form.create()(AddPerson);