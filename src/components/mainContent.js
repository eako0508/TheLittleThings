import React from 'react';
import {connect} from 'react-redux';
import './mainContent.css';
import { Avatar, Card, Icon, Pagination } from 'antd';
//import { Row, Col } from 'react-bootstrap';
const { Meta } = Card;

class MainContent extends React.Component {
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
	cardClick = (idx, e) => {		
		if(idx === 0){
			this.props.onChangeMenu('EditPerson');
		}		
	}
	render(){		
		const displayCards = this.props.friends.map((item,idx)=>{

			return (

				<Card
				onClick={this.cardClick.bind(this, idx)}
				key={`card-${idx}`}
				className='friendCards'
				style={{ width: 240 }}
				hoverable
				cover={
					item.url === ''
					? <Avatar shape='square' size='large' icon='user' className='friendAvatar'/>
					: <img alt={`img-${idx}`} src={item.url} />
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
				<br/>
				<br/>
				<Pagination defaultCurrent={1} total={1} />
			</div>
		);
	}
}

const mapStateToProps = state => ({	
	friends: state.mainContent.friends
});

export default connect(mapStateToProps)(MainContent);
/*actions={[
					<a onClick={()=>this.handleClickEdit(idx)}>
						<Icon type="edit" />
					</a>
					, <a onClick={()=>this.handleClickDot(idx)}>
						<Icon type="ellipsis" />
					</a>
				]}*/