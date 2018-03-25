import React from 'react';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default class MainContent extends React.Component {

	render(){
		return (
			<Layout>
				<Header className='body-header' />
				<Content className='body-content'>
					<div className='body-content-div'>
					content
					</div>
				</Content>
				<Footer className='body-footer'>
				BuildaPC
				</Footer>
			</Layout>
		);
	}
}