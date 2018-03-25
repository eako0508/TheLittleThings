import React from 'react';
import SideMenus from './sidemenus';
import MainBody from './mainBody';
import './app.css';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;


export default class App extends React.Component {

	render(){
		return (
			<Layout>
				<Sider
				breakpoint="lg"
				collapsedWidth="0"
				onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
				>
					<div className="logo">
						<Icon type="desktop" />
						<a href='#'>BuildaPC</a>
					</div>
					<SideMenus />
				</Sider>
				<MainBody />
			</Layout>
		);
	}
}