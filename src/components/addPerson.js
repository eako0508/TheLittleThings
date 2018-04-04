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
			callback(value);
		}
	}
	dobCheckMonth = (rule, value, callback) => {
		const form = this.props.form;
		
		if(value && form.getFieldValue('DOB_month')===''){
			callback('Day is empty!!!!');
		} else{
			callback(value);
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
						<Input placeholder='add dislikes' style={{ width: '60%', marginRight: 8 }} />
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
						<FormItem>
							<h5>Name</h5>
							<Input placeholder='Name' />
						</FormItem>

						<FormItem>
							<h5>Notes</h5>
							<TextArea rows={4} placeholder='Note' />
						</FormItem>

						{/*<FormItem label='Date of birth'>
							{getFieldDecorator('DOB', {	
									validateTrigger: ['onBlur'],
									rules: [{
										whitespace: true
									}, {
										validator: this.dateFormatChecker
									}]
								})(<Input placeholder='YYYY/MM/DD' />)
							}
						</FormItem>*/}
						<div className='dob-row'>
						
							<h5>DOB</h5>
							{'Month: '}
							{getFieldDecorator('DOB_month', {
									validateTrigger: ['onBlur'],
									rules: [{
										whitespace: true
									}, {
										validator: this.dobCheckMonth
									}]
								})(<InputNumber className='numInput' />)
							}						
							{'Day: '}
							{getFieldDecorator('DOB_day', {
									validateTrigger: ['onBlur'],
									rules: [{
										whitespace: true
									}, {
										validator: this.dobCheckDay
									}]
								})(<InputNumber className='numInput' />)
							}
						
							{'Year: '}
							{getFieldDecorator('DOB_year', {
									validateTrigger: ['onBlur'],
									rules: [{
										whitespace: true
									}]
								})(<InputNumber className='numInput'/>)
							}
						
						</div>

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
							<h5>Dislikes</h5>
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