import React from 'react';
import LoginForm from './loginForm';
import './landing.css';
import { Button, Modal } from 'antd';
import { Row, Col } from 'react-bootstrap';

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
				<Row >
					<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
						{/*<Row>
							<Col xsHidden='true'>
								<div className='empty'/>
							</Col>
						</Row>*/}
						<div className='main-col'>
							<div className='message-container'>
								<h3 className='Playfair'>The Little Things</h3>
								<br/>
								<p className='message Playfair'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt commodo nunc, non convallis erat tempor dignissim. Suspendisse ornare velit purus, eu pulvinar ante lacinia eu. Quisque lacinia semper turpis nec pulvinar. Praesent non lectus ultricies, tempor sapien non, faucibus lorem. Maecenas vitae commodo dui, a commodo erat. In id metus velit. Sed eget leo blandit, bibendum erat in, mattis nunc. Donec non ullamcorper purus. Cras aliquet sodales risus, ut fringilla enim.
								</p>
							</div>

							<div className='btn-container'>
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
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}