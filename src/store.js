import {createStore, combineReducers} from 'redux';
import loginReducer from './reducers/loginReducer';

export default createStore(
	combineReducers({
		login: loginReducer
	})
);