import React from 'react';
import './mainBody.css';
import './dashboard.css';
import { Layout } from 'antd';
import { Form, Input, Button, List, Row, Col } from 'antd';
import SideMenus from './sidemenus';

const { Header, Content, Footer } = Layout;
const FormItem = Form.Item;
const { TextArea } = Input;



const { Sider } = Layout;

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

	render(){
		return (
			<Layout>
				<Header className='body-header' />
				<Content className='body-content'>
					<EditPerson />
				</Content>
				<Footer className='body-footer'>
				The Little Things
				</Footer>
			</Layout>
		);
	}
}

class EditPerson extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: {
				likes: [
					'cooking Italian food',
					'shopping from Macy\'s',
					'she likes to be recognized with her hard work and efforts',
					'likes those who are kind to others'
				],
				dislikes: [
					'She hates when people taker her food away without asking, like snacks',
					'she doesn\'t like rude people'
				]
			}
		}
	}

	render(){
		return (
			<Row className='preference' gutter={16}>
				<Col span={12} className='Likes'>
					<h3>Likes</h3>
					<List
					bordered
					dataSource={this.state.data.likes}
					renderItem={item => (<List.Item>{item}</List.Item>)}
					/>
				</Col>
				<Col span={12} className='Dislikes'>
					<h3>Dislikes</h3>
					<List
					bordered
					dataSource={this.state.data.dislikes}
					renderItem={item => (<List.Item>{item}</List.Item>)}
					/>
				</Col>
			</Row>
		);
	}
}