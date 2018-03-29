import React from 'react';
import SideMenus from './sidemenus';
import MainContent from './mainContent';
import EditPerson from './editPerson';
import AddPerson from './addPerson';
import './dashboard.css';
import { Layout, Icon } from 'antd';
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
		//this.setState({ collapsed });
	}
	onChangeMenu = (menu) => {
		this.setState({
			menu,
			collapsed: true
		});
	}
	//not collapsing the menu with button
	toggle = () => {
		console.log('toggle');
		console.log(this.state.collapsed);
		this.setState({
			collapsed: !this.state.collapsed
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
				<Sider
				breakpoint='lg'
				collapsedWidth="0"
				onCollapse={(collapsed, type) => {console.log(collapsed, type);}}
				className='nav-sider'
				>
					<div className="logo">
					</div>
					<SideMenus onChangeMenu={menu=>this.onChangeMenu(menu)} />
				</Sider>
				<Layout>
					<Header className='body-header'>
						<Icon
						className='trigger'
						type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
						onClick={this.toggle}
						/>
					</Header>
					<Content className='body-content'>
						{onMainBody}
					</Content>
					<Footer className='body-footer'>
					The Little Things
					</Footer>
				</Layout>


			</Layout>
		);
	}
}