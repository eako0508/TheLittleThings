import React from 'react';
import { Menu, Icon, Modal } from 'antd';

export default class SideMenus extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			visible: false
		}
	}


	showModal = (e) => {
		if(e.key === '1'){
			this.setState({
				visible: true
			});
		}
	}
	handleOk = (e) => {
		e.stopPropagation();
		console.log('OK');
		console.log(e);
		this.setState({
			visible: false
		});
	}
	handleCancel = (e) => {
		e.stopPropagation();
		console.log('Cancel');
		console.log(e);
		this.setState({
			visible: false
		});
	}
	render(){
		return (
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} onClick={this.showModal}>
				<Menu.Item key="1" >
					<Icon type="user" />
					<span className="nav-text">Login</span>
					<Modal
						title="Login"
						visible={this.state.visible}
						onOk={this.handleOk}
						onCancel={this.handleCancel}
						>
						<p>Some contents...</p>
						<p>Some contents...</p>
						<p>Some contents...</p>
					</Modal>
				</Menu.Item>
				<Menu.Item key="2">
					<Icon type="video-camera" />
					<span className="nav-text">About</span>
				</Menu.Item>
			</Menu>
		);
	}
}