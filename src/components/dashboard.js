import React from 'react';
import SideMenus from './sidemenus';
import MainContent from './mainContent';
import EditPerson from './editPerson';
import AddPerson from './addPerson';
import './dashboard.css';
import { Layout, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const editPersonData = {
	data: {
		likes: [
			'cooking Italian food',
			'shopping from Macy\'s',
			'she likes to be recognized with her hard work and efforts',
			'likes those who are kind to others'
		],
		dislikes: [
			'She hates when people taker her food away without asking, like snacks',
			'she doesn\'t like rude people'
		]
	},
	questionnair: [
		{
			q:'What is your favorite local restaurant and the meal you most enjoy eating when there?',
			a: 'There\'s a vietnamese restaurant in the flushing and I always eat Pho and summer roll from there every time I visit.'
		},{
			q: 'What\'s your favorite drink?',
			a: 'Lately it\'s black coffee.'
		},{
			q: 'What songs have you completely memorized?',
			a: 'Lot of songs from Seo Taiji from South Korea.'
		},{
			q: 'Are you usually early or late?',
			a: 'I am an early bird at the beginning, but then ...'
		},{
			q: 'How do you relax after a hard day of work?',
			a: 'I used to play computer games, or watch TV shows.'
		}
	]
};
const addPersonData = {
	questions: [
		'What is your favorite local restaurant and the meal you most enjoy eating when there?',
		'What\'s your favorite drink?',
		'What songs have you completely memorized?',
		'Are you usually early or late?',
		'How do you relax after a hard day of work?',
		'What\'s the farthest you’ve ever been from home?'
	]
};

const mainContentData = {
	friends: [
		{ name: 'Jessica', description: 'Cool girl', url:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
		{ name: 'Josh', description: 'he\'s alright', url:'' },
		{ name: 'Isaac', description: 'Small asian guy from office', url:'' },
		{ name: 'Ryan', description: 'A guy from New Hampshire', url:'' }
	]
}
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
			onMainBody = <MainContent mainContentData={mainContentData} onChangeMenu={menu=>this.onChangeMenu(menu)} />;
		} else if(this.state.menu === 'EditPerson'){
			onMainBody = <EditPerson editPersonData={editPersonData} onChangeMenu={menu=>this.onChangeMenu(menu)} />;
		} else if(this.state.menu === 'AddPerson'){
			onMainBody = <AddPerson addPersonData={addPersonData} onChangeMenu={menu=>this.onChangeMenu(menu)} />;
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
