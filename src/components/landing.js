import React from 'react';
import LoginForm from './loginForm';
import { Button, Modal } from 'antd';

export default class Landing extends React.Component {

	state = {
		loginVisible: false,
		registerVisible: false
	}
	clickLogin = () => {
		this.setState({
			loginVisible: true
		});
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
			<div className='app'>
				This is landing page
				<Button type='primary' onClick={this.clickLogin}>Login</Button>
				<Modal
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
				footer={null}
				>
					<LoginForm onClick={this.handleRegisterBtn} />
				</Modal>
				<Button onClick={()=>window.location='/dashboard'}>Proceed</Button>
			</div>
		);
	}
}