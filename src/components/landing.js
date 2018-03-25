import React from 'react';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export default () => {

	return (
		<div>
			This is landing page
			<Button type='primary'><Link to='/'>Login</Link></Button>
		</div>
	);
}