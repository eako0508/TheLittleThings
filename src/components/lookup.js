import React from 'react';
import SingleInputForm from './singleInputForm';
import {Input, Divider} from 'antd';

export default class lookup extends React.Component {

	render(){
		return (
			<div>				
				<div>
					<Input placeholder='Name'/>
				</div>

				<Divider />

				<div>
					<SingleInputForm />
				</div>				
			</div>

			);
	}
}