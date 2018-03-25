import React from 'react';
import {
	Navbar,
	Nav,
	NavItem
} from 'react-bootstrap';

import './nav.css';

export default () => {

	return (
		<Navbar collapseOnSelect>
			<Navbar.Header>
				<Navbar.Brand>
					<a href="#">Build A PC</a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav>
					<NavItem eventKey={1} href="#">
					Link
					</NavItem>
				</Nav>
				<Nav pullRight>
					<NavItem eventKey={1} href="#">
					Link Right
					</NavItem>
					<NavItem eventKey={2} href="#">
					Link Right
					</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
