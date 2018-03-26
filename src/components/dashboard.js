import React from 'react';
import SideMenus from './sidemenus';
import MainBody from './mainBody';
import './dashboard.css';
import { Layout } from 'antd';
const { Sider } = Layout;

export default class Dashboard extends React.Component {
	state = {
		collapsed: false
	}
	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({ collapsed });
	}
	render(){
		return (
			<Layout style={{ minHeight: '100vh'}}>
				<MainBody displayComponent='MainContent' />
				<Sider
				breakpoint="lg"
				collapsible
				collapsed={this.state.collapsed}
				onCollapse={this.onCollapse}
				reverseArrow={true}
				className='nav-sider'
				>
					<div className="logo">
					</div>
					<SideMenus />
				</Sider>

			</Layout>
		);
	}
}