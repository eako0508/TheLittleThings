import React from 'react';
import './mainContent.css';
import { Avatar, Card, Icon } from 'antd';
//import { Row, Col } from 'react-bootstrap';
const { Meta } = Card;

export default class MainContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	handleClickEdit = (e) => {
		if(e === 0){
			this.props.onChangeMenu('EditPerson');
		}
		return false;
	}
	handleClickDot = (e) => {
		return false;
	}

	render(){
		console.log(this.props.mainContentData.friends);

		const displayCards = this.props.mainContentData.friends.map((item,idx)=>{

			return (

				<Card
					key={`card-${idx}`}
					className='friendCards'
					style={{ width: 240 }}
					hoverable
					cover={
						item.url === ''
						? <Avatar shape='square' size='large' icon='user' className='friendAvatar'/>
						: <img alt={`img-${idx}`} src={item.url} />
					}
					actions={
						[
						<a onClick={()=>this.handleClickEdit(idx)}>
							<Icon type="edit" />
						</a>
						, <a onClick={()=>this.handleClickDot(idx)}>
							<Icon type="ellipsis" />
						</a>
						]
					}
					>
						<Meta
						title={item.name.firstName}
						description={item.description}
						/>
				</Card>

			);
		});

		return (
			<div className='body-content-div'>
				{displayCards}
			</div>
		);
	}
}
