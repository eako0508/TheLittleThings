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
	menuClick = (menu) => {
		console.log(menu);
		if(menu.key === '1'){
			window.location = '/';
		} else if(menu.key === '2'){
			this.props.onChangeMenu('MainContent');
		} else if(menu.key === '3'){
			this.props.onChangeMenu('AddPerson');
		}
	}
	render(){
		return (
			<Menu theme="dark" mode="inline" onClick={this.menuClick}>
				<Menu.Item key="1" >
					<Icon type="logout" />
					<span className="nav-text">Logout</span>
				</Menu.Item>
				<Menu.Item key="2">
					<Icon type="appstore" />
					<span className="nav-text">Dash Board</span>
				</Menu.Item>
				<Menu.Item key="3">
					<Icon type="user-add" />
					<span className="nav-text">Add Person</span>
				</Menu.Item>
			</Menu>
		);
	}
}