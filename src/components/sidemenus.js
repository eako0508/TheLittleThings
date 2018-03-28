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

	/*
	
	
	
	*/
	menuClick = (menu) => {
		console.log(menu);
		if(menu.key === '1'){
			window.location = '/';
		} else if(menu.key === '2'){
			this.props.onChangeMenu('AddPerson');
		}
	}
	render(){
		return (
			<Menu theme="dark" mode="inline" onClick={this.menuClick}>
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