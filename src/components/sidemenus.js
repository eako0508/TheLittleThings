import React from 'react';
import { Menu, Icon, Modal } from 'antd';

export default class SideMenus extends React.Component {

	state = { visible: false }
	showModal = () => {
		this.setState({
			visible: true,
		});
	}
	handleOk = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	}
	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	}
	render(){
		return (
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
				<Menu.Item key="1" onClick={this.showModal}>
					<Icon type="user" />
					<span className="nav-text">Login</span>
					<Modal
						title="Basic Modal"
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