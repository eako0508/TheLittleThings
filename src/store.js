import {createStore, combineReducers} from 'redux';
import MainContentReducer from './reducers/mainContentReducer';
import EditPersonReducer from './reducers/editPersonReducer';
import LookupReducer from './reducers/lookupReducer';

export default createStore(
	combineReducers({
		mainContent: MainContentReducer,
		editPerson: EditPersonReducer,
		lookup: LookupReducer
	})
);