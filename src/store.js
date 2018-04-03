import {createStore, combineReducers} from 'redux';
import MainContentReducer from './reducers/mainContentReducer';
import EditPersonReducer from './reducers/editPersonReducer';

export default createStore(
	combineReducers({
		mainContent: MainContentReducer,
		editPerson: EditPersonReducer
	})
);