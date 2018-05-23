import React from 'react';
import { Form, Input } from 'antd';
const FormItem = Form.Item;
const Search = Input.Search;

export default class AddInput extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
	extractString = (input) => {
		this.props.onSubmitHandler(input);
	}

	render(){
		return (
			<Form>
				<FormItem>
					<Search
					placeholder={this.props.info.placeholder}
					enterButton={this.props.info.btnTitle}
					size="large"
					onSearch={this.extractString}
					/>
				</FormItem>
			</Form>
		);
	}
}