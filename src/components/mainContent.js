import React from 'react';
import './mainContent.css';
import { Redirect } from 'react-router-dom';
import { Avatar, Card, Icon } from 'antd';
const { Meta } = Card;

export default class MainContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	handleClickEdit = (e) => {
		console.log(e);
		if(this.props.onChangeMenu){
			this.props.onChangeMenu('EditPerson');
		} else {
			console.log('no');
		}
		return false;
	}
	handleClickDot = (e) => {
		console.log(e);
		return false;
	}
	clik = (e) => {
		console.log(e);
	}
	
	render(){
		console.log(this.props.mainContentData.friends);
		
		const displayCards = this.props.mainContentData.friends.map((item,idx)=>{
			
			return (
				<Card
					hoverable
					style={{ width: 240 }}
					cover={
						item.url === ''
						? <Avatar shape='square' size='large' icon='user' className='friendAvatar'/>
						: <img alt={`img-${idx}`} src={item.url} />
					}
					
					actions={
						[
						
						<Icon type="edit"
						//onClick={()=>this.handleClickEdit(idx)}
						/>
						
						, <Icon type="ellipsis" />
						//onClick={()=>this.handleClickDot(idx)}
						]
					}
					className='friendCards'
					>
						<Meta
						title={item.name}
						description={item.description}
						/>
				</Card>
			);			
		});

		return (
			<div className='body-content-div' onClick={this.clik.bind(this)}>				
				{displayCards}
			</div>
		);
	}
}
