import React from 'react';
import {
	Navbar,
	Nav,
	NavItem
} from 'react-bootstrap';
import { Icon } from 'antd';

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
					<Nav pullRight>
						<NavItem eventKey={1} href="#" onClick={()=>this.menuClickHandler('1')}>
						<Icon type="appstore" /> 						
						{' '}Dashboard
						</NavItem>
						<NavItem eventKey={2} href="#" onClick={()=>this.menuClickHandler('2')}>
						<Icon type="user-add" /> 
						Add Person
						</NavItem>
						<NavItem eventKey={3} href="#" onClick={()=>this.menuClickHandler('3')}>
						<Icon type="logout" /> 
						Logout
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
