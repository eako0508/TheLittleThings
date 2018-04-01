import React from 'react';
import { Table, Divider } from 'antd';
import { Row, Col, Button } from 'react-bootstrap';
import AddInput from './addInput';



export default class MainContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
	onSubmitHandler = (search, obj) => {
		console.log(obj);
	}

	handleClickEdit = (e) => {
		console.log('atEdit');
		console.log(e);
		this.props.onChangeMenu('EditPerson');
		return false;
	}
	render(){
		const columns = [
			{
				title: 'Name',
				dataIndex: 'name',
				sorter: true,
				render: name => `${name.firstName} ${name.lastName}`,
				width: '20%'
			}, {
				title: 'Description',
				dataIndex: 'description',
				width: '20%'
			}, {
				title: 'Actions',
				render: () => (
					<div>
						<Button
						bsStyle='primary'
						onClick={()=>this.handleClickEdit()}
						>Edit</Button>

						<Divider type='vertical' />

						<Button bsStyle='danger'>Delete</Button>
					</div>
				)
			}
		];
		return(
			<Row>
				<Col xs={10} xsOffset={1}>
					<AddInput
					info={{placeholder: 'Search a person', btnTitle: 'Search'}}
					onSubmitHandler={e=>this.onSubmitHandler('search', e)}
					/>
					<Table
					columns={columns}
					dataSource={this.props.mainContentData.friends}
					rowKey={id=>this.props.mainContentData.id}
					/>
				</Col>
			</Row>
		);
	}
}