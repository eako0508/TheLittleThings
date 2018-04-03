import React from 'react';
import { Form, Input, Button, DatePicker, Icon } from 'antd';
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
		if (keys.length === 1) {
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
				label={index===0?'Likes':''}
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

					{keys.length > 1 ? (
						<Icon
						type="minus-circle-o"
						onClick={() => this.remove(k)}
						/>
					): null}
				</FormItem>
			);
		});

		return (
			<Row>
				<Col xs={10} xsOffset={1}>
					{/*<Login_test />*/}
					<Form onSubmit={this.handleSubmit}>
						<FormItem label='Name'>
							<Input placeholder='Name' />
						</FormItem>

						<FormItem label='Note'>
							<TextArea rows={4} placeholder='Note' />
						</FormItem>

						<FormItem label='Date of birth'>
							<DatePicker />
						</FormItem>
						<Row>
							<Col xs={12} md={8}>
								{formItems}
								<Button type="dashed" onClick={this.add}>
									<Icon type="plus" /> Add Likes
								</Button>
							</Col>
						</Row>

						<FormItem label='Dislikes'>
							<TextArea rows={4} placeholder='Note' />
						</FormItem>

						<FormItem label='Questions'>
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