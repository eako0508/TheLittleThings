import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export default () => {

	return (
		<div className='app'>
			This is landing page
			<Button type='primary'><Link to='/dashboard'>Login</Link></Button>
		</div>
	);
}