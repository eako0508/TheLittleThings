import React from 'react';	//origin
import SideMenus from './sidemenus';
import { Form, Input, Button } from 'antd';	//origin
import { Layout } from 'antd';
const FormItem = Form.Item;	//origin
const { TextArea } = Input;	//origin
const { Header, Content, Footer, Sider } = Layout;


export default class Dashboard extends React.Component {
	state = {
		collapsed: false
	}
	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({ collapsed });
	}
	render(){
		return (
			<Layout style={{ minHeight: '100vh'}}>
				<MainBody />
				<Sider
				breakpoint="lg"
				collapsible
				collapsed={this.state.collapsed}
				onCollapse={this.onCollapse}
				reverseArrow={true}
				className='nav-sider'
				>
					<div className="logo">
					</div>
					<SideMenus />
				</Sider>

			</Layout>
		);
	}
}

class MainBody extends React.Component {
	constructor(props){
		super(props);

	}

	render(){

		return (
			<Layout>
				<Header className='body-header' />
				<Content className='body-content'>
					<AddPerson />
				</Content>
				<Footer className='body-footer'>
				The Little Things
				</Footer>
			</Layout>
		);
	}
}

class AddPerson extends React.Component {

	constructor(props){
		super(props);
		this.state = {

		}
	}
	handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted');

	}
	render(){
		return (
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
		);
	}
}