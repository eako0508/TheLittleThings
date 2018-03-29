import React from 'react';
import './mainContent.css';
import { Redirect } from 'react-router-dom';
import { Avatar, Card, Icon } from 'antd';
const { Meta } = Card;

export default class MainContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			friends: [
				{ name: 'Jessica', description: 'Cool girl', url:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
				{ name: 'Josh', description: 'he\'s alright', url:'' },
				{ name: 'Isaac', description: 'Small asian guy from office', url:'' },
				{ name: 'Ryan', description: 'A guy from New Hampshire', url:'' }
			]
		}
	}

	handleClickEdit = (e) => {
		console.log(e);
		if(this.props.onChangeMenu){
			this.props.onChangeMenu('EditPerson');
		} else {
			console.log('no');
		}		
	}

	render(){
		console.log(this.props.mainContentData.friends);
		const displayCards = this.props.mainContentData.friends.map((item,idx)=>{

			let picCover;
			if(item.url===''){
				return (
					<Card
					hoverable
					style={{ width: 240 }}
					cover={<Avatar shape='square' size='large' icon='user' className='friendAvatar'/>}
					actions={[<Icon type="edit"/>, <Icon type="ellipsis" />]}
					className='friendCards'
					>
						<Meta
						title={item.name}
						description={item.description}
						/>
					</Card>
			)} else{
				return (
					<Card
					hoverable
					style={{ width: 240 }}
					cover={<img alt="example" src={item.url} />}
					actions={[<Icon type="edit"/>, <Icon type="ellipsis" />]}
					className='friendCards'
					>
						<Meta
						title={item.name}
						description={item.description}
						/>
					</Card>
				)}
		});
		return (
			<div className='body-content-div' onClick={this.handleClickEdit}>
				{/*<Card
				hoverable
				style={{ width: 240 }}
				cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
				actions={[<Icon type="edit"/>, <Icon type="ellipsis" />]}
				className='friendCards'
				>
					<Meta
					title="Jessica"
					description="Cool girl"
					/>
				</Card>
				<Card
				hoverable
				style={{ width: 240 }}
				cover={<Avatar shape='square' size='large' icon='user' className='friendAvatar'/>}
				actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}
				className='friendCards'
				>
					<Meta
					title={this.state.friends[0].name}
					description={this.state.friends[0].description}
					/>
				</Card>
				<Card
				hoverable
				style={{ width: 240 }}
				cover={<Avatar shape='square' size='large' icon='user' className='friendAvatar'/>}
				actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}
				className='friendCards'
				>
					<Meta
					title={this.state.friends[1].name}
					description={this.state.friends[1].description}
					/>
				</Card>
				<Card
				hoverable
				style={{ width: 240 }}
				cover={<Avatar shape='square' size='large' icon='user' className='friendAvatar'/>}
				actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}
				className='friendCards'
				>
					<Meta
					title={this.state.friends[2].name}
					description={this.state.friends[2].description}
					/>
				</Card>*/}
				{displayCards}
			</div>
		);
	}
}
