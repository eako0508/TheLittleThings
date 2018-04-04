import React from 'react';
import { Navbar, Nav, NavItem, Row, Col } from 'react-bootstrap';
import { Icon, Input, Button } from 'antd';

import './nav.css';

export default class NavBS extends React.Component{

	menuClickHandler = (e) => {
		if(e==='1'){
			this.props.onChangeMenu('MainContent');
		} else if(e==='2'){
			this.props.onChangeMenu('AddPerson');
		} else if(e==='3'){
			window.location = '/';
		}
	}
	render(){
		return (
			<Navbar collapseOnSelect className='mainNavBar'>				
				<Navbar.Header>
					<Navbar.Brand>
						<a>The Little Things</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse >
					<Nav>
						<NavItem>
							<Input size='small' className='search-input'/>
						</NavItem>
						<NavItem>
							<Button type='submit' size='small' className='search-btn'>Search</Button>							
						</NavItem>
					</Nav>
					<Nav pullRight>
						<NavItem eventKey={1} href="#" onClick={()=>this.menuClickHandler('1')}>						
							<Row>
								<Col smHidden={true} >
									<span className='nav_item'>
									<Icon type="appstore" className='nav-icon' />
									{' '}Dashboard
									</span>
								</Col>
								<Col xsHidden={true} mdHidden={true} lgHidden={true}>
									<span className='nav_item'>
									<Icon type="appstore" className='nav-icon' />
									</span>
								</Col>
							</Row>						
						</NavItem>
						<NavItem eventKey={2} href="#" onClick={()=>this.menuClickHandler('2')}>
						<Row>
							<Col smHidden={true} >
								<span className='nav_item'>
								<Icon type="user-add" />
								{' '}Add Person
								</span>
							</Col>
							<Col xsHidden={true} mdHidden={true} lgHidden={true}>
								<span className='nav_item'>
								<Icon type="user-add" />
								</span>
							</Col>
						</Row>						
						</NavItem>
						<NavItem eventKey={3} href="#" onClick={()=>this.menuClickHandler('3')}>
						<Row>
							<Col smHidden={true} >
								<span className='nav_item'>
								<Icon type="logout" />
								{' '}Logout
								</span>
							</Col>
							<Col xsHidden={true} mdHidden={true} lgHidden={true}>
								<span className='nav_item'>
								<Icon type="logout" />
								</span>
							</Col>
						</Row>						
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
