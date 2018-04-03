import React from 'react';
import './singleInputForm.css';
import { Form, Input, Button } from 'antd';
import { Row, Col } from 'react-bootstrap';
const FormItem = Form.Item;

class SingleInputForm extends React.Component {
	constructor(props){
		super(props);
		this.state ={

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
			<Form onSubmit={this.handleSubmit}>

				<FormItem>
					{getFieldDecorator('input', {
						rules: [{ required: true, message: 'Please input a thing to add!' }]
					})(
					<Row>
						<Col xs={12} sm={10}>
							<Input placeholder='add a thing' className='input' />
						</Col>
						<Col xs={12} sm={2}>
							<Button type='primary' htmlType='submit' className='form-btn'>add</Button>
						</Col>
					</Row>
					)}
				</FormItem>

				<FormItem className='d-inline'>
					{/*<Button type='primary' htmlType='submit'>add</Button>*/}
				</FormItem>
			</Form>
		);
	}
}

export default Form.create()(SingleInputForm);