import React from 'react';
import { Menu, Icon, Modal } from 'antd';
import LoginForm from './loginForm';
import { Redirect } from 'react-router-dom';

export default class SideMenus extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loginVisible: false,
			registerVisible: false
		}
	}


	showModal = (e) => {

		if(e.key === '1'){
			this.setState({
				loginVisible: true
			});
		} else if(e.key === '2'){
			window.location = '/add';
		}
	}
	handleLoginOk = (e) => {
		e.stopPropagation();
		console.log('OK');
		console.log(e);
		this.setState({
			loginVisible: false
		});
	}
	handleLoginCancel = (e) => {
		e.stopPropagation();
		console.log('Cancel');
		console.log(e);
		this.setState({
			loginVisible: false
		});
	}
	handleRegisterBtn = (e) => {
		e.stopPropagation();
		console.log('RegisterBtn');
		this.setState({
			loginVisible: false,
			registerVisible: true
		});
	}
	handleRegisterOk = (e) => {
		e.stopPropagation();
		console.log('Register-cancel');
		this.setState({
			registerVisible: false
		});
	}
	handleRegisterCancel = (e) => {
		e.stopPropagation();
		console.log('Register-cancel');
		this.setState({
			registerVisible: false
		});
	}
	render(){
		return (
			<Menu theme="dark" mode="inline" onClick={this.showModal}>
				<Menu.Item key="1" >
					<Icon type="logout" />
					<span className="nav-text">Logout</span>
					{/*<Modal
					title="Login"
					visible={this.state.loginVisible}
					onCancel={this.handleLoginCancel}
					footer={null}
					>
						<LoginForm onClick={this.handleRegisterBtn} />
					</Modal>
					<Modal
					title="Register"
					visible={this.state.registerVisible}
					onCancel={this.handleRegisterCancel}
					onOk={this.handleRegisterOk}
					>
						<RegisterForm onClick={this.handleRegisterBtn} />
					</Modal>*/}
				</Menu.Item>
				<Menu.Item key="2">
					<Icon type="user-add" />
					<span className="nav-text">Add Person</span>
				</Menu.Item>
			</Menu>
		);
	}
}