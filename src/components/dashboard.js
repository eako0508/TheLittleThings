import React from 'react';
import SideMenus from './sidemenus';
import MainContent from './mainContent';
import EditPerson from './editPerson';
import AddPerson from './addPerson';
import './dashboard.css';
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export default class Dashboard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			collapsed: false,
			menu: 'MainContent'
		}
	}
	
	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({ collapsed });
	}
	onChangeMenu = (menu) => {
		this.setState({
			menu
		});
	}
	
	render(){
		let onMainBody;
		if(this.state.menu === 'MainContent'){
			onMainBody = <MainContent onChangeMenu={menu=>this.onChangeMenu(menu)} />;
		} else if(this.state.menu === 'EditPerson'){
			onMainBody = <EditPerson  onChangeMenu={menu=>this.onChangeMenu(menu)} />;
		} else if(this.state.menu === 'AddPerson'){
			onMainBody = <AddPerson onChangeMenu={menu=>this.onChangeMenu(menu)} />;
		}
		return (
			<Layout style={{ minHeight: '100vh'}}>				
				<Layout>
					{/*<Header className='body-header' />*/}
					<Content className='body-content'>
						{onMainBody}
					</Content>
					<Footer className='body-footer'>
					The Little Things
					</Footer>
				</Layout>
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
					<SideMenus onChangeMenu={menu=>this.onChangeMenu(menu)} />
				</Sider>

			</Layout>
		);
	}
}