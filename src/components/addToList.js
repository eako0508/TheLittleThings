import React from 'react';
import { Form, Input } from 'antd';
//import { FormGroup, InputGroup, FormControl, Button as ButtonBS } from 'react-bootstrap';
const FormItem = Form.Item;
const Search = Input.Search;

export default class AddToList extends React.Component {
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
					placeholder="input search text" 
					enterButton="Add" 
					size="large" 
					onSearch={this.extractString}
					/>
				</FormItem>
			</Form>
		);
	}
}

/*
	render(){
		return (
			<form onSubmit={this.extractString}>
				<FormGroup>
					<InputGroup>
						<FormControl type='text' />
						<InputGroup.Button>
							<ButtonBS 
							bsStyle='primary'
							type='submit'									
							>
								Add
							</ButtonBS>
						</InputGroup.Button>								
					</InputGroup>
				</FormGroup>
			</form>
		);
	}
	*/