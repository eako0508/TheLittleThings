import React from 'react';
import MainContent from './mainContent';
import './mainBody.css';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default class MainBody extends React.Component {

	render(){
		return (
			<Layout>
				<Header className='body-header' />
				<Content className='body-content'>
					<MainContent />
				</Content>
				<Footer className='body-footer'>
				The Little Things
				</Footer>
			</Layout>
		);
	}
}