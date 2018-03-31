import React from 'react';
import MainContent from './mainContent';
import EditPerson from './editPerson';
import AddPerson from './addPerson';
import NavBS from './nav';
import './dashboard.css';
import { Layout, BackTop } from 'antd';

const { Content, Footer } = Layout;

const editPersonData = {
	info: {
		name: 'Jessica',
		DOB: 'March 17',
		url:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
	},
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
};

export default class Dashboard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			menu: 'MainContent'
		}
	}
	onChangeMenu = (menu) => {
		this.setState({
			menu
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
				<NavBS  onChangeMenu={menu=>this.onChangeMenu(menu)} />
				<Layout>
					{/*<Header className='body-header' />*/}
					<Content className='body-content'>

						{onMainBody}

					</Content>
					<Footer className='body-footer'>
					The Little Things
					</Footer>
					<BackTop />
				</Layout>
			</Layout>
		);
	}
}
