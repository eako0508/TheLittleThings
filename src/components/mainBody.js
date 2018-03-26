import React from 'react';
import MainContent from './mainContent';
import './mainBody.css';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default class MainBody extends React.Component {
	constructor(props){
		super(props);

	}
	renderContent(){
		if(this.props.displayComponent === 'MainContent'){
			return <MainContent />;
		}
	}
	render(){

		return (
			<Layout>
				<Header className='body-header' />
				<Content className='body-content'>
					{this.renderContent()}
				</Content>
				<Footer className='body-footer'>
				The Little Things
				</Footer>
			</Layout>
		);
	}
}